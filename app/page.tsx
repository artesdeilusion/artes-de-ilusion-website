  import Image from "next/image";
import Link from "next/link";
import ServiceNavbar from "./components/service-navbar";
import { Apps, ArrowForward, AutoAwesome, Brush, Build, Dashboard, Handshake, IntegrationInstructions, Language, Mood, SettingsSuggest } from "@mui/icons-material";

export default function Home() {


  
  return (
   
   <>
<nav>
<ServiceNavbar></ServiceNavbar>
</nav>   

 <div className="h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="https://images.pexels.com/photos/31666728/pexels-photo-31666728/free-photo-of-gunesin-dogusunda-yansitici-suyla-huzurlu-gol-manzarasi.jpeg" 
          alt="Background Image"
          layout="fill"
          objectFit="cover" // Makes the image cover the entire screen
          quality={50} // Adjust quality for optimization
          priority // Ensures the image loads quickly
        />
      </div>

      {/* Content */}
      <div className="sm:mt-10 relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-screen flex items-center">
      <div className="  text-white text-start   sm:flex    ">
    <div>
      <h1 className="text-3xl sm:text-5xl">
      Yalnızca    
      <span className="block  "><strong className="text-yellow-300">mükemmeliyetçilerin</strong> tercihi.</span>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
      Bireylerin ilham veren enerjilerinden beslenerek, global vizyonla etkileyici projeler üretiyoruz.  







      </p>

      <div className="mt-4 flex flex-wrap gap-4 text-center">
      
        
        <Link
  className="relative   px-8 py-3 text-sm  text-white   bg-transparent border-2 hover:text-black  overflow-hidden group focus:outline-none"
  href="/contact"
  role="button"
>
  {/* Background Layer */}
  <div className="absolute inset-0 bg-white transform translate-y-full transition-transform duration-200 group-hover:translate-y-0"></div>

  {/* Button Text */}
  <span className="relative z-10">İletişime geç!</span>
</Link>



      </div>
    </div>
  </div>
</div>


      {/* Overlay for better readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0"></div>


      
    </div>

    
<div className="relative sm:pt-24 p-10 mx-auto max-w-screen-xl px-4   sm:px-6 lg:px-8  ">

<div className="pb-10">



<div className="relative w-full text-center  md:text-left lg:text-left md:w-2/4 lg:w-2/4">
                <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-4 mx-auto max-w-max md:max-w-md lg:max-w-md lg:mx-0">Öne Çıkan <br /> İşlerimiz</h2>
                <div className="  inline-flex items-center justify-center mx-auto max-w-lg text-center">
      <Link
        className="relative px-8 py-3 text-sm text-black bg-transparent border-2 border-black hover:text-white overflow-hidden group focus:outline-none"
        href="/service/our-works"
        role="button"
      >
        {/* Background Layer */}
        <div className="absolute inset-0 bg-black transform translate-y-full transition-transform duration-200 group-hover:translate-y-0"></div>

        {/* Button Text */}
        <span className="relative z-10">Hepsini incele!</span>
      </Link>
    </div>
       
</div>
</div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  sticky top-0  ">
        {/* Left Block - Normal position */}
     <a href="https://docs.projectizmir.artesdeilusion.com/" target="_blank"> 
       <div key={1} className="bg-brand-main relative group no-underline">
  <div className="flex flex-col   p-8 justify-between border border-grey-900 font-light relative z-10 bg-black h-full overflow-hidden group-hover:rounded-br-[112px] transition-all">
    {/* Photo at the top of the card */}
    <img
      className="    object-cover   mb-4"
      src="https://docs.projectizmir.artesdeilusion.com/~gitbook/image?url=https%3A%2F%2F3014089240-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252Fgl4ASuLFf7OKSs6cHoNJ%252Fuploads%252FJWtP90gwl0kw9bqqIPxI%252Fcalendar.png%3Falt%3Dmedia%26token%3D8d38f3fe-9885-48cd-b8c4-29e819919864&width=768&dpr=2&quality=100&sign=f6bf8c1b&sv=2" 
      alt="Project İzmir"
    />

    {/* Testimonial text */}
    <p className="text-xl   font-medium">
      <span className="pull-double"></span>Project İzmir
    </p>

    {/* Author and title */}
    <div className="flex   items-center      ">
      <p>
      Teksan İç ve Dış Ticaret LTD. ŞTİ. 
      </p>
    </div>
  </div>

  {/* Icon */}
  <ArrowForward className="rotate-45 absolute bottom-3 right-3 text-black" width="14" height="14" />
</div>
</a>
<a href="https://penguensanat.com/" target="_blank"> 

<div key={2} className="bg-brand-main relative group no-underline   transform md:-translate-y-1/2">
  <div className="flex flex-col  p-8  justify-between border border-grey-900 font-light relative z-10 bg-black h-full overflow-hidden group-hover:rounded-br-[112px] transition-all">
    {/* Photo at the top of the card */}
    <img
      className="    object-cover h-64   mb-4"
      src="/service/work/penguen-sanat-website.png"
      alt="Penguen Sanat Web Sitesi"
    />

    {/* Testimonial text */}
    <p className="text-xl   font-medium">
      <span className="pull-double"></span>Penguen Sanat | Web Sitesi
    </p>

    {/* Author and title */}
    <div className="flex   items-center ">
      <p>
      Penguen Sanat Merkezi 
      </p>
    </div>
  </div>
  {/* Icon */}
  <ArrowForward className="rotate-45 absolute bottom-3 right-3 text-black" width="14" height="14" />
</div>
  </a>
<a href="https://www.behance.net/gallery/214782263/Penguen-Sanat-Branding" target="_blank"> 
        <div key={3} className="bg-brand-main relative group no-underline">
  <div className="flex flex-col  p-8 justify-between border border-grey-900 font-light relative z-10 bg-black h-full overflow-hidden group-hover:rounded-br-[112px] transition-all">
    {/* Photo at the top of the card */}
    <img
      className=" object-cover   mb-4"
      src="/service/work/penguen-sanat-branding.png" /* Replace with the actual image source */
      alt="Penguen Sanat | Marka Kimliği"
    />

    {/* Testimonial text */}
    <p className="text-xl   font-medium">
      <span className="pull-double"></span>Penguen Sanat | Marka Kimliği
    </p>

    {/* Author and title */}
    <div className="flex   items-center      ">
      <p>
      Penguen Sanat Merkezi 
      </p>
    </div>
  </div>

  {/* Icon */}
  <ArrowForward className="rotate-45 absolute bottom-3 right-3 text-black" width="14" height="14" />
</div>

</a>
<a href="https://attaliahukuk.com/" target="_blank"> 
        <div key={4} className="bg-brand-main relative group no-underline  transform md:-translate-y-1/2">
  <div className="flex flex-col  p-8 justify-between border border-grey-900 font-light relative z-10 bg-black h-full overflow-hidden group-hover:rounded-br-[112px] transition-all">
    {/* Photo at the top of the card */}
    <img
      className="    object-cover   mb-4"
      src="/service/work/attalia-hukuk.jpg" /* Replace with the actual image source */
      alt="Attalia Hukuk | Web Sitesi"
    />

    {/* Testimonial text */}
    <p className="text-xl   font-medium">
      <span className="pull-double"></span>Attalia Hukuk | Web Sitesi
    </p>

    {/* Author and title */}
    <div className="flex   items-center      ">
      <p>
      Attalia Hukuk & Danışmanlık
      </p>
    </div>
  </div>

  {/* Icon */}
  <ArrowForward className="rotate-45 absolute bottom-3 right-3 text-black" width="14" height="14" />
</div>

</a>
      </div>



</div>

    <section className="py-24 ">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
              <div className="relative w-full text-center lg:text-left lg:w-2/4">
                  <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">Sihirli Dokunuşlar ile Yenilikçi Tasarımlar
                  </h2>
              </div>
              <div className="relative w-full text-center  lg:text-left lg:w-2/4">
                  <p className="text-lg font-normal text-gray-500 mb-5">Yaratıcılıkla teknoloji arasında bir köprü kurarak, görsel hikaye anlatımının sınırlarını yeniden tanımlıyoruz.

</p> 
                   
       
                  <div className="  inline-flex items-center justify-center mx-auto max-w-lg text-center">
      <Link
        className="relative px-8 py-3 text-sm text-black bg-transparent border-2 border-black hover:text-white overflow-hidden group focus:outline-none"
        href="https://www.behance.net/aicom"
        target="_blank"
        role="button"
      >
        {/* Background Layer */}
        <div className="absolute inset-0 bg-black transform translate-y-full transition-transform duration-200 group-hover:translate-y-0"></div>

        {/* Button Text */}
        <span className="relative z-10">Daha fazla</span>
      </Link>
    </div>
       
              </div>
          </div>
          <div className="flex  justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
              <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-[#ff443a]">
                  <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                     
                     <Handshake   className="text-[#ff443a]"></Handshake>
                          
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Strateji ve Çözümler

                  </h4>
                  <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                  Hedeflerinize uygun, işlevsel ve estetik stratejiler ile büyümenizi destekliyoruz.

</p>
              </div>
              <div className="group   relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-[#ff443a]">
                  <div className="bg-white  rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                      <Mood className="text-[#ff443a]"></Mood>
                          
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Deneyim Tasarımı

                  </h4>
                  <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                  Kullanıcı dostu arayüzler ve etkileyici deneyimler sunuyoruz.


</p>
              </div>
              <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-[#ff443a]">
                  <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                      <SettingsSuggest className="text-[#ff443a]"></SettingsSuggest>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Mühendislik ve Veri

                  </h4>
                  <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                  En yeni teknolojilerle platform uyumlu, hızlı ve güvenilir çözümler üretiyoruz.

</p>
              </div>
              <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-[#ff443a]">
                  <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                     <AutoAwesome className="text-[#ff443a]"></AutoAwesome>
                          
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Görsel Tasarım

                  </h4>
                  <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                  Bilgiyi sade ve çekici bir şekilde aktararak markanızı öne çıkarıyoruz.

</p>
              </div>
          </div>
    </div>
  </section>
 <div className="bg-black">

 <section className="py-24 mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8   mdlg:pt-52 mdlg:pb-34">
  <div className="container flex flex-row  ">
    <div className="lg:col-start-1 lg:col-end-7  md:col-start-2 col-start-1 col-end-13 md:col-end-12">
      <h2 className="text-4xl text-text-primary     mb-4 [&_strong]:font-normal [&_strong]:text-pink-300">
      Felsefemiz:<br />
        <strong>Çözüm, Şekilden Önce Gelir</strong>
      </h2>
      <div className="prose prose-tr:border-grey-900  ">
        <p>
        Her proje benzersizdir ve çözüm, yaratıcı fikirlerden beslenir. Artes de Ilusión, teknik engelleri kaldırarak projelerinize hayal gücü ve yenilik katıyor.
        </p>
      </div>
    </div>
     
   </div>
   
   <div className="  py-8 mx-auto   sm:max-w-xl md:max-w-full lg:max-w-screen-xl    ">
                <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="p-8 border-b sm:border-r">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4   sm:w-16 sm:h-16">
                            <div className="p-4  bg-gray-600 rounded-full border-white border-2">

                                <Build className="text-white  "></Build>
                                </div>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">
                            Entegre Araç ve Sistem Geliştirme

                            </h6>
                            <p className="mb-3 text-xs ">
                            İş süreçlerinizi daha verimli hale getiren özel araçlar ve sistemler inşa ediyoruz.
                            </p>
                        </div>
                    </div>
                    <div className="p-8 border-b lg:border-r">
                        <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4   sm:w-16 sm:h-16">
                            <div className="p-4  bg-green-600 rounded-full border-white border-2">

                                <Brush className="text-white  "></Brush>
                                </div>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">
                            Grafik Tasarım Hizmetleri


                            </h6>
                            <p className="mb-3 text-xs ">
                            Marka kimliği, ürün tasarımı ve görsel iletişim ihtiyaçlarınız için estetik ve yaratıcı çözümler geliştiriyoruz.</p>
                        </div>
                    </div>
                    <div className="p-8 border-b sm:border-r lg:border-r-0">
                        <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4   sm:w-16 sm:h-16">
                            <div className="p-4  bg-orange-600 rounded-full border-white border-2">

                                <Dashboard className="text-white  "></Dashboard>
                                </div>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">
                            Platform Çözümleri

                            </h6>
                            <p className="mb-3 text-xs ">
                            İşletmeler için özelleştirilmiş, ölçeklenebilir ve güvenilir dijital platformlar tasarlıyoruz.

</p>
                        </div>
                    </div>
                    <div className="p-8 border-b lg:border-b-0 lg:border-r">
                        <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4   sm:w-16 sm:h-16">
                            <div className="p-4  bg-blue-600 rounded-full border-white border-2">

                                <Language className="text-white  "></Language>
                                </div>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">
                            Dinamik Web Çözümleri


                            </h6>
                            <p className="mb-3 text-xs ">
                            Etkileyici, kullanıcı dostu ve duyarlı web siteleri ile markanızın dijital varlığını güçlendiriyoruz.

</p>
                        </div>
                    </div>
                    <div className="p-8 border-b sm:border-b-0 sm:border-r">
                        <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4   sm:w-16 sm:h-16">
                            <div className="p-4  bg-pink-600 rounded-full border-white border-2">

                                <Apps className="text-white  "></Apps>
                                </div>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">
                            Uygulama Geliştirme
                            </h6>
                            <p className="mb-3 text-xs ">
                            İşlevsel, güvenli ve performansı yüksek mobil ve masaüstü uygulamalar tasarlıyoruz.


                            </p>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4   sm:w-16 sm:h-16">
                            <div className="p-4  bg-red-600 rounded-full border-white border-2">

                                <IntegrationInstructions className="text-white  "></IntegrationInstructions>
                                </div>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">
                            Dijital Dönüşüm Danışmanlığı
                            </h6>
                            <p className="mb-3 text-xs ">
                            Şirketlerin iş süreçlerini modern teknolojilerle optimize ederek verimliliklerini artırmalarına, rekabet avantajı kazanmalarına ve geleceğe hazır olmalarına yardımcı oluyoruz.  







                            </p>
                        </div>
                    </div>
                </div>           
</div>
  
</section>

 </div>
<section className="pt-16 pb-8 mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8   mdlg:pt-52 mdlg:pb-34">
                   <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem]   mx-auto max-w-lg text-center    ">Bizim <span className="text-pink-500">Sevgimiz</span><br />Sizin <span className="text-blue-500">Güveniniz</span></h2>
              
 <div className="container mx-auto mt-16 text-text-primary grid-container">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-[72px] mb-20 col-start-1 col-end-13 md:col-start-2 md:col-end-12 mdlg:col-start-1 mdlg:col-end-13">
      {[
        {
          text: `Artes de Ilusion, iş süreçlerimizi modernleştirerek ticari operasyonlarımızı daha verimli hale getirdi. Kullanıcı dostu arayüzü ile işimizi yönetmemize katkı sağladı.”`,
          imgSrc: "https://i.pinimg.com/550x/50/b2/6c/50b26ce6d2bc8adcf0e9a720c6fdc3f9.jpg",
          altText: "Başak E. | Teksan İç ve Dış Ticaret LTD. ŞTİ.",
          name: "Başak E.",
          title: "Teksan İç ve Dış Ticaret Ltd. Şti.",
        },
        {
          text: `Artes de Ilusion ile sanatsal projelerimizi daha etkileyici bir hale getirdik. İletişimin hızlanması ve yaratıcı çözümleri ile hayallerimizdeki projeleri hayata geçirme sürecini kolaylaştırdı.”`,
          imgSrc: "https://i.pinimg.com/474x/69/19/50/691950418b1f99ef9a7c2b749786eec2.jpg",
          altText: "Ömer K.",
          name: "Ömer K.",
          title: "Anonim Şirketi",
        },
      ].map((testimonial, index) => (
        <div key={index} className="bg-brand-main relative group no-underline"  >
          <div className="flex flex-col gap-8 p-10 justify-between border border-grey-900 font-light relative z-10 bg-black h-full overflow-hidden group-hover:rounded-br-[112px] transition-all">
            <p className="text-xl   font-medium">
              <span className="pull-double">“</span>{testimonial.text}
            </p>
            <div className="flex gap-4 items-center    ">
              <img
                className="w-16 h-16 min-w-[4rem] object-cover rounded-full"
                src={testimonial.imgSrc}
                alt={testimonial.altText}
              />
              <p>
                {testimonial.name},<br />
                {testimonial.title}
              </p>
            </div>
          </div>
         <Mood className="absolute bottom-3 right-3 text-black" width="14" height="14" ></Mood>
        </div>
      ))}
    </div>
  </div>
  
</section>

<section>
 
</section>
 <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
      <div className="md:col-span-1">
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          İlham Veren Hayallerin Yeri
          </h2>

          <p className="mt-4 text-gray-700">
          Size ve projelerinize özel çözümler geliştiriyor, yaratıcı potansiyelinizi maksimuma çıkararak benzersiz işler ortaya koyuyoruz.
          </p>
          <div className=" mt-4 inline-flex items-center justify-center mx-auto max-w-lg text-center">
      <Link
        className="relative px-8 py-3 text-sm text-black bg-transparent border-2 border-black hover:text-white overflow-hidden group focus:outline-none"
        href="/company"
        role="button"
      >
        {/* Background Layer */}
        <div className="absolute inset-0 bg-black transform translate-y-full transition-transform duration-200 group-hover:translate-y-0"></div>

        {/* Button Text */}
        <span className="relative z-10">Hakkımızda</span>
      </Link>
    </div>
        </div>

        
      </div>

      <div className="md:col-span-3">
        <img
          src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="rounded"
          alt=""
        />
      </div>
    </div>
  </div>
</section>
 
<div className="py-20 relative z-10 mx-auto max-w-lg px-4">
  <div className="text-white text-start flex flex-col items-center justify-center">
    <div className="text-center">
      <h2 className="text-2xl text-gray-900 md:text-3xl">
     biz fikirlere açığız<br />
        <span className="text-red-500">ara, yaz veya takip et!</span>
      </h2>
    </div>
    <div className="mt-4 inline-flex items-center justify-center mx-auto max-w-lg text-center">
      <Link
        className="relative px-8 py-3 text-sm text-black bg-transparent border-2 border-black hover:text-white overflow-hidden group focus:outline-none"
        href="/contact"
        role="button"
      >
        {/* Background Layer */}
        <div className="absolute inset-0 bg-black transform translate-y-full transition-transform duration-200 group-hover:translate-y-0"></div>

        {/* Button Text */}
        <span className="relative z-10">Merhaba de!</span>
      </Link>
    </div>
  </div>
</div>

 
   </>

    
    
  );
}
