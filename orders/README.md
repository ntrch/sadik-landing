# Sipariş Takibi — order dosyaları

`track.html` sayfası, kullanıcının girdiği takip koduna karşılık gelen
`orders/<KOD>.json` dosyasını okur. Backend yok; her sipariş = tek bir JSON dosyası.

## Yeni sipariş nasıl eklenir

1. Rastgele, **tahmin edilmesi zor** bir kod belirle (bu kod aynı zamanda güvenlik
   anahtarıdır — kodu bilmeyen siparişi göremez). Örn: `SADIK-A1B2C3`.
   - Sadece **büyük harf, rakam ve tire** kullan: `[A-Z0-9-]`.
   - Dosya adı kodla **birebir aynı ve BÜYÜK harf** olmalı (GitHub Pages büyük/küçük
     harfe duyarlıdır). Sayfa girilen kodu otomatik büyük harfe çevirir.
2. `orders/<KOD>.json` dosyasını oluştur (örnek: `SADIK-ORNEK.json`).
3. Commit + push et. Push sonrası birkaç dakika içinde canlıya yansır.
4. Kodu müşterinin siparişte verdiği e-postaya gönder.
   - İstersen doğrudan link de yollayabilirsin:
     `https://<site>/track.html?code=SADIK-A1B2C3` → sayfa otomatik sorgular.

## Durum güncelleme

Sipariş ilerledikçe ilgili `status` alanını değiştirip `dates` içine tarihi ekle,
`updatedAt`'ı güncelle, tekrar commit et.

## Alanlar

| Alan | Zorunlu | Açıklama |
|------|---------|----------|
| `orderId` | hayır | Kendi sipariş numaran (görsel etiket). |
| `date` | hayır | Sipariş tarihi (serbest metin). |
| `product.color` | hayır | "Siyah" / "Beyaz". |
| `product.mount` | hayır | "Yan montaj" / "Üst montaj". |
| `quantity` | hayır | 1'den büyükse "N adet" rozeti çıkar. |
| `status` | **evet** | `received` \| `preparing` \| `shipped` \| `delivered` \| `cancelled` |
| `dates` | hayır | Her adımın tarihi: `{ received, preparing, shipped, delivered }`. |
| `carrier` | hayır | Kargo firması adı. |
| `trackingNumber` | hayır | Kargo takip numarası. |
| `trackingUrl` | hayır | Kargo firması sorgu linki (numara tıklanabilir olur). |
| `note` | hayır | Serbest not (ör. teslimat açıklaması / iptal nedeni). |
| `updatedAt` | hayır | Son güncelleme tarihi (kartın altında görünür). |

## Durum akışı

`received → preparing → shipped → delivered`

Zaman çizelgesinde `status`'tan önceki adımlar ✓ (tamamlandı), `status` adımı
mor (aktif), sonrakiler soluk görünür. `cancelled` ise iptal uyarısı gösterilir.

> Not: Kodlar, bilen herkesin ilgili siparişi görebildiği "yetki anahtarı"dır.
> Bu yüzden tahmin edilemez olmalı ve JSON içine gereksiz kişisel veri (tam adres,
> telefon vb.) koymamaya özen göster.
