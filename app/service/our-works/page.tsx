import Navbar from "@/app/components/navbar";
import {  ArrowForward } from "@mui/icons-material";
import Link from "next/link";

export default function Page() {


  
  return (
   
   <>

<title>Artes de Ilusion | Portfolio</title>

<nav>
    <Navbar></Navbar>
</nav>
 

 <div className="h-20 bg-black">

 </div>

  
    
<div className="relative sm:pt-24 p-10 mx-auto max-w-screen-xl px-4   sm:px-6 lg:px-8  ">

<div className="pb-10">


  
<div className="relative w-full text-center  md:text-left lg:text-left md:w-2/4 lg:w-2/4">
                <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-4 mx-auto max-w-max md:max-w-md lg:max-w-md lg:mx-0">Öne Çıkan <br /> İşlerimiz</h2>
       
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


<a href="https://salonadliye.artesdeilusion.com" target="_blank"> 
        <div key={5} className="bg-brand-main relative group no-underline">
  <div className="flex flex-col  p-8 justify-between border border-grey-900 font-light relative z-10 bg-black h-full overflow-hidden group-hover:rounded-br-[112px] transition-all">
    {/* Photo at the top of the card */}
    <img
      className=" object-cover   mb-4"
      src="/service/work/salon-adliye-randevu.png" /* Replace with the actual image source */
      alt="Kuaför Randevu Programı"
    />

    {/* Testimonial text */}
    <p className="text-xl   font-medium">
      <span className="pull-double"></span>Kuaför Randevu Programı
    </p>

    {/* Author and title */}
    <div className="flex   items-center      ">
      <p>
      Salon Adliye | Antalya
      </p>
    </div>
  </div>

  {/* Icon */}
  <ArrowForward className="rotate-45 absolute bottom-3 right-3 text-black" width="14" height="14" />
</div>

</a>

<a href="https://instagram.com/penguensanatmerkezi" target="_blank"> 

<div key={6} className="bg-brand-main relative group no-underline   transform md:-translate-y-1/2">
  <div className="flex flex-col  p-8  justify-between border border-grey-900 font-light relative z-10 bg-black h-full overflow-hidden group-hover:rounded-br-[112px] transition-all">
    {/* Photo at the top of the card */}
    <img
      className="    object-cover     mb-4"
      src="/service/work/penguen-sanat-social.png"
      alt="Penguen Sanat | Sosyal Medya"
    />

    {/* Testimonial text */}
    <p className="text-xl   font-medium">
      <span className="pull-double"></span>Penguen Sanat | Sosyal Medya
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

      </div>



</div>
 
<section className="bg-black">
<div className="py-20   relative z-10 mx-auto max-w-xl px-4">
 <div className="text-white text-start flex flex-col items-center justify-center">
   <div className="text-center">
     <h2 className="text-2xl text-white md:text-3xl">
        Bir sonraki sizin olabilir.<br />
       <span className="text-green-300">Bize işinden bahset!</span>
     </h2>
   </div>
   <div className="mt-4 inline-flex items-center justify-center mx-auto max-w-lg text-center">
     <Link
       className="relative px-8 py-3 text-sm text-white bg-transparent border-2 border-white hover:text-black overflow-hidden group focus:outline-none"
       href="/contact"
       role="button"
     >
       {/* Background Layer */}
       <div className="absolute inset-0 bg-white transform translate-y-full transition-transform duration-200 group-hover:translate-y-0"></div>

       {/* Button Text */}
       <span className="relative z-10">Selam ver!</span>
     </Link>
   </div>
 </div>
</div>
</section>
   </>

    
    
  );
}
