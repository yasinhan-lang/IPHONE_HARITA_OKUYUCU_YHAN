# BOZOKLU HAN · Harita Okuyucu — iOS / Web (PWA)

iPhone ve tüm tarayıcılar için **kurulabilir web uygulaması (PWA)**.
NCZ · GML · DXF · JSON · KML · SHAPE harita dosyalarını okur; ada/parsel sorgu,
GPS, yol tarifi, ortofoto altlık ve PDF rapor içerir.

> Not: Apple App Store için native bir `.ipa` **yoktur** (Mac + Xcode + geliştirici
> hesabı gerektirir). iOS'ta uygulama bu PWA olarak, Safari üzerinden **Ana Ekrana
> Eklenerek** kullanılır; HTTPS üzerinden konum/GPS tam çalışır.

## iPhone'a kurulum
1. **Safari** ile bu sayfanın adresini açın (GitHub Pages linki).
2. Alttaki **Paylaş** (kare + ok) simgesine dokunun.
3. **Ana Ekrana Ekle** → **Ekle**.
4. Ana ekrandaki **Bzk.Harita** simgesinden açın: tam ekran, internetsiz de açılır,
   konum izni verince GPS çalışır.

## GitHub Pages ile yayınlama
Bu klasörün içeriği deponun **köküne** konur. Depo → **Settings → Pages →
Branch: main / (root)** seçilip kaydedilir. Birkaç dakika sonra
`https://<kullanici-adi>.github.io/<depo-adi>/` adresinde yayınlanır.

Tüm yollar görelidir; hem `kullanici.github.io` (kök) hem de `/depo-adi/`
(alt yol) adreslerinde sorunsuz çalışır.
