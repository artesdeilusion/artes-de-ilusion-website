import { ArrowDownward} from "@mui/icons-material";
 import Link from "next/link";
import Navbar from "../components/navbar";

export default function Home() {


  
  return (
   
   <>
 <title>Artes de Ilusion | Şirket</title>

<nav>
  <Navbar></Navbar>
</nav>

    <div className="h-screen bg-black relative overflow-hidden">
      {/* Background Image */}
         

      {/* Content */}
<div className=" mt-10    justify-center relative z-10 mx-auto max-w-screen-xl px-4   sm:px-6 lg:px-8  h-screen flex  items-center">
  <div className="  text-white   text-center   sm:flex    ">
    <div>
      <h1 className="text-3xl sm:text-5xl">
         Karşınızdaa,
        <strong className="block text-red-300">{('"İlüzyon Sanatları"')}</strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
        {("Evet, İspanyolca. Neden mi? Çünkü hoşumuza gitti :)")}
      </p>

<div className="h-10 mt-4 p-6 border hover:animate-spin border-white inline-flex w-10 items-center text-center   justify-center   ">
<ArrowDownward className=" "></ArrowDownward>

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
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          Her yerden bağlan, üretkenliğini koru.
          </h2>

          <p className="mt-4 text-gray-700">
          Nerede olduğunuz önemli değil, bizim için asıl olan yaratıcılığınızdır. İster evde, ister ofiste, ister seyahatte olun, ekibe dahil olabilirsiniz.


          </p>
        </div>
      </div>

      <div>
        <img
          src="https://images.pexels.com/photos/265072/pexels-photo-265072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="rounded"
          alt=""
        />
      </div>
    </div>
  </div>
</section>
 
 
<section className="bg-gray-50">
<div className="py-20   relative z-10 mx-auto max-w-lg px-4">
  <div className="text-white text-start flex flex-col items-center justify-center">
    <div className="text-center">
      <h2 className="text-2xl text-gray-900 md:text-3xl">
        Dahası var! <br />
        <span className="text-red-500">Bizimle iletişime geç.</span>
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
        <span className="relative z-10">İletişime Geç</span>
      </Link>
    </div>
  </div>
</div>
</section>

 
   </>

    
    
  );
}
