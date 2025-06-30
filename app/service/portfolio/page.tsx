import Navbar from "@/app/components/navbar";
import React from "react";

export default function ServicesPage() {

    const colClasses = "py-4 px-3 text-sm text-center whitespace-nowrap";

  return (
    <>
      <title>Artes de Ilusion | Portfolio</title>

      {/* Navigation */}
      <nav>
        <Navbar />
      </nav>
      <div className="h-20 bg-black"></div>

      <div className="max-w-screen-xl sm:pt-10 p-10 text-black mx-auto px-4 space-y-16">
        {/* -------------------------------------------------- */}
        {/* 🎨 GRAFİK TASARIM */}
        {/* -------------------------------------------------- */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">🎨 Grafik Tasarım</h2>

          {/* Logo & Kurumsal Kimlik */}
          <h3 className="text-2xl font-semibold">Logo & Kurumsal Kimlik</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* 1️⃣ Modern Logo */}
            <ServiceCard
              title="Modern Logo"
              description="Tipografik ve sade logo örneği"
              imgSrc="https://www.standy.com.tr/standylogo.png"
              imgAlt="Standy Logo"
              included={["3 logo konsepti", "2 revizyon turu", "Vektör & PNG final dosyaları", "Farklı arka plan varyasyonları"]}
              excluded={["Marka rehberi", "Sosyal medya şablonları", "Baskı maliyetleri"]}
            />

            {/* 2️⃣ Kimlik Seti */}
            <ServiceCard
              title="Kimlik Seti"
              description="Kartvizit, antetli kağıt ve zarf tasarımı"
              imgSrc="/service/work/penguen-sanat-branding.png"
              imgAlt="Penguen Sanat Branding"
              link="https://www.behance.net/gallery/214782263/Penguen-Sanat-Branding"
              included={["Logo yerleşimleri", "Kartvizit tasarımı (ön/arka)", "Antetli kağıt & zarf", "Renk & tipografi kılavuzu"]}
              excluded={["Baskı maliyetleri", "Sosyal medya kitleri"]}
            />
          </div>
        </section>

        {/* -------------------------------------------------- */}
        {/* 💻 WEB TASARIMI */}
        {/* -------------------------------------------------- */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">💻 Web Tasarımı</h2>
          <h3 className="text-2xl font-semibold">Web Sitesi Tasarımı</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Penguen Sanat */}
            <ServiceCard
              title="Penguen Sanat"
              description="Kurumsal web sitesi"
              imgSrc="/service/work/penguen-sanat-website.png"
              imgAlt="Penguen Sanat Website"
              link="https://www.penguensanat.com/"
              included={["Özel tasarım landing", "Admin panel entegrasyonu", "SEO temel ayarlar", "Mobil uyumlu tasarım"]}
              excluded={["Hosting & domain", "Kullanıcı eğitimi", "Süreç sonrası bakım"]}
            />

            {/* ClassBase */}
            <ServiceCard
              title="ClassBase"
              description="Kurumsal web sitesi"
              imgSrc="/service/work/websites/classbase_website.png"
              imgAlt="ClassBase Platform"
              link="https://classbase-website.vercel.app/"
              included={["React tabanlı altyapı", "Form entegrasyonları", "Temel performans optimizasyonu"]}
              excluded={["Metin & içerik girişi", "Üçüncü parti API ücretleri"]}
            />

            {/* Fregie */}
            <ServiceCard
              title="Fregie"
              description="Tek sayfalı web sitesi"
              imgSrc="/service/work/websites/fregie_website.png"
              imgAlt="Fregie App"
              link="https://www.fregie.app/"
              included={["One-page UI/UX", "Animasyonlu scroll", "Hafif görsel optimizasyon"]}
              excluded={["Hosting", "Bakım & güncelleme"]}
            />

            {/* Alaeddin's Coast */}
            <ServiceCard
              title="Alaeddin's Coast"
              description="Premium web sitesi"
              imgSrc="/service/work/websites/alaeddinscoast_website.png"
              imgAlt="Alaeddin's Coast"
              link="https://alaeddins-coast-website.vercel.app/tr"
              included={["Çoklu dil desteği", "Özel 3D interaktif öğeler", "Gelişmiş SEO" ]}
              excluded={["Server yönetimi", "İçerik üretimi"]}
            />

            {/* Standy */}
            <ServiceCard
              title="Standy"
              description="Kurumsal web sitesi"
              imgSrc="/service/work/websites/standy_website.png"
              imgAlt="Standy Website"
              link="https://www.standy.com.tr/"
              included={["CMS entegrasyonu", "Slider & galeri", "İletişim formları"]}
              excluded={["İçerik çevirisi", "Bakım anlaşması"]}
            />

            {/* BeenHere */}
            <ServiceCard
              title="BeenHere"
              description="Tek sayfalı web sitesi"
              imgSrc="/service/work/websites/beenhere_website.png"
              imgAlt="BeenHere Platform"
              link="https://beenhere-website.vercel.app/"
              included={["Konum bazlı animasyon", "Hızlı yükleme optimizasyonu"]}
              excluded={["Domain", "Gelecekteki özellik eklemeleri"]}
            />
          </div>    <section className="overflow-x-auto">
      <table className="w-full min-w-[640px] divide-y divide-gray-200  ">
        <thead className="bg-gray-50   text-xs uppercase tracking-wider">
          <tr>
            <th className="py-3 px-3 text-left">Özellik / Paket</th>
            <th className="py-3 px-3">Tek Sayfalı</th>
            <th className="py-3 px-3">Kurumsal</th>
            <th className="py-3 px-3">Premium</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100  ">
          {[
            ["Hedef Kullanım", "Landing / Tanıtım", "KOBİ / Marka tanıtımı", "Büyük ölçekli / Çok işlevli"],
            ["Sayfa Sayısı", "1 (scroll)", "5‑10", "15+"],
            ["Dil Desteği", "1 dil", "2 dil", "3+ dil"],
            ["Özel Tasarım (Figma)", "✓ temel", "✓", "✓ gelişmiş"],
            ["Revizyon Hakkı", "1 tur", "3 tur", "Sınırsız"],
            ["Mobil & Tablet Uyumu", "✓", "✓", "✓"],
            ["CMS", "✕", "✓ WordPress / Headless", "✓ Özel / Headless"],
            ["Blog / Haber Modülü", "✕", "✓", "✓ gelişmiş"],
            ["SEO Ayarları", "✓ temel", "✓", "✓ gelişmiş (Schema, hız)"],
            ["Hız & Güvenlik Optimizasyonu", "Temel", "Orta", "İleri (CDN, WAF)"],
            ["Formlar (İletişim / Teklif)", "1 adet", "Sınırsız", "Sınırsız + CRM entegrasyonu"],
            ["Özel Entegrasyonlar (API, ERP)", "✕", "•", "✓"],
            ["Teknik Destek & Bakım", "1 ay", "3 ay", "12 ay"],
           ].map((row, idx) => (
            <tr key={idx} className="odd:bg-white even:bg-gray-50  ">
              <th className="py-4 px-3 text-left font-medium text-gray-700  ">
                {row[0]}
              </th>
              <td className={colClasses}>{row[1]}</td>
              <td className={colClasses}>{row[2]}</td>
              <td className={colClasses}>{row[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Legend */}
      <p className="mt-4 text-xs text-gray-500  ">✓ = dahil | ✕ = dahil değil | • = opsiyonel / ek ücretli</p>
    </section>

        </section>

        {/* -------------------------------------------------- */}
        {/* 📱 UYGULAMA GELİŞTİRME */}
        {/* -------------------------------------------------- */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">📱 Uygulama Geliştirme</h2>

          {/* Mobil Uygulamalar */}
          <h3 className="text-2xl font-semibold">Mobil Uygulamalar</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Standy App */}
            <ServiceCard
              title="Standy: Cebindeki İndirim"
              description="Flutter ile geliştirilen uygulama"
              imgSrc="/service/work/mobile_apps/1.jpg"
              imgAlt="Standy Platform"
              link="https://standy.com.tr/"
              included={["Çapraz platform (iOS & Android)", "Push bildirim entegrasyonu", "Firebase auth & DB", "Sürüm 1.0 yayına alma"]}
              excluded={["Store ücretleri", "Sonraki sürüm güncellemeleri"]}
            />

            {/* Fregie App */}
            <ServiceCard
              title="Fregie"
              description="Swift ile geliştirilen uygulama"
              imgSrc="/service/work/mobile_apps/2.jpg"
              imgAlt="Fregie Platform"
              link="https://fregie.app/"
              included={["iOS native geliştirme", "Barcode scanning SDK", "ML tabanlı içerik analizi", "Karanlık & aydınlık tema"]}
              excluded={["App Store ücretleri", "Backend sunucusu"]}
            />
          </div>

          {/* Masaüstü / Web Uygulamaları */}
          <h3 className="text-2xl font-semibold">Masaüstü ve Web Uygulamaları</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Project İzmir */}
            <ServiceCard
              title="Project İzmir"
              description="Gayrimenkul Takip Uygulaması"
              imgSrc="https://docs.projectizmir.artesdeilusion.com/~gitbook/image?url=https%3A%2F%2F3014089240-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252Fgl4ASuLFf7OKSs6cHoNJ%252Fuploads%252FJWtP90gwl0kw9bqqIPxI%252Fcalendar.png%3Falt%3Dmedia%26token%3D8d38f3fe-9885-48cd-b8c4-29e819919864&width=768&dpr=2&quality=100&sign=f6bf8c1b&sv=2"
              imgAlt="Project İzmir Platform"
              link="https://docs.projectizmir.artesdeilusion.com/"
              included={["Electron + React UI", "SQLite veri tabanı", "Çoklu kullanıcı yönetimi", "Otomatik güncelleme mekanizması"]}
              excluded={["Bulut senkronizasyon", "Uzun dönem bakım"]}
            />
          </div>
        </section>

        {/* -------------------------------------------------- */}
        {/* 💰 FİYATLANDIRMA TABLOSU */}
        {/* -------------------------------------------------- */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">💰 Fiyatlandırma</h2>
          <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
            <table className="min-w-full table-auto text-left text-sm">
              <thead>
                <tr className="bg-gray-100/70 divide-x divide-gray-200">
                  <th className="px-4 py-2 font-semibold">Hizmet</th>
                  <th className="px-4 py-2 font-semibold">Tek Seferlik</th>
                  <th className="px-4 py-2 font-semibold">Aylık</th>
                  <th className="px-4 py-2 font-semibold">Yıllık</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {[
                  ["Logo Tasarımı", "1.500 TL", "-", "-"],
                  ["Kurumsal Kimlik Paketi", "10.000 TL", "-", "-"],
                  ["Broşür / El İlanı", "2.500 TL", "-", "-"],
                  ["Sosyal Medya Tasarımı (10 post)", "3.000 TL", "4.500 TL", "48.000 TL"],
                  ["Tek sayfalı Web Sitesi", "12.000 TL", "3.000 TL", "35.000 TL"],
                  ["Kurumsal Web Sitesi", "20.000 TL", "3.000 TL", "35.000 TL"],
                  ["Premium Web Sitesi", "45.000 TL", "3.000 TL", "35.000 TL"],
                  ["UI/UX Tasarımı", "8.000 TL", "-", "-"],
                  ["Basit Mobil Uygulama", "50.000 TL", "4.500 TL", "45.000 TL"],
                  ["Orta Düzey Web Uygulaması", "75.000 TL", "6.000 TL", "60.000 TL"],
                  ["Karmaşık Uygulama", "100.000 TL+", "7.500 TL+", "80.000–100.000 TL"]
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
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* 🔧 YARDIMCI BİLEŞEN                                                   */
/* ------------------------------------------------------------------ */

interface ServiceCardProps {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  link?: string;
  included: string[];
  excluded: string[];
}

function ServiceCard({
  title,
  description,
  imgSrc,
  imgAlt,
  link,
  included,
  excluded,
}: ServiceCardProps) {
  /* Eğer link varsa img'i <a> içine sar */
  const Image = (
    <img
      src={imgSrc}
      alt={imgAlt}
      className="h-auto w-auto max-h-36 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
    />
  );

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="flex-grow">
        <h4 className="text-xl font-semibold mb-3">{title}</h4>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center p-6 border border-gray-200 group">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="group">
              {Image}
            </a>
          ) : (
            Image
          )}
        </div>
      </div>

      {/* Paket içeriği */}
      <div className="mt-4 space-y-1 text-sm">
        <h5 className="font-semibold">Dahil Olanlar</h5>
        <ul className="list-disc ml-5 text-gray-600 space-y-0.5">
          {included.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h5 className="font-semibold mt-2">Hariç</h5>
        <ul className="list-disc ml-5 text-gray-600 space-y-0.5">
          {excluded.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
