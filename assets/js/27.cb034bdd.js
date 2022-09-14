(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{331:function(e,t,r){"use strict";r.r(t);var a=r(12),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"installieren"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installieren"}},[e._v("#")]),e._v(" Installieren")]),e._v(" "),t("p",[e._v("Für die Installation von Hyperion werden für zahlreiche Plattformen Installationpakete oder zip-archivierte Dateien angeboten.")]),e._v(" "),t("h2",{attrs:{id:"voraussetzungen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#voraussetzungen"}},[e._v("#")]),e._v(" Voraussetzungen")]),e._v(" "),t("h3",{attrs:{id:"unterstutzte-systeme"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unterstutzte-systeme"}},[e._v("#")]),e._v(" Unterstützte Systeme")]),e._v(" "),t("ul",[t("li",[e._v("Raspberry Pi")]),e._v(" "),t("li",[e._v("Debian 9 | Ubuntu 16.04 oder neuer")]),e._v(" "),t("li",[e._v("Mac OS")]),e._v(" "),t("li",[e._v("Windows 10")])]),e._v(" "),t("h3",{attrs:{id:"unterstutzte-browser"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unterstutzte-browser"}},[e._v("#")]),e._v(" Unterstützte Browser")]),e._v(" "),t("ul",[t("li",[e._v("Chrome 47+")]),e._v(" "),t("li",[e._v("Firefox 43+")]),e._v(" "),t("li",[e._v("Opera 34+")]),e._v(" "),t("li",[e._v("Safari 9.1+")]),e._v(" "),t("li",[e._v("Microsoft Edge 14+")])]),e._v(" "),t("h2",{attrs:{id:"installieren-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installieren-2"}},[e._v("#")]),e._v(" Installieren")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Bitte beachten!")]),e._v(" "),t("p",[e._v("In den nachfolgendem Beispielen wird zur Verdeutlichung der Syntax die Hardware Architektur x86_64 verwendet.")])]),e._v(" "),t("h3",{attrs:{id:"raspberry-pi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raspberry-pi"}},[e._v("#")]),e._v(" Raspberry Pi")]),e._v(" "),t("p",[e._v("Wir empfehlen die Benutzung von "),t("a",{attrs:{href:"/de/user/HyperBian"}},[e._v("HyperBian")]),e._v(" für eine Neuinstallation. "),t("br"),e._v("\nAlternativ kann Hyperion auf einem bestehenden "),t("a",{attrs:{href:"#rpi-debian-ubuntu"}},[e._v("Raspberry Pi OS (ehemals Raspbian)/Debian/Ubuntu")]),e._v(" System installiert werden. "),t("br"),e._v("\nRaspberry Pi Nutzer mit LibreElec schauen "),t("a",{attrs:{href:"https://hyperion-project.org/forum/index.php?thread/10463-install-hyperion-ng-on-libreelec-x86-64-rpi-inoffiziell-unofficially/&pageNo=1",target:"_blank",rel:"noopener noreferrer"}},[e._v("hier"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"rpi-debian-ubuntu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rpi-debian-ubuntu"}},[e._v("#")]),e._v(" RPi/Debian/Ubuntu")]),e._v(" "),t("p",[e._v("Über die Kommandozeile kannst du Hyperion mithilfe der nachfolgenden 3 Schritte installieren:")]),e._v(" "),t("ol",[t("li",[e._v("Als erstes importieren wir den öffentlichen Schlüssel von Hyperion:")])]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" -qO- https://apt.hyperion-project.org/hyperion.pub.key "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" gpg "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--dearmor")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-o")]),e._v(" /usr/share/keyrings/hyperion.pub.gpg\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Danach tragen wir Hyperion-Project als Quelle von Hyperion ein:")])]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"deb [signed-by=/usr/share/keyrings/hyperion.pub.gpg] https://apt.hyperion-project.org/ '),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("lsb_release "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-cs")]),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(' main"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("tee")]),e._v(" /etc/apt/sources.list.d/hyperion.list\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Als letztes aktualisieren wir die Paketliste und installieren Hyperion:")])]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" update "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" hyperion\n")])])]),t("h3",{attrs:{id:"macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[e._v("#")]),e._v(" macOS")]),e._v(" "),t("p",[e._v("Wird derzeit nur als zip-archivierte Datei, in der Hyperion im Binärformat vorliegt angeboten.")]),e._v(" "),t("h3",{attrs:{id:"fedora"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fedora"}},[e._v("#")]),e._v(" Fedora")]),e._v(" "),t("p",[e._v("Lade dir das Installationspaket (.rpm) von der "),t("a",{attrs:{href:"https://github.com/hyperion-project/hyperion.ng/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download Seite"),t("OutboundLink")],1),e._v(" herunter. "),t("br"),e._v("\nÜber die Kommandozeile kannst du das Installationspaket mit folgendem Befehl installieren: "),t("br"),e._v(" "),t("code",[e._v("sudo dnf install ./Hyperion-2.0.0-Linux-x86_64.rpm")]),e._v(" "),t("br"),e._v("\nHyperion kann jetzt über das Startmenü gestartet werden.")]),e._v(" "),t("h3",{attrs:{id:"windows-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-10"}},[e._v("#")]),e._v(" Windows 10")]),e._v(" "),t("p",[e._v("Lade dir die ausführbare Installationdatei (.exe) von der "),t("a",{attrs:{href:"https://github.com/hyperion-project/hyperion.ng/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download Seite"),t("OutboundLink")],1),e._v(" herunter. "),t("br"),e._v("\nZum installieren führe die heruntergeladene Datei aus.\nHyperion kann jetzt über das Startmenü gestartet werden.")]),e._v(" "),t("h2",{attrs:{id:"deinstallieren"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deinstallieren"}},[e._v("#")]),e._v(" Deinstallieren")]),e._v(" "),t("p",[e._v("Unter Raspberry Pi OS (ehemals Raspbian)/Debian/Ubuntu kann Hyperion mit folgendem Befehl deinstalliert werden: "),t("br"),e._v(" "),t("code",[e._v("sudo apt-get --purge autoremove hyperion")])]),e._v(" "),t("p",[e._v("Unter Windows erfolgt die Deinstallation über die Systemsteuerung.")]),e._v(" "),t("h3",{attrs:{id:"lokale-daten"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lokale-daten"}},[e._v("#")]),e._v(" Lokale Daten")]),e._v(" "),t("p",[e._v("Einstellungen werden im Heimverzeichnis unter dem Unterverzeichnis "),t("code",[e._v(".hyperion")]),e._v(" abgespeichert.")])])}),[],!1,null,null,null);t.default=n.exports}}]);