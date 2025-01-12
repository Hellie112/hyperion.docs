
# WLED

[WLED](https://kno.wled.ge/) ermöglicht die Ansteuerung verschiedener LED-Typen über WIFI, Ethernet oder serielle Verbindungen unter Nutzung von ESP8266/ESP32-Geräten.
Das Gerät steuert die WLED aktiv (ein-/ausschalten) und ermöglicht das Speichern/Wiederherstellen des Gerätezustands vor dem Streaming von LED-Updates.

::: warning Segment-Unterstützung
Derzeit bietet WLED (v0.13.1) kein Echtzeit-Streaming zu Segmenten.
Alle LEDs von WLED werden von Hyperion für das Streaming verwendet und werden als Hardware-LED-Anzahl angezeigt.
:::

### Verbindung

WLED-Geräte werden von Hyperion automatisch erkannt.

Falls kein Gerät erkannt wurde, kannst Du den Erkennungsprozess neu starten, indem Du die Seite des Browsers aktualisierst (F5).

Das Gerät speichert den jeweiligen mDNS-Servicenamen, d.h. es müssen keine statischen IP-Adressen in dem Router konfiguriert werden.
Konfigururiere im WIFI Setup von WLED einen Servicenamen (`mDNS Adresse`) deiner Wahl.

::: tip Benutzerdefinierte Host-Konfiguration
  Du kannst auch einen eigenen Hostnamen, eine IPv4- oder IPv6-Adresse für das WLED-Gerät konfigurieren.
:::

::: details Streaming-Protokoll
Ab Hyperion 2.0.13 verwendet das Hyperion-WLED-Gerät das Distributed Display Protocol (erfordert WLED v0.11.0+).

Als Alternative wird das UDP-Raw Protokoll ([Einschränkungen](udpraw)) weiterhin unterstützt.
:::

### Spezifische Einstellungen

##### Gefundene LED-Geräte

Wähle das gefundenes WLED LED-Gerät aus oder gebe eine eigene Konfiguration an (siehe Hostname/IP-Adresse).

##### Rechnername/IP-Adresse

Der Hostname (DNS/mDNS) oder die IP-Adresse (IPv4) des WLED-Geräts, zu dem gestreamt werden soll.

##### Originalzustand wiederherstellen

Der Zustand des WLED-Geräts (einschließlich des aktuellen Ein/Aus-Zustands) wird vor dem Streaming gespeichert. 
Wenn Streaming beendet wird, wird der Ausgangzustand wiederhergestellt.

#### Erweiterte Einstellungen

##### Streaming-Protokoll

- [UDP DDP](udpddp)
- [UDP RAW](udpraw)

##### Deaktivierung der Synchronisierung

Deaktivieren der [WLED-Synchronisation](https://kno.wled.ge/interfaces/udp-notifier/) mit anderen WLED-Geräten, bevor das Streaming beginnt.
Die Synchronisation wird wiederhergestellt, wenn das Streaming endet.

##### Helligkeit überschreiben

Hyperion verwendet die in WLED eingestellte Helligkeit, d.h. wenn die Helligkeit in WLED auf 10% eingestellt ist, leuchten die LEDs mit maximal 10% Helligkeit.
Sie können die Standardhelligkeit von WLED während des Streamings überschreiben, indem Sie die Helligkeit definieren.

##### Helligkeit

Die Helligkeitsstufe, die verwendet wird, wenn "Helligkeit überschreiben" aktiviert ist.

