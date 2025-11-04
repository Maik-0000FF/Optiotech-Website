#!/bin/bash
# DNS Cache auf macOS löschen und Status prüfen

echo "🔄 Lösche DNS-Cache..."
sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder

echo ""
echo "✅ DNS-Cache geleert!"
echo ""
echo "📡 Prüfe optiotech.de DNS-Status..."
echo ""

dig optiotech.de +short

echo ""
echo "Sollte zeigen:"
echo "  185.199.108.153"
echo "  185.199.109.153"
echo "  185.199.110.153"
echo "  185.199.111.153"
echo ""
echo "Falls noch 64.190.63.222 → Warte 5 Minuten und versuche nochmal"
echo "Falls GitHub IPs → Öffne Safari/Chrome und teste: https://optiotech.de"
