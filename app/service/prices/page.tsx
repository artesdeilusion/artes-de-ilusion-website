import Navbar from "@/app/components/navbar";
import React from "react";

export default function PricesPage() {

 
  return (
    <>
      <title>Artes de Ilusion | Fiyatlandırma</title>

      {/* Navigation */}
      <nav>
        <Navbar />
      </nav>
      <div className="h-20 bg-black"></div>

      <div className="max-w-screen-xl sm:pt-10 p-10 text-black mx-auto px-4 space-y-8">
       
                  <h2 className="text-3xl font-bold">Fiyatlandırma</h2>
                  <hr />
        {/* -------------------------------------------------- */}
        {/* 💰 FİYATLANDIRMA TABLOSU */}
        {/* -------------------------------------------------- */}
        <section className="space-y-6">
           <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
            <table className="min-w-full table-auto text-left text-sm">
              <thead>
                <tr className="bg-gray-100/70 divide-x divide-gray-200">
                  <th className="px-4 py-2 font-semibold">Hizmet Adı</th>
                  <th className="px-4 py-2 font-semibold">Fiyat Aralığı</th>
                  <th className="px-4 py-2 font-semibold">Açıklama</th>
                  <th className="px-4 py-2 font-semibold">Aylık/Yıllık Bakım</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {[

  ["Logo Tasarımı", "1.500 – 6.000 ₺", "3 tasarım alternatifi + sınırsız revizyon (Standart Paket ≈6.000 ₺)", "❌"],
  ["Kurumsal Kimlik Paketi", "9.900 – 20.000 ₺", "Logo, kartvizit, antetli, zarf, sosyal medya şablonları", "❌"],
  ["Broşür / El İlanı / Poster", "2.000 – 7.500 ₺", "Tek sayfa tasarım, çift dil +2.500₺, her ekstra sayfa +1.500₺", "❌"],
  ["Tek Sayfalı Web Sitesi", "12.000 – 25.000 ₺", "Blog/form/galeri eklentisi +5.000₺", "1.000₺ / 10.000₺"],
  ["Kurumsal Web Sitesi", "25.000 – 55.000 ₺", "Çoklu dil +10.000₺, animasyon +8.000₺", "1.500₺ / 15.000₺"],
  ["Premium Web Sitesi", "60.000 – 125.000 ₺", "Ödeme sistemi +15.000₺, CMS +12.000₺", "2.500₺ / 25.000₺"],
  ["Wireframe (Taslak Yapı)", "2.000 – 5.000 ₺", "Prototipe dönüşüm +5.000₺", "❌"],
  ["UI Kit Tasarımı", "5.000 – 12.000 ₺", "Web ve mobil ayrı ayrı +8.000₺", "❌"],
  ["Prototip (Tıklanabilir)", "8.000 – 20.000 ₺", "Her ekstra ekran +3.000₺", "❌"],
  ["Basit Mobil Uygulama", "10.000 – 40.000 ₺", "iOS+Android +7.000₺, form/dil desteği +5.000₺", "2.000₺ / 20.000₺"],
  ["Orta Düzey Mobil Uygulama", "40.000 – 100.000 ₺", "Harita, bildirim +10.000₺", "4.000₺ / 40.000₺"],
  ["Karmaşık Mobil Uygulama", "100.000 – 300.000 ₺", "Admin panel +20.000₺, ödeme entegrasyonu +15.000₺", "8.000₺ / 80.000₺"],
  ["Mobil Oyun (2D/3D)", "100.000 – 300.000 ₺", "Multiplayer +25.000₺, seviye sistemi +10.000₺", "8.000₺ / 80.000₺"],
  ["Yönetim Paneli / Dashboard", "40.000 – 100.000 ₺", "Modül +10.000₺, PDF/CSV dışa aktarma +5.000₺", "3.500₺ / 35.000₺"],
  ["Windows/macOS Uygulama", "50.000 – 200.000 ₺", "Hem Win + macOS destekli sürüm +20.000₺", "4.000₺ / 40.000₺"],
  ["Web Tabanlı SaaS / CRM", "100.000 – 300.000 ₺", "Çoklu tenant +30.000₺, kullanıcı yönetimi +20.000₺", "7.000₺ / 70.000₺"]


                ].map(([service, once, monthly, yearly]) => (
                  <tr key={service} className="divide-x divide-gray-200">
                    <td className="px-4 py-2 whitespace-nowrap">{service}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{once}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{monthly}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{yearly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <h1 className="text-xs text-gray-300">Tüm hizmet fiyatları ortalama değerler üzerinden hesaplanmıştır ve projenizin kapsamına, süresine ve özel ihtiyaçlarına göre değişkenlik gösterebilir. Net fiyat teklifleri için lütfen iletişime geçiniz.
<br />
Tasarım ve yazılım süreçlerinde kalite, şeffaflık ve sürdürülebilirlik önceliğimizdir. Projelerinizde ihtiyaç duyduğunuz her adımda destek sunuyor, teslim sonrası bakım ve güncelleme hizmetleriyle uzun vadeli çözüm ortağınız olmayı hedefliyoruz.
<br />
Fiyatlar, 2025 yılı Türkiye piyasa koşullarına göre belirlenmiştir.
<br />
Tüm hakları saklıdır. © Artes de Ilusion

</h1>
      </div>
    </>
  );
}
 