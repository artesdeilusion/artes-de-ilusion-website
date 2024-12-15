import {Brush, Mood,StackedLineChart } from "@mui/icons-material";
import Image from "next/image";
import IndieNavbar from "../components/indie-navbar";
  
 export default function Page() {
 
 
   
   return (
    
    <>
 


 <title>Artes de Ilusion | Indie</title>

 <nav>
   <IndieNavbar></IndieNavbar>
 </nav>
 
  
 <div className="h-screen relative overflow-hidden">
       {/* Background Image */}
       <div className="absolute top-0 left-0 w-full h-full">
         <Image
           src="https://images.pexels.com/photos/3648850/pexels-photo-3648850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your image path
           alt="Background Image"
           layout="fill"
           objectFit="cover" // Makes the image cover the entire screen
           quality={75} // Adjust quality for optimization
           priority // Ensures the image loads quickly
         />
       </div>
 
       {/* Content */}
       <div className="sm:mt-10 relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-screen flex items-center">
       <div className="  text-white text-start sm:flex    ">
     <div>
       <h1 className="text-3xl sm:text-5xl">
     Ad astra,
       <span className="block  "><strong className="text-blue-500">per aspera.</strong></span>
       </h1>
 
       <p className="mt-4 max-w-lg sm:text-xl/relaxed">
       Kendi yaratıcılığımızla hayata geçirdiğimiz, özgün ve cesur projelerin alanı. Burada fikirlerimiz, sınır tanımadan gerçeğe dönüşüyor.
 
       </p>
 
       
     </div>
   </div>
 </div>
 
 
       {/* Overlay for better readability */}
       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0"></div>
 
 
       
     </div>

     <section className="mx-auto my-24 text-black flex flex-row max-w-screen-xl px-4 sm:px-6 lg:px-8">
  <div className="grid-container grid gap-6 md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
    <div className="border-l-2 border-pink-400 pl-4 md:pl-8  border-brand-main md:border-l-4">
      <h3 className="text-2xl font-display text-text-primary mb-2">Ad Astra</h3>
      <h4 className="text-base font-light text-text-tertiairy mb-4">/ˈæd ˈæstrə/ - tabir</h4>
      <div className="prose">
        <p>“Ad Astra”, en yüksek standartları hedefleme arzumuzu yansıtır. Zorluklarla inovasyonla yüzleşiriz ve sıra dışı sonuçlar elde etmeyi amaçlarız.






</p>
      </div>
    </div>
    <div className="border-l-2 border-pink-400 pl-4 md:pl-8 border-brand-main md:border-l-4">
      <h3 className="text-2xl font-display text-text-primary mb-2">Per Aspera</h3>
      <h4 className="text-base font-light text-text-tertiairy mb-4">/pər əˈspɛrə/ - tabir</h4>
      <div className="prose">
        <p>“Per Aspera”, zorlukları kararlılıkla ve dirençle aşma taahhüdümüzü ifade eder.</p>
      </div>
    </div>
  </div>
</section>


 
<section className="bg-black h-96 flex items-center justify-center">
  <div className="flex flex-col items-center text-center text-white space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:items-center">
    <span className="text-5xl ">her zaman sevgiyle</span>
    <img className="w-14 h-14" src="/indie/heart.svg" alt="heart icon" />
  </div>
</section>





<section className="bg-[#3eb489]">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
      <div className="md:col-span-1">
        <div className="max-w-lg md:max-w-none">
          <img src="/indie/convooy/convooy-logo.svg" alt="" />

          <p className="mt-4 text-black">
          Convooy, bisiklet, motosiklet, araba, scooter, kaykay ve diğer taşınabilir araçlarla kullanıcıların birlikte güvenli ve organize bir şekilde seyahat etmelerini sağlayan bir uygulamadır.  







          </p>
         
        </div>

        
      </div>

      <div className="md:col-span-3">
        <img
          src="https://images.pexels.com/photos/2537607/pexels-photo-2537607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="rounded"
          alt=""
        />
      </div>
    </div>
  </div>
</section>
 


<section className="bg-black">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
      <div className="md:col-span-1">
        <div className="max-w-lg md:max-w-none">
          <img src="/indie/beenhere/beenhere-logo.svg" alt="" />

          <p className="mt-4 text-white">
          BeenHere, kullanıcıların dünya genelindeki her yerden seyahatlerini ve keşiflerini kolayca belgeleyip paylaşmalarını sağlayan yenilikçi bir uygulamadır.







          </p>
          <div className=" mt-4 inline-flex items-center justify-center mx-auto max-w-lg text-center">
      <a
        className="relative px-8 py-3 text-sm text-white bg-transparent border-2 border-white hover:text-black overflow-hidden group focus:outline-none"
        href="https://beenhere-website.vercel.app/"
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

      <div className="md:col-span-3 sm:order-first">
        <img
          src="https://beenhere-website.vercel.app/pexels-photo-2804411.jpeg"
          className="rounded"
          alt=""
        />
      </div>
    </div>
  </div>
</section>
 

<section className="   text-black ">
     <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">

 		<div className="grid gap-6 my-12 lg:grid-cols-3 ">
			<div className="flex flex-col p-8 space-y-4 hover:text-white  hover:bg-black border-2 border-black ">
				<div className="flex items-center justify-center flex-shrink-0 w-16 h-16 text-xl font-bold rounded-full transition-transform duration-200 text-black bg-yellow-300">
                    <Mood></Mood>
                </div>
				<p className="text-lg   ">
                Projelerimiz, insanların hayatına değer katarken onlara mutluluk ve ilham vermeyi hedefler. Kullanıcı odaklı tasarım ve samimi deneyimler ile olumlu duygular yaratıyoruz.


				</p>
			</div>
			<div className="flex flex-col p-8 space-y-4 hover:text-white  hover:bg-black border-2 border-black ">
				<div className="flex items-center justify-center flex-shrink-0 w-16 h-16 text-xl font-bold rounded-full transition-transform duration-200 text-black bg-blue-300">
            <StackedLineChart></StackedLineChart></div>
				<p className="text-lg  ">
                Her projemiz, uzun vadeli değer yaratmayı ve iş hedeflerinize katkı sağlamayı amaçlar. Stratejik yaklaşımlarımızla, projelerinizin büyümesi için sağlam bir temel inşa ediyoruz.

</p>
			</div>
			<div className="flex flex-col p-8 space-y-4 hover:text-white  hover:bg-black border-2 border-black ">
				<div className="flex items-center justify-center flex-shrink-0 w-16 h-16 text-xl font-bold rounded-full transition-transform duration-200 text-black bg-purple-300">

                    <Brush></Brush></div>
				<p className="text-lg  ">
                Projelerimiz, estetikten ödün vermeden işlevselliği ön planda tutar. Hem ihtiyaçlara hem de bütçelere uygun çözümler sunarak erişilebilirlik sağlarız.






</p>
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
         eğlenceli bir fikrin mi var? <br />
         <span className="text-blue-500">selam vermekten çekinme!</span>
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
         <span className="relative z-10">selam ver!</span>
       </a>
     </div>
   </div>
 </div>
 </section>
 
  
    </>
 
     
     
   );
 }
 