"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { ArrowForward,   Close, Menu } from '@mui/icons-material';
 /* eslint-disable @next/next/no-img-element */

 
export default function MusicNavbar() {
    
 
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the state of the menu
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <header className={`fixed w-full z-50 transition-all ease-in-out   duration-200 ${isScrolled ? " shadow-lg bg-white text-black" : "       "}  `}>
        <div className="   w-full bg-black  z-50      text-white">
            <div className="text-start max-w-screen-xl   mx-auto z-100 text-xs  font-medium">
                 <div className='space-x-2 '>
                 <Link rel="noopener noreferrer" 
                    href="/" className="inline-block py-2 px-4    hover:bg-white hover:text-black "> Hizmet </Link>
            <Link rel="noopener noreferrer" 
                    href="/commercial" className="inline-block py-2 px-4  hover:bg-white hover:text-black   ">{('Commercial')}   </Link>
            <Link rel="noopener noreferrer" 
                    href="/indie" className="inline-block py-2 px-4    hover:bg-white hover:text-black ">{('Indie')}   </Link>
            <Link rel="noopener noreferrer" 
                    href="/music" className="inline-block py-2 px-4   bg-white  text-black  ">Müzik  </Link>
           
                 </div>
                  </div>
        </div>
        
        <div className={`max-w-screen-xl mx-auto container ${isScrolled ? "bg-white  " : "  text-white"}  flex  px-4 py-2   w-full justify-between `}>
           
           
            <div className="items-center space-x-2 flex-shrink-0  flex flex-row lg:flex">
            {isScrolled ?  <Link href='/' className='h-8 w-8 bg-black      hover:animate-spin '>   </Link> : <Link href='/' className='h-8   w-8 bg-white       hover:animate-spin '>   </Link>}
                 <Link
                    rel="noopener noreferrer"
                    href="/"
                    className="items-center flex flex-row transition duration-200 ease-in-out      "
                >
                    {(' | Müzik')}
                </Link>



            </div>
          
            <div className="items-center space-x-5 flex-shrink-0 hidden lg:flex">


                <Link
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/company/artes-de-ilusion"
                    target='_blank'
                    className="flex items-center         flex-row transition duration-200 ease-in-out  underline-animation"
                >
                    Kariyer
                </Link>

                <Link
                    rel="noopener noreferrer"
                    href="/company"
                    className="flex items-center         flex-row transition duration-200 ease-in-out  underline-animation"
                >
                    Şirket
                </Link>


                <Link
                    rel="noopener noreferrer"
                    href="/contact"
                    className="transition duration-200 ease-in-out  underline-animation"
                >
İletişim

                </Link>





            </div>

            <div className='items-center flex space-x-4  order-last   lg:hidden    '>
               
                {isMenuOpen ?
                    <button onClick={toggleMenu} className="  ">
                        <Close />
                    </button> :
                    <button onClick={toggleMenu} className="   ">
                        <Menu />
                    </button>
                }
            </div>
        </div>

        {isMenuOpen && (
            <div className="h-screen transition bg-black left-0 w-full bg-standy-black ease-in-out duration-300 shadow-lg lg:hidden">
                <ul>
                    <Link onClick={() => setIsMenuOpen(false)}   href="https://www.linkedin.com/company/artes-de-ilusion"
                    target='_blank'>
                        <li className="text-white flex flex-row items-center justify-between px-4 py-5 hover:text-black hover:bg-white">
                            <p>Kariyer</p>
                            <ArrowForward></ArrowForward>
                        </li>
                    </Link>
                    <Link onClick={() => setIsMenuOpen(false)} href="/company">
                        <li className="text-white flex flex-row items-center justify-between px-4 py-5 hover:text-black hover:bg-white">
                            <p>Şirket</p>
                            <ArrowForward></ArrowForward>
                        </li>
                    </Link>
                  
                    <Link   onClick={() => setIsMenuOpen(false)} href="/contact">
                        <li className="text-white flex flex-row items-center justify-between px-4 py-5 hover:text-black hover:bg-white">
                            <p>İletişim</p>
                            <ArrowForward></ArrowForward>
                        </li>
                    </Link>
                </ul>
            </div>
        )}
    </header>
    );
}