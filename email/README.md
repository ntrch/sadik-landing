# Sipariş onayı e-posta şablonu

`order-confirmation.html` — SADIK MINI sipariş onayı + takip kodu maili.
Website ile aynı koyu/mor tasarım, animasyonlu maskot (GIF) ve parlayan takip kodu.

## Animasyon notu (önemli)

E-posta istemcileri JavaScript'i **her zaman** siler, CSS animasyonlarının çoğunu
da desteklemez. Bu yüzden:

- **Maskot animasyonu = GIF** (`uploads/confirming.gif`). Gmail, Apple Mail, iOS,
  Outlook mobil — hepsinde oynar. Animasyonun garantili kısmı budur.
- Takip kodundaki **parıltı** ve kartların **yumuşak girişi** CSS animasyonudur:
  Apple Mail / iOS Mail'de oynar, desteklemeyen istemcide (Gmail, Outlook masaüstü)
  sessizce **statik ve düzgün** görünür. Yani her yerde şık, bazı yerlerde hareketli.

## Nasıl kullanılır

1. Şablonu kopyala, aşağıdaki değişkenleri sipariş bilgisiyle değiştir:

   | Değişken | Örnek |
   |----------|-------|
   | `{{NAME}}` | Müşteri adı (ör. "Eren") |
   | `{{CODE}}` | Takip kodu — `orders/<KOD>.json` ile aynı (ör. `SADIK-A1B2C3`) |
   | `{{COLOR}}` | Siyah / Beyaz |
   | `{{MOUNT}}` | Yan montaj / Üst montaj |
   | `{{QTY}}` | Adet (ör. 1) |
   | `{{PRICE}}` | Toplam (ör. `2.499 ₺`) |
   | `{{SUPPORT_EMAIL}}` | "Bize ulaş" butonunun gideceği e-posta |

   Not: `{{CODE}}` üç yerde geçer (kod kutusu, buton linki, footer linki) —
   hepsini değiştir. En kolayı editörde "tümünü değiştir" (find & replace).

2. HTML'i e-posta olarak gönder. Seçenekler:
   - **E-posta servisi (önerilen):** Resend / Brevo / Mailgun gibi bir servise
     HTML'i olduğu gibi ver. Görseller zaten `ntrch.github.io/sadik-landing`
     üzerinden yükleniyor, ek dosya gerekmez.
   - **Gmail'den elle:** Gmail zengin metin editörüne ham HTML yapıştırılamaz.
     "HTML mail" eklentisi (ör. "HTML Editor for Gmail") ya da bir kere bir
     servisten şablonu kaydetmen gerekir.

3. Kod `{{CODE}}`, `track.html?code=...` linkine gömülüdür → müşteri butona
   basınca takip sayfası otomatik açılır ve durumu gösterir.

## Görseller

Maskot ve logo canlı siteden çekilir (istemcide dış görsel yüklemesi açıksa görünür):
- `https://ntrch.github.io/sadik-landing/uploads/confirming.gif`
- `https://ntrch.github.io/sadik-landing/assets/sadik-mark.png`

Farklı bir ifade istersen `confirming.gif` yerine `uploads/` içindeki başka bir
GIF'i (idle-1, notify, break…) kullanabilirsin.
