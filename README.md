[![][KurentoImage]][Kurento]

Copyright © 2013-2016 [Kurento]. Licensed under [LGPL v2.1 License].

kurento-composite-call
====================

Kurento JavaScript Tutorial: WebRTC group composite  call.

Running this tutorial
---------------------

In order to run this tutorial, please read the following instructions.

git clone https://github.com/srigaurav1986/KurentoExample.git   
cd KurentoExample   
npm install  
npm start  

If you have problems installing any of the dependencies, please remove them and clean the npm cache, and try to install them again:

rm -r node_modules  
npm cache clean  

Access the application connecting to the URL http://localhost:8080/ through a WebRTC capable browser (Chrome, Firefox).

Note

These instructions work only if Kurento Media Server is up and running in the same machine than the tutorial. 
Steps to run KMS 6.0 on Ubuntu 14.04 are :  

echo "deb http://ubuntu.kurento.org trusty kms6" | sudo tee /etc/apt/sources.list.d/kurento.list  
wget -O - http://ubuntu.kurento.org/kurento.gpg.key | sudo apt-key add -  
sudo apt-get update  
sudo apt-get install kurento-media-server-6.0  

However, it is possible to locate the KMS in other machine simple adding the argument ws_uri to the npm execution command, as follows:

npm start -- --ws_uri=ws://kms_host:kms_host:kms_port/kurento
In this case you need to use npm version 2. To update it you can use this command:

sudo npm install npm -g


What is Kurento
---------------

Kurento is an open source software project providing a platform suitable
for creating modular applications with advanced real-time communication
capabilities. For knowing more about Kurento, please visit the Kurento
project website: http://www.kurento.org.

Kurento is part of [FIWARE]. For further information on the relationship of
FIWARE and Kurento check the [Kurento FIWARE Catalog Entry]

Kurento is part of the [NUBOMEDIA] research initiative.

Documentation
-------------

The Kurento project provides detailed [documentation] including tutorials,
installation and development guides. A simplified version of the documentation
can be found on [readthedocs.org]. The [Open API specification] a.k.a. Kurento
Protocol is also available on [apiary.io].

Source
------

Code for other Kurento projects can be found in the [GitHub Kurento Group].

News and Website
----------------

Check the [Kurento blog]
Follow us on Twitter @[kurentoms].

Issue tracker
-------------

Issues and bug reports should be posted to the [GitHub Kurento bugtracker]

Licensing and distribution
--------------------------

Software associated to Kurento is provided as open source under GNU Library or
"Lesser" General Public License, version 2.1 (LGPL-2.1). Please check the
specific terms and conditions linked to this open source license at
http://opensource.org/licenses/LGPL-2.1. Please note that software derived as a
result of modifying the source code of Kurento software in order to fix a bug
or incorporate enhancements is considered a derivative work of the product.
Software that merely uses or aggregates (i.e. links to) an otherwise unmodified
version of existing software is not considered a derivative work.

Contribution policy
-------------------

You can contribute to the Kurento community through bug-reports, bug-fixes, new
code or new documentation. For contributing to the Kurento community, drop a
post to the [Kurento Public Mailing List] providing full information about your
contribution and its value. In your contributions, you must comply with the
following guidelines

* You must specify the specific contents of your contribution either through a
  detailed bug description, through a pull-request or through a patch.
* You must specify the licensing restrictions of the code you contribute.
* For newly created code to be incorporated in the Kurento code-base, you must
  accept Kurento to own the code copyright, so that its open source nature is
  guaranteed.
* You must justify appropriately the need and value of your contribution. The
  Kurento project has no obligations in relation to accepting contributions
  from third parties.
* The Kurento project leaders have the right of asking for further
  explanations, tests or validations of any code contributed to the community
  before it being incorporated into the Kurento code-base. You must be ready to
  addressing all these kind of concerns before having your code approved.

Support
-------

The Kurento project provides community support through the  [Kurento Public
Mailing List] and through [StackOverflow] using the tags *kurento* and
*fiware-kurento*.

Before asking for support, please read first the [Kurento Netiquette Guidelines]

[documentation]: http://www.kurento.org/documentation
[FIWARE]: http://www.fiware.org
[GitHub Kurento bugtracker]: https://github.com/Kurento/bugtracker/issues
[GitHub Kurento Group]: https://github.com/kurento
[kurentoms]: http://twitter.com/kurentoms
[Kurento]: http://kurento.org
[Kurento Blog]: http://www.kurento.org/blog
[Kurento FIWARE Catalog Entry]: http://catalogue.fiware.org/enablers/stream-oriented-kurento
[Kurento Netiquette Guidelines]: http://www.kurento.org/blog/kurento-netiquette-guidelines
[Kurento Public Mailing list]: https://groups.google.com/forum/#!forum/kurento
[KurentoImage]: https://secure.gravatar.com/avatar/21a2a12c56b2a91c8918d5779f1778bf?s=120
[LGPL v2.1 License]: http://www.gnu.org/licenses/lgpl-2.1.html
[NUBOMEDIA]: http://www.nubomedia.eu
[StackOverflow]: http://stackoverflow.com/search?q=kurento
[Read-the-docs]: http://read-the-docs.readthedocs.org/
[readthedocs.org]: http://kurento.readthedocs.org/
[Open API specification]: http://kurento.github.io/doc-kurento/
[apiary.io]: http://docs.streamoriented.apiary.io/
[instructions]: http://www.kurento.org/docs/current/tutorials/node/tutorial-4-one2one.html
# kurento-composite-sample
