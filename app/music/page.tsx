 import Image from "next/image"; 
import MusicNavbar from "../components/music-navbar";
import { AlbumOutlined, GraphicEq, Link, MicNone } from "@mui/icons-material";

export default function Page() {


 
 return (
  
  <>

<title>Artes de Ilusion | Müzik</title>

<nav>
 <MusicNavbar></MusicNavbar>
</nav>

 
  <div className="h-screen relative overflow-hidden">
       {/* Background Image */}
       <div className="absolute top-0 left-0 w-full h-full">
         <Image
           src="https://images.pexels.com/photos/3784566/pexels-photo-3784566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your image path
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
         Başlamak için,
         <strong className="block text-green-300">asla geç değil.</strong>
       </h1>
 
       <p className="mt-4 max-w-lg sm:text-xl/relaxed">
       Hayalinizdeki müziği yaratıyoruz. Profesyonel bir prodüksiyonla kendi tarzınızı yansıtın.
       </p>
 
       <div className="mt-4 flex flex-wrap gap-4 text-center">
       
         
         <a
   className="relative   px-8 py-3 text-sm  text-white   bg-transparent border-2 hover:text-black  overflow-hidden group focus:outline-none"
   href="/ "
   role="button"
 >
   {/* Background Layer */}
   <div className="absolute inset-0 bg-white transform translate-y-full transition-transform duration-200 group-hover:translate-y-0"></div>
 
   {/* Button Text */}
   <span className="relative z-10">İletişime geç!</span>
 </a>
 
 
 
       </div>
     </div>
   </div>
 </div>
 
 
       {/* Overlay for better readability */}
       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0"></div>
 
 
       
     </div>
 

   <section>
 <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
   <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
     <div>
       <div className="max-w-lg md:max-w-none">
         <h2 className="text-2xl   text-gray-900 sm:text-3xl">
           Yalnız değilsin!
         </h2>

         <p className="mt-4 text-gray-700">
         Stüdyomuz, sanatçıların ham yeteneklerini işleyerek müzikal mücevherlere dönüştürür. Profesyonel dokunuşla, ham sesleri küresel bir dinleyici kitlesine ulaştırıyoruz.
         </p>
       </div>
     </div>

     <div>
       <img
         src="https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
         className="rounded"
         alt=""
       />
     </div>
   </div>
 </div>
</section>




<section className="mx-auto max-w-screen-xl px-4 py-12 text-black sm:px-6 lg:px-8">
<div className=" pb-8  space-y-2 text-center">
		<h2 className="text-3xl  ">Ne yapıyoruz?</h2>
		<p className=" ">Birlikte, zirveye! </p>
	</div>
	<div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
		<div className="flex flex-col  items-center p-4">
<div className="p-4   bg-green-500 rounded-full border-black border-2">
<MicNone     className="    "></MicNone>
</div>
    <h3 className="my-3 text-2xl  ">Kayıt</h3>
			<div className="space-y-1 text-center leading-tight">
      Profesyonel stüdyolarımızda en kaliteli ses kayıtlarını yapıyoruz.

			</div>
		</div>
		<div className="flex flex-col items-center p-4">
		<div className="p-4   bg-green-500 rounded-full border-black border-2">
<GraphicEq     className="    "></GraphicEq>
</div>
			<h3 className="my-3 text-2xl  ">Düzenleme</h3>
			<div className="space-y-1 text-center leading-tight">
      Kayıtları düzenleyerek, müzikal parçaları daha dinamik ve profesyonel hale getiriyoruz.

			</div>
		</div>
		<div className="flex flex-col items-center p-4">
		<div className="p-4   bg-green-500 rounded-full border-black border-2">
<AlbumOutlined     className="    "></AlbumOutlined>
</div>
			<h3 className="my-3 text-2xl  ">Dağıtım</h3>
			<div className="space-y-1 text-center leading-tight">
			Parçaların yayınlanabilir formatlara dönüştürülmesi ve müzik platformlarında paylaşılması süreçlerini yönetiyoruz.

			</div>
		</div>
	 
	</div>
</section>

<section className="bg-black">
<div className="py-20   relative z-10 mx-auto max-w-xl px-4">
 <div className="text-white text-start flex flex-col items-center justify-center">
   <div className="text-center">
     <h2 className="text-2xl text-white md:text-3xl">
       kendine güveniyor musun? <br />
       <span className="text-green-300">önemli değil. biz güveniyoruz.</span>
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
       <span className="relative z-10">ilk adımı at</span>
     </Link>
   </div>
 </div>
</div>
</section>


  </>

   
   
 );
}
