 import Image from "next/image";
 import CommercialNavbar from "../components/commercial-navbar";
  
 export default function Page() {
 
 
   
   return (
    
    <>
 


 <title>Artes de Ilusion | Commercial</title>

<nav>
<CommercialNavbar></CommercialNavbar>
</nav>

 <div className="h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your image path
          alt="Background Image"
          layout="fill"
          objectFit="cover" // Makes the image cover the entire screen
          quality={75} // Adjust quality for optimization
          priority // Ensures the image loads quickly
        />
      </div>

      {/* Content */}
<div className="sm:mt-10 relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-screen flex items-center">
  <div className="  text-white text-start   sm:flex    ">
    <div>
      <h1 className="text-3xl sm:text-5xl">
      Hayatı kolaylaştıran
        <strong className="block text-green-400">yenilikler</strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
      Herkes için ihtiyaçlara yönelik özgün ve kullanışlı çözümler geliştiriyoruz.
      </p>
 
    </div>
  </div>
</div>


      {/* Overlay for better readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0"></div>


      
    </div>
 
 
  
 <section className="bg-black h-64 flex items-center justify-center">
   <div className="flex flex-col items-center text-center text-white space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:items-center">
     <span className="text-3xl  ">we want</span>
     <img className="w-20 h-20" src="/commercial/galaxy.svg" alt="heart icon" />
     <span className="text-3xl  ">future to be close</span>

   </div>
 </section>
 
 
 
 
 
 <section className="bg-[#E91E63]">
   <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
     <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
       <div className="md:col-span-1">
         <div className="max-w-lg md:max-w-none">
           <img src="/commercial/standy/standy-wordmark.svg" alt="" />
 
           <p className="mt-4 text-white">
           Standy, şehrindeki popüler kafe ve restoranlarda özel indirimler sunan bir uygulamadır. Uygulamayı indirerek, şehrin en sevilen mekanlarında eşsiz fırsatları keşfet.
           </p>
           <div className=" mt-4 inline-flex items-center justify-center mx-auto max-w-lg text-center">
       <a
         className="relative px-8 py-3 text-sm text-white bg-transparent border-2 border-white hover:text-black overflow-hidden group focus:outline-none"
         href="https://standyroutes.com"
         target="_blank"
         role="button"
       >
         {/* Background Layer */}
         <div className="absolute inset-0 bg-white transform translate-y-full transition-transform duration-200 group-hover:translate-y-0"></div>
 
         {/* Button Text */}
         <span className="relative z-10">Daha fazla</span>
       </a>
     </div>          
         </div>
 
         
       </div>
 
       <div className="md:col-span-3">
         <img
           src="https://images.pexels.com/photos/12935051/pexels-photo-12935051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           className="rounded"
           alt=""
         />
       </div>
     </div>
   </div>
 </section>
  
 
  
 <section className="bg-white">
   <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
     <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
       <div className="md:col-span-1">
         <div className="max-w-md md:max-w-none">
           <img className="h-40" src="/commercial/classbase/classbase-logo.png" alt="" />
 
           <p className="mt-4 text-[#ab47bc]">
           ClassBase, öğrenciler ve öğretmenler için tasarlanmış bir öğrenim platformudur. Derslerin, ödevlerin, duyuruların ve sınavların yönetimini kolaylaştırarak etkili bir öğrenme deneyimi sunar.

</p>
          
           <div className=" mt-4 inline-flex items-center justify-center mx-auto max-w-lg text-center">
       <a
         className="relative px-8 py-3 text-sm text-[#ab47bc] bg-transparent border-2 border-[#ab47bc] hover:text-white overflow-hidden group focus:outline-none"
         href="https://classbase-website.vercel.app/"
         target="_blank"
         role="button"
       >
         {/* Background Layer */}
         <div className="absolute inset-0 bg-[#ab47bc] transform translate-y-full transition-transform duration-200 group-hover:translate-y-0"></div>
 
         {/* Button Text */}
         <span className="relative z-10">Daha fazla</span>
       </a>
     </div>

         </div>
 
         
       </div>
 
       <div className="md:col-span-3 sm:order-first">
         <img
           src="https://images.pexels.com/photos/29602431/pexels-photo-29602431/free-photo-of-istanbul-cafe-de-kahve-ve-tablet-ile-rahat-calisma-alani.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           className="rounded"
           alt=""
         />
       </div>
     </div>
   </div>
 </section>
  
 
 <section className="  bg-[#ffd7ef]">
   <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
     <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
       <div className="md:col-span-1">
         <div className="max-w-lg md:max-w-none">
           <img src="/commercial/teamsight/teamsight-wordmark.svg" alt="" />
 
           <p className="mt-4 text-[#300706]">
           Teamsight uygulaması, ekiplerin iletişim, dosya paylaşımı ve görev yönetimini kolaylaştıran bir işbirliği platformudur. 
           </p>
 
         </div>
 
         
       </div>
 
       <div className="md:col-span-3  ">
         <img
           src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           className="rounded"
           alt=""
         />
       </div>
     </div>
   </div>
 </section>
    
  <section className="bg-black h-80 relative flex items-center justify-center">
   <div className="absolute inset-0 flex items-center justify-center">
     <img className="h-[110%] object-contain" src="/indie/stonks.svg" alt="stonks icon" />
   </div>
 </section>
 
   
  <section className=" ">
  <div className="py-20   relative z-10 mx-auto max-w-lg px-4">
    <div className="text-white text-start flex flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl text-gray-900 md:text-3xl">
          yeterince heyecanlı mı? <br />
          <span className="text-green-500">bu macerada yanımızda ol!</span>
        </h2>
      </div>
      <div className="mt-4 inline-flex items-center justify-center mx-auto max-w-lg text-center">
        <a
          className="relative px-8 py-3 text-sm text-black bg-transparent border-2 border-black hover:text-white overflow-hidden group focus:outline-none"
          href="mailto:info@artesdeilusion.com"
          role="button"
          target="_blank"
          
        >
          {/* Background Layer */}
          <div className="absolute inset-0 bg-black transform translate-y-full transition-transform duration-200 group-hover:translate-y-0"></div>
  
          {/* Button Text */}
          <span className="relative z-10">merhaba de!</span>
        </a>
      </div>
    </div>
  </div>
  </section>
  
   
     </>
  
      
      
    );
  }
  