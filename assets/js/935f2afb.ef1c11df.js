"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Einf\xfchrung","href":"/docs/Home","docId":"Home"},{"type":"category","label":"Erste Schritte","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\xdcbersicht","href":"/docs/installation/overview","docId":"installation/overview"},{"type":"link","label":"Debian, Ubuntu, Raspberry Pi","href":"/docs/installation/linux","docId":"installation/linux"},{"type":"link","label":"macOS","href":"/docs/installation/macos","docId":"installation/macos"},{"type":"link","label":"Docker, Synology","href":"/docs/installation/docker","docId":"installation/docker"},{"type":"link","label":"Manuell (inkl. Windows)","href":"/docs/installation/manual","docId":"installation/manual"}]},{"type":"category","label":"Anleitungen","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\xdcbersicht","href":"/docs/guides/overview","docId":"guides/overview"},{"type":"link","label":"Konfiguration","href":"/docs/guides/setup","docId":"guides/setup"},{"type":"link","label":"Laden","href":"/docs/guides/charging","docId":"guides/charging"},{"type":"link","label":"Fahrzeuge","href":"/docs/guides/vehicles","docId":"guides/vehicles"},{"type":"link","label":"Wallbox und Hausinstallation","href":"/docs/guides/faq","docId":"guides/faq"}]},{"type":"category","label":"Ger\xe4te","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Wallboxen","href":"/docs/devices/chargers","docId":"devices/chargers"},{"type":"link","label":"Hausinstallation","href":"/docs/devices/meters","docId":"devices/meters"},{"type":"link","label":"Fahrzeuge","href":"/docs/devices/vehicles","docId":"devices/vehicles"}]},{"type":"category","label":"Referenz","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\xdcbersicht","href":"/docs/reference/overview","docId":"reference/overview"},{"type":"category","label":"evcc.yaml","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Grundlagen","href":"/docs/reference/configuration/home","docId":"reference/configuration/home"},{"type":"link","label":"site","href":"/docs/reference/configuration/site","docId":"reference/configuration/site"},{"type":"link","label":"loadpoints","href":"/docs/reference/configuration/loadpoints","docId":"reference/configuration/loadpoints"},{"type":"link","label":"chargers","href":"/docs/reference/configuration/chargers","docId":"reference/configuration/chargers"},{"type":"link","label":"meters","href":"/docs/reference/configuration/meters","docId":"reference/configuration/meters"},{"type":"link","label":"vehicles","href":"/docs/reference/configuration/vehicles","docId":"reference/configuration/vehicles"},{"type":"link","label":"hems","href":"/docs/reference/configuration/hems","docId":"reference/configuration/hems"},{"type":"link","label":"uri","href":"/docs/reference/configuration/uri","docId":"reference/configuration/uri"},{"type":"link","label":"interval","href":"/docs/reference/configuration/interval","docId":"reference/configuration/interval"},{"type":"link","label":"log, levels","href":"/docs/reference/configuration/log","docId":"reference/configuration/log"},{"type":"link","label":"tariffs","href":"/docs/reference/configuration/tariffs","docId":"reference/configuration/tariffs"},{"type":"link","label":"messaging","href":"/docs/reference/configuration/messaging","docId":"reference/configuration/messaging"},{"type":"link","label":"eebus","href":"/docs/reference/configuration/eebus","docId":"reference/configuration/eebus"},{"type":"link","label":"mqtt","href":"/docs/reference/configuration/mqtt","docId":"reference/configuration/mqtt"},{"type":"link","label":"influx","href":"/docs/reference/configuration/influx","docId":"reference/configuration/influx"},{"type":"link","label":"sponsortoken","href":"/docs/reference/configuration/sponsortoken","docId":"reference/configuration/sponsortoken"}]},{"type":"link","label":"Plugins","href":"/docs/reference/plugins","docId":"reference/plugins"},{"type":"link","label":"Modbus","href":"/docs/reference/modbus","docId":"reference/modbus"},{"type":"link","label":"API","href":"/docs/reference/api","docId":"reference/api"}]},{"type":"link","label":"Sponsorship","href":"/docs/sponsorship","docId":"sponsorship"}]},"docs":{"devices/chargers":{"id":"devices/chargers","title":"Wallboxen","description":"Zur Steuerung der Ladung muss evcc mit einer Wallbox kommunizieren.","sidebar":"tutorialSidebar"},"devices/meters":{"id":"devices/meters","title":"Hausinstallation","description":"Die aufgelisteten Ger\xe4te k\xf6nnen als meter f\xfcr verschiedene Zwecke eingebunden werden. Um die Str\xf6me am Netzanschluss grid zu erhalten, die PV Leistung pv, die Hausbatterie battery oder die Ladeleistung des EV charge.","sidebar":"tutorialSidebar"},"devices/vehicles":{"id":"devices/vehicles","title":"Fahrzeuge","description":"Um die Ladung auf einen bestimmten Ladestand (SoC) zu begrenzen, und die meisten Wallboxen diesen nicht kennen, kann evcc direkt mit dem Fahrzeug \xfcber den Fahrzeughersteller kommunizieren.","sidebar":"tutorialSidebar"},"guides/charging":{"id":"guides/charging","title":"Laden","description":"Was bedeuten die verschiedenen Lademodi?","sidebar":"tutorialSidebar"},"guides/faq":{"id":"guides/faq","title":"Wallbox und Hausinstallation","description":"Wallboxen","sidebar":"tutorialSidebar"},"guides/overview":{"id":"guides/overview","title":"\xdcbersicht","description":"Konfiguration","sidebar":"tutorialSidebar"},"guides/setup":{"id":"guides/setup","title":"Konfiguration","description":"Einrichtung und Konfiguration","sidebar":"tutorialSidebar"},"guides/vehicles":{"id":"guides/vehicles","title":"Fahrzeuge","description":"Wozu muss ich mein Auto eintragen?","sidebar":"tutorialSidebar"},"Home":{"id":"Home","title":"Einf\xfchrung","description":"evcc erm\xf6glicht das Laden von Elektrofahrzeugen (EV) bedarfsgerecht zu steuern und den dazu ben\xf6tigten Energiebezug zu optimieren. Es kann eine Photovoltaikanlage (PV) angebunden werden, um so viel selbsterzeugte Energie wie m\xf6glich ins EV zu laden, oder es k\xf6nnen auch Anbieter mit dynamischen Strompreisen angebunden werden.","sidebar":"tutorialSidebar"},"installation/docker":{"id":"installation/docker","title":"Docker, Synology","description":"evcc kann auch als Docker Image installiert werden.","sidebar":"tutorialSidebar"},"installation/linux":{"id":"installation/linux","title":"Debian, Ubuntu, Raspberry Pi","description":"Raspberry Pi 1 (A, B, A+, B+, Zero, Zero W) m\xfcssen die Manuelle Installation verwenden!","sidebar":"tutorialSidebar"},"installation/macos":{"id":"installation/macos","title":"macOS","description":"Erstinstallation","sidebar":"tutorialSidebar"},"installation/manual":{"id":"installation/manual","title":"Manuell (inkl. Windows)","description":"Diese manuelle Installation erfordert fortgeschrittene PC Kenntnisse, vor allem auch im Umgang mit einem Terminal/Eingabeaufforderung.","sidebar":"tutorialSidebar"},"installation/overview":{"id":"installation/overview","title":"\xdcbersicht","description":"evcc ben\xf6tigt eine Konfigurationsdatei evcc.yaml, welche beim Start von evcc bereits vorhanden sein muss. In dieser Konfigurationsdatei sind alle Informationen enthalten, damit evcc auf die entsprechenden Ger\xe4te zugreifen und das Laden eines Fahrzeugs steuern kann. Gibt es diese Konfigurationsdatei noch nicht, startet evcc im Demo-Modus.","sidebar":"tutorialSidebar"},"reference/api":{"id":"reference/api","title":"API","description":"Mit evcc kann \xfcber REST und MQTT APIs interagiert werden.","sidebar":"tutorialSidebar"},"reference/configuration/chargers":{"id":"reference/configuration/chargers","title":"chargers","description":"Zur Steuerung der Ladung muss evcc mit einer Wallbox kommunizieren k\xf6nnen.","sidebar":"tutorialSidebar"},"reference/configuration/eebus":{"id":"reference/configuration/eebus","title":"eebus","description":"EEBUS Unterst\xfctzung ist noch im experimentellen Stadium. Es wird hier sicher zu dem einen oder anderen Problem kommen!","sidebar":"tutorialSidebar"},"reference/configuration/hems":{"id":"reference/configuration/hems","title":"hems","description":"evcc kann in bestehende Home Energy Management Systeme (HEMS) integriert werden. Momentan wird der SMA Sunny Home Manager 2.0 (SHM) unterst\xfctzt!","sidebar":"tutorialSidebar"},"reference/configuration/home":{"id":"reference/configuration/home","title":"Grundlagen","description":"evcc ben\xf6tigt eine Konfigurationsdatei in der die Installation beschrieben wird. Ohne diese Datei kann evcc nicht genutzt werden. Die Datei selbst ist im YAML Format geschrieben. Dieses Format definiert eine Syntax wodurch eine strukturierte Datenstruktur in Textform erstellt werden kann.","sidebar":"tutorialSidebar"},"reference/configuration/influx":{"id":"reference/configuration/influx","title":"influx","description":"Definiert die Influx Konfiguration, um Daten in Influx zu schreiben.","sidebar":"tutorialSidebar"},"reference/configuration/interval":{"id":"reference/configuration/interval","title":"interval","description":"Definiert das zeitliche Interval, in welchem neue Werte von allen Messger\xe4ten gelesen werden und die Ladestr\xf6me der Wallboxen neu geregelt wird.","sidebar":"tutorialSidebar"},"reference/configuration/loadpoints":{"id":"reference/configuration/loadpoints","title":"loadpoints","description":"loadpoints (Ladepunkte) ist eine Liste von Ladepunkten und kombiniert f\xfcr jeden Ladepunkt eine Wallbox, Fahrzeuge und falls notwendig einen Z\xe4hler mit weiteren optionalen Parametern. Eine minimale Konfiguration erfordert eine Wallbox.","sidebar":"tutorialSidebar"},"reference/configuration/log":{"id":"reference/configuration/log","title":"log, levels","description":"log","sidebar":"tutorialSidebar"},"reference/configuration/messaging":{"id":"reference/configuration/messaging","title":"messaging","description":"evcc unterst\xfctzt die \xdcbermittlung von Status-Informationen \xfcber Telegram, PushOver und viele weitere Dienste \xfcber das System shoutrrr. Die Konfiguration erm\xf6glich es eigene Nachrichten f\xfcr bestimmte Ereignisse und Systeme zu definieren.","sidebar":"tutorialSidebar"},"reference/configuration/meters":{"id":"reference/configuration/meters","title":"meters","description":"Meters (Strommessger\xe4te) ist eine Liste von in der Hausinstallation vorhandenen Ger\xe4ten, welche die Leistung und den Energieverbrauch, die PV Erzeugung oder Hausbatterienutzung zur Verf\xfcgung stellen k\xf6nnen. Ein meter definiert einen Punkt einer Energieleistung und kann ein physikalisches Ger\xe4t sein (z.b. ein Messger\xe4t am Netzanschlusspunkt), ein PV Wechselrichter (AC oder auch DC im Falle von Hybrid-Wechselrichtern), oder ein Batterie-Wechselrichter.","sidebar":"tutorialSidebar"},"reference/configuration/mqtt":{"id":"reference/configuration/mqtt","title":"mqtt","description":"Erm\xf6glicht es Daten per MQTT mit einem Broker auszutauschen.","sidebar":"tutorialSidebar"},"reference/configuration/site":{"id":"reference/configuration/site","title":"site","description":"Beschreibt den Standort mit den vorhandenen und ben\xf6tigten Ger\xe4ten der Hausinstallation und ist f\xfcr das Regeln der verf\xfcgbaren Leistung zust\xe4ndig.","sidebar":"tutorialSidebar"},"reference/configuration/sponsortoken":{"id":"reference/configuration/sponsortoken","title":"sponsortoken","description":"sponsortoken definiert ein Token das auf https://cloud.evcc.io vergeben wird.","sidebar":"tutorialSidebar"},"reference/configuration/tariffs":{"id":"reference/configuration/tariffs","title":"tariffs","description":"Hier kannst du deinen Energietarif und ggf. deine Einspeiseverg\xfctung angeben. Evcc verwendet diese Werte f\xfcr eine grobe Einsparungsberechnung, die in der Web-UI angezeigt wird.","sidebar":"tutorialSidebar"},"reference/configuration/uri":{"id":"reference/configuration/uri","title":"uri","description":"Definiert die IP Adresse und den Port auf welchem die Web Oberfl\xe4che erreicht werden soll.","sidebar":"tutorialSidebar"},"reference/configuration/vehicles":{"id":"reference/configuration/vehicles","title":"vehicles","description":"Ein Fahrzeug repr\xe4sentiert ein spezifisches elektrisches Fahrzeug (EV) mit seiner Batterie. Wenn ein Fahrzeug konfiguriert und einem Ladepunkt zugewiesen ist, kann in der Benutzeroberfl\xe4che der Ladestatus (SOC) und die verbleibende Ladezeit angezeigt werden.","sidebar":"tutorialSidebar"},"reference/modbus":{"id":"reference/modbus","title":"Modbus","description":"Einige Ger\xe4te, wie z.b. Z\xe4hler (meters) oder Wallboxen (chargers) werden \xfcber das Modbus-Protokoll angebunden und angesprochen.","sidebar":"tutorialSidebar"},"reference/overview":{"id":"reference/overview","title":"\xdcbersicht","description":"In diesem Bereich sind die verschiedenen technischen Dokumentationen zu finden.","sidebar":"tutorialSidebar"},"reference/plugins":{"id":"reference/plugins","title":"Plugins","description":"Plugins k\xf6nnen verwendet werden, um verschiedene Ger\xe4te und externe Datenquellen in evcc zu integrieren. Diese k\xf6nnen \xfcber den Wert custom des Parameters type in meter (Strommessger\xe4te), charger (Wallboxen) oder vehicle (Fahrzeuge) verwendet werden.","sidebar":"tutorialSidebar"},"sponsorship":{"id":"sponsorship","title":"Sponsorship","description":"Wir von evcc glauben an Open Source Software. Unser Ziel ist eine Best-in-Class L\xf6sung f\xfcr das Laden von Elektroautos zu entwickeln die mit bestehender Hardware und Haustechnik zusammenspielt. evcc unterst\xfctzt schon heute eine lange Liste an Fahrzeugen, Wallboxen, Energiez\xe4hlern, Wechselrichtern und Batteriesystemen. Momentan kommen regelm\xe4\xdfig neue Hersteller dazu. Die Entwicklung und Pflege der Software ist zeitaufw\xe4ndig. Daher sind wir auf eure Unterst\xfctzung als Community angewiesen um das Projekt am Laufen zu halten.","sidebar":"tutorialSidebar"}}}')}}]);