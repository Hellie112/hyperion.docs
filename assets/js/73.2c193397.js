(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{376:function(e,t,r){"use strict";r.r(t);var a=r(12),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"detect-hyperion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#detect-hyperion"}},[e._v("#")]),e._v(" Detect Hyperion")]),e._v(" "),t("p",[e._v("Hyperion announces its services on the network, via mDNS and SSDP.")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#ssdp"}},[e._v("SSDP")]),t("ul",[t("li",[t("a",{attrs:{href:"#ssdp-client-library"}},[e._v("SSDP-Client Library")])]),t("li",[t("a",{attrs:{href:"#usage"}},[e._v("Usage")])])])]),t("li",[t("a",{attrs:{href:"#multicast-dns-mdns"}},[e._v("Multicast DNS (mDNS)")]),t("ul",[t("li",[t("a",{attrs:{href:"#test-clients"}},[e._v("Test Clients")])])])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"ssdp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssdp"}},[e._v("#")]),e._v(" SSDP")]),e._v(" "),t("p",[t("strong",[e._v("S")]),e._v("imple"),t("strong",[e._v("S")]),e._v("ervice"),t("strong",[e._v("D")]),e._v("iscovery"),t("strong",[e._v("P")]),e._v("rotocol\n("),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Simple_Service_Discovery_Protocol",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDP"),t("OutboundLink")],1),e._v(") is the\ndiscovery subset of UPnP. The implementation is lighter than mDNS as it just needs a\nUDP Socket without any further dependencies.")]),e._v(" "),t("h3",{attrs:{id:"ssdp-client-library"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssdp-client-library"}},[e._v("#")]),e._v(" SSDP-Client Library")]),e._v(" "),t("p",[e._v("Here are some example client libraries for different programming languages (many others available):")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/diversario/node-ssdp#usage---client",target:"_blank",rel:"noopener noreferrer"}},[e._v("NodeJS"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/resourcepool/ssdp-client#jarpic-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("p",[e._v("With a given SSDP-client library, you can use the following USN / service type:")]),e._v(" "),t("p",[t("code",[e._v("urn:hyperion-project.org:device:basic:1")])]),e._v(" "),t("p",[e._v("Some headers from the response will include:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Location")]),e._v(": The URL of the webserver")]),e._v(" "),t("li",[t("strong",[e._v("USN")]),e._v(": The unique id for this Hyperion instance, it will remain the same after system restarts or Hyperion updates")]),e._v(" "),t("li",[t("strong",[e._v("HYPERION-FBS-PORT")]),e._v(": The port of the FlatBuffer server")]),e._v(" "),t("li",[t("strong",[e._v("HYPERION-JSS-PORT")]),e._v(": The port of the JSON-API server")]),e._v(" "),t("li",[t("strong",[e._v("HYPERION-NAME")]),e._v(": The user defined name for this server")])]),e._v(" "),t("p",[e._v("As the data changes (e.g. network adapter IP address change), new updates will be automatically announced.")]),e._v(" "),t("h2",{attrs:{id:"multicast-dns-mdns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multicast-dns-mdns"}},[e._v("#")]),e._v(" Multicast DNS (mDNS)")]),e._v(" "),t("p",[e._v("Hyperion services are detectable through mDNS.")]),e._v(" "),t("p",[e._v("mDNS is also known as "),t("a",{attrs:{href:"https://de.wikipedia.org/wiki/Zeroconf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zeroconf"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Bonjour_(software)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Bonjour"),t("OutboundLink")],1),e._v(" or "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Avahi_(software)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Avahi"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("Hyperion publishes the following services:")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("_http._tcp")]),e._v(": Hyperion Webserver (HTTP + Websocket)")]),e._v(" "),t("li",[t("strong",[e._v("_https._tcp")]),e._v(": Hyperion Webserver (HTTPS + Websocket Secure)")]),e._v(" "),t("li",[t("strong",[e._v("_hyperiond-json._tcp")]),e._v(": Hyperion JSON-API Server (TcpSocket)")]),e._v(" "),t("li",[t("strong",[e._v("_hyperiond-flatbuf._tcp")]),e._v(": Hyperion FlatBuffers Server (Google FlatBuffers)")]),e._v(" "),t("li",[t("strong",[e._v("_hyperiond-protobuf._tcp")]),e._v(": Hyperion Protocol Buffers Server (Google Protocol Buffers)")])]),e._v(" "),t("p",[e._v("You get the mDNS service name, IP address and service port.\nAs this works realtime, i.e. you can always have an up to date list of available Hyperion servers.")]),e._v(" "),t("p",[t("strong",[e._v("Service - TXT RECORD")])]),e._v(" "),t("p",[e._v("Each published entry contains at least the following data in the txt field:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("id")]),e._v(": A static, unique id to identify a Hyperion instance.")]),e._v(" "),t("li",[t("strong",[e._v("version")]),e._v(": Hyperion's version.")])]),e._v(" "),t("h3",{attrs:{id:"test-clients"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#test-clients"}},[e._v("#")]),e._v(" Test Clients")]),e._v(" "),t("p",[e._v("There are several clients available for testing like the\n"),t("a",{attrs:{href:"http://manpages.ubuntu.com/manpages/bionic/man1/avahi-browse.1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("avahi-browse"),t("OutboundLink")],1),e._v(" a\ncommandline tool for Ubuntu/Debian. Example command")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" avahi-untils "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" avahi-browse "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-r")]),e._v(" _hyperiond-json._tcp\n")])])]),t("ImageWrap",{attrs:{src:"/images/en/avahi-browse.jpg",alt:"Searching for Hyperion JSON-API Server with Avahi cli"}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);