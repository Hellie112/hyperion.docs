(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{408:function(e,t,s){"use strict";s.r(t);var r=s(12),a=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"wled"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wled"}},[e._v("#")]),e._v(" WLED")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://kno.wled.ge/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WLED"),t("OutboundLink")],1),e._v(" allows to address various LED types via WIFI, Ethernet or Serial connectivity leveraging ESP8266/ESP32 devices.\nThe device actively controls WLED (switch on/off), as well as allows to store/restore the devices state before streaming LED updates.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Segment support")]),e._v(" "),t("p",[e._v("Currently, WLED (v0.13.1) does not provide realtime streaming to segments.\nAll LEDs of WLED are used for streaming by Hyperion and are shown as the Hardware LED count.")])]),e._v(" "),t("h3",{attrs:{id:"connectivity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connectivity"}},[e._v("#")]),e._v(" Connectivity")]),e._v(" "),t("p",[e._v("WLED devices are discovered automatically by Hyperion.")]),e._v(" "),t("p",[e._v("In case no device was discovered, you can restart the discovery process by refreshing the browser's page (F5).")]),e._v(" "),t("p",[e._v("The device will store the respective mDNS service name, i.e. no static IP-adresses are required to be configured in your router.\nUse WLED's WIFI setup to configure a service name ("),t("code",[e._v("mDNS address")]),e._v(") of your choice.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Custom hostname configuration")]),e._v(" "),t("p",[e._v("You can still configure a custom Hostname, an IPv4- or IPv6-address of your WLED device.")])]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("Streaming protocol")]),e._v(" "),t("p",[e._v("Per Hyperion 2.0.13, the Hyperion-WLED device makes use of the Distributed Display Protocol (Requires WLED v0.11.0+).")]),e._v(" "),t("p",[e._v("As a fall-back option the UDP-Raw protocol ("),t("a",{attrs:{href:"udpraw"}},[e._v("limitations")]),e._v(") is still supported, too.")])]),e._v(" "),t("h3",{attrs:{id:"specific-settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#specific-settings"}},[e._v("#")]),e._v(" Specific Settings")]),e._v(" "),t("h5",{attrs:{id:"devices-discovered"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#devices-discovered"}},[e._v("#")]),e._v(" Devices Discovered")]),e._v(" "),t("p",[e._v("Select your WLED LED-Device discovered or provide a custome configuration (see Hostname/IP-address).")]),e._v(" "),t("h5",{attrs:{id:"hostname-ip-address"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hostname-ip-address"}},[e._v("#")]),e._v(" Hostname/IP-address")]),e._v(" "),t("p",[e._v("Define the WLED device's Hostname (DNS/mDNS) or IP-address (IPv4) you would like streaming to.")]),e._v(" "),t("h5",{attrs:{id:"restore-lights-state"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#restore-lights-state"}},[e._v("#")]),e._v(" Restore lights' state")]),e._v(" "),t("p",[e._v("The state of the WLED device (including the current on/off state) is saved before streaming.\nWhen streaming stopps, the output state is restored.")]),e._v(" "),t("h4",{attrs:{id:"advanced-expert-settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#advanced-expert-settings"}},[e._v("#")]),e._v(" Advanced/Expert Settings")]),e._v(" "),t("h5",{attrs:{id:"streaming-protocol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#streaming-protocol"}},[e._v("#")]),e._v(" Streaming protocol")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"udpddp"}},[e._v("UDP DDP")])]),e._v(" "),t("li",[t("a",{attrs:{href:"udpraw"}},[e._v("UDP RAW")])])]),e._v(" "),t("h5",{attrs:{id:"disable-synchronisation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disable-synchronisation"}},[e._v("#")]),e._v(" Disable synchronisation")]),e._v(" "),t("p",[e._v("Disable "),t("a",{attrs:{href:"https://kno.wled.ge/interfaces/udp-notifier/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WLED's synchronisation"),t("OutboundLink")],1),e._v(" with other WLED devices before streaming starts.\nSynchronisation is restored when streaming stops.")]),e._v(" "),t("h5",{attrs:{id:"overwrite-brightness"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overwrite-brightness"}},[e._v("#")]),e._v(" Overwrite brightness")]),e._v(" "),t("p",[e._v("Hyperion uses the brightness set in WLED, i.e. if the brightness in WLED is set to 10%, the LEDs will shine with maximum 10% brightness.\nYou can override the default brightness of WLED during streaming by defining the brightness.")]),e._v(" "),t("h5",{attrs:{id:"brightness"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#brightness"}},[e._v("#")]),e._v(" Brightness")]),e._v(" "),t("p",[e._v('The brigtness level used when "Overwrite brightness" is enabled.')])])}),[],!1,null,null,null);t.default=a.exports}}]);