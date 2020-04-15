//var ws = new WebSocket('ws://' + location.host + '/call');

// Let's do this
var socket = io();

var video;
var webRtcPeer;
var state = null;

const I_CAN_START = 1;
window.onload = function() {
	video = document.getElementById('video');
}

window.onbeforeunload = function() {
	socket.emit('close', 'close it');
}

// messages handlers
socket.on('message', message => {
	console.info('Received message: ' + message.data);

	switch (message.id) {
		case 'response':
			console.log('we got a response');
			response(message);
			break;
		case 'stopCommunication':
					dispose();
			break;
		case 'iceCandidate':
			console.log('we got a iceCandidate');
			webRtcPeer.addIceCandidate(message.candidate)
			break;
		default:
			console.error('Unrecognized message', message);
		}
});

// ws.onmessage = function(message) {
// 	var parsedMessage = JSON.parse(message.data);
// 	console.info('Received message: ' + message.data);

// 	switch (parsedMessage.id) {
// 	case 'response':
// 		response(parsedMessage);
// 		break;
// 	case 'stopCommunication':
//         dispose();
// 		break;
// 	case 'iceCandidate':
// 		webRtcPeer.addIceCandidate(parsedMessage.candidate)
// 		break;
// 	default:
// 		console.error('Unrecognized message', parsedMessage);
// 	}
// }

function response(message) {
	if (message.response != 'accepted') {
		var errorMsg = message.message ? message.message : 'Unknow error';
		console.info('Call not accepted for the following reason: ' + errorMsg);
        dispose();
	} else {
//        webRtcPeer.processSdpAnswer(message.sdpAnswer);
			setState(I_CAN_START);
	webRtcPeer.processAnswer(message.sdpAnswer);
	}
}

function start() {
	if (!webRtcPeer) {
		showSpinner(video);

		var options = {
			localVideo: undefined,
			remoteVideo: video,
			onicecandidate : onIceCandidate,
			mediaConstraints : {
				video : { width : 960, height : 720 }
			}
		}

		webRtcPeer = kurentoUtils.WebRtcPeer.WebRtcPeerSendrecv(options, function(error) {
			if(error) return onError(error);
			this.generateOffer(onOffer);
		});

		var message = {
			id : 'client',
			sdpOffer : onOffer
		};
	}
}

function setState(nextState) {
	state = nextState;
}

function onIceCandidate(candidate) {
	   console.log('Local candidate' + candidate);
	   var message = {
	      id : 'onIceCandidate',
	      candidate : candidate
	   };
	   sendMessage(message);
}

function onOffer(error, offerSdp) {
	if(error) return onError(error);

	console.info('Invoking SDP offer callback function ' + location.host);
	var message = {
		id : 'client',
		sdpOffer : offerSdp
	}
	sendMessage(message);
}

function onError(error) {
	console.error(error);
}

function stop() {
	var message = {
		id : 'stop'
	}
	sendMessage(message);
    dispose();
}

function dispose() {
	if (webRtcPeer) {
        webRtcPeer.dispose();
        webRtcPeer = null;
	}
	hideSpinner(video);
}

function sendMessage(message) {
	console.log('Senging message: ' + message);
	//ws.send(jsonMessage);
	socket.emit('message', message);
}

function showSpinner() {
	for (var i = 0; i < arguments.length; i++) {
		arguments[i].poster = './img/transparent-1px.png';
		arguments[i].style.background = 'center transparent url("./img/spinner.gif") no-repeat';
	}
}

function hideSpinner() {
	for (var i = 0; i < arguments.length; i++) {
		arguments[i].src = '';
		arguments[i].poster = './img/webrtc.png';
		arguments[i].style.background = '';
	}
}
