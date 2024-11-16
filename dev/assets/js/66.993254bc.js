(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{463:function(e,s,a){"use strict";a.r(s);var t=a(14),n=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"rs232-serial-gateway"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rs232-serial-gateway"}},[e._v("#")]),e._v(" RS232/Serial gateway")]),e._v(" "),s("p",[e._v("The SERIAL gateway can be used to send and receive data from the serial connection to and from MQTT. Both softwareSerial as hardwareSerial are supported. HardwareSerial can be used for higher baud rates, but is limited to specific pins on most platforms.")]),e._v(" "),s("h2",{attrs:{id:"sending-an-serial-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sending-an-serial-message"}},[e._v("#")]),e._v(" Sending an SERIAL message")]),e._v(" "),s("p",[e._v("Simply publish the message you wish to transmit, minus the prefix and postfix. For example, to send the \"Turn On\" signal for a Mitsubishi XD221U projector, the code is simply '!' so you would use the command")]),e._v(" "),s("p",[s("code",[e._v('mosquitto_pub -t home/OpenMQTTGateway/commands/XtoSERIAL -m \'{"value": "!"}\'')])]),e._v(" "),s("p",[e._v("It will automatically add the prefix and postfix you set in "),s("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/blob/master/main/config_SERIAL.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("config_SERIAL.h"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"receiving-an-serial-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#receiving-an-serial-message"}},[e._v("#")]),e._v(" Receiving an SERIAL message")]),e._v(" "),s("p",[e._v("Two modes are available for receiving SERIAL messages.")]),e._v(" "),s("h3",{attrs:{id:"single-mqtt-message-mode-default"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#single-mqtt-message-mode-default"}},[e._v("#")]),e._v(" Single MQTT message mode (default)")]),e._v(" "),s("p",[e._v("To receive a message, subscribe to all with "),s("code",[e._v("mosquitto_sub -t +/# -v")]),e._v('\nand perform an action that should get a response from the device. For example, If I were to send the "Turn On" signal from earlier, I would receive back')]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[e._v("home/OpenMQTTGateway/SERIALtoMQTT "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"value"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Because this projector echoes back a received command to acknowledge. Some devices will send a NACK, or Negative Acknowledge, to confirm that they received your message but could not comply. That would look like")]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[e._v("home/OpenMQTTGateway/SERIALtoMQTT "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"value"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"!:N"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"json-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json-mode"}},[e._v("#")]),e._v(" JSON mode")]),e._v(" "),s("p",[e._v("This mode can be used if the received message on the serial link is JSON. The JSON keys are used as separate MQTT sub-topics. For nested JSON this will be repeated for sub-keys up to the specified nesting level.")]),e._v(" "),s("p",[e._v("For example:")]),e._v(" "),s("p",[e._v("input received at serial link:")]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("temperature"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("sens1"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("22")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" sens2"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("23")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" humidity"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("sens1"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" sens2"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("output in case of max nesting level 1:")]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[e._v("home/OpenMQTTGateway/SERIALtoMQTT/temperature  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{sens1: 22, sens2: 23}"')]),e._v("\nhome/OpenMQTTGateway/SERIALtoMQTT/humidity     "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{sens1: 80, sens2: 60}"')]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("output in case of max nesting level 2 (or higher):")]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[e._v("home/OpenMQTTGateway/SERIALtoMQTT/temperature/sens1  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("22")]),e._v("\nhome/OpenMQTTGateway/SERIALtoMQTT/temperature/sens2  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("23")]),e._v("\nhome/OpenMQTTGateway/SERIALtoMQTT/humidity/sens1  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("\nhome/OpenMQTTGateway/SERIALtoMQTT/humidity/sens2  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("60")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);