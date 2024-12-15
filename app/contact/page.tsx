import Navbar from "../components/navbar";
import { ArrowForward } from "@mui/icons-material";

export default function Page() {


  
  return (

	<>
	<title>Artes de Ilusion | İletişim</title>
	<nav>
		<Navbar></Navbar>
	</nav>
	<div className="h-20 bg-black">

	</div>
	<div className="relativep mx-auto max-w-screen-xl px-4 text-black sm:px-6 lg:px-8  ">
	<section className="py-6      ">
	<div className=" ">
		<div className="md:px-6">
			<h1 className="text-4xl  "><span className="text-purple-400 block">Yazmaktan,</span><span className="text-pink-400 block"> aramaktan,</span><span className="block text-red-400"> ziyaret etmekten</span> çekinme!
			</h1>
			<p className="pt-2 pb-4">Çalışmamız hakkında bilgi almak veya farklı bir zorlukla karşılaşıyorsanız bizimle iletişime geçmekten çekinmeyin. Sizinle konuşmayı dört gözle bekliyoruz.
			</p>
			<div className="space-y-4">
			<hr />

			<div className="flex items-center justify-between">
				<p>Adres</p>
					<span className="max-w-screen-sm text-end">Pınarbaşı, Atatürk Blv. Mustafa Kamaç Sitesi A Blok, Kat:4, No:8, 07100 Konyaaltı/Antalya</span>
				</div>
				<hr />
				<div className="flex items-center justify-between">
				<p>Telefon</p>
					<span>Not Available</span>
				</div>
				<hr />

				<div className="flex items-center justify-between">
				<p>Email</p>
					<a       className="underline-animation"                                 href="mailto:info@artesdeilusion.com"
					> <span>info@artesdeilusion.com</span></a>
				</div>
				<hr />
				<div className="flex items-start justify-between">
				<p>Sosyal Hesaplar</p>
					
					<div className="flex text-end flex-col">	
				<a href="https://www.instagram.com/artesdeilusion" className="underline-animation" target="_blank">  <span>instagram</span> <ArrowForward className="-rotate-45"/> </a>	
				<a href="https://www.behance.net/aicom" className="underline-animation" target="_blank"> <span>behance</span> <ArrowForward className="-rotate-45"/> </a>	
				<a href="https://www.linkedin.com/company/artes-de-ilusion/" className="underline-animation" target="_blank"> <span>linkedin</span> <ArrowForward className="-rotate-45"/> </a>	
				<a href="https://github.com/artesdeilusion"  className="underline-animation" target="_blank"> <span>github</span> <ArrowForward className="-rotate-45"/> </a>	
					</div>
				</div>
			</div>
		</div>
	 
	</div>
</section>
	</div>
	</>
   
 )}