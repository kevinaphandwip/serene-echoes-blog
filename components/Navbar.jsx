import Link from 'next/link';

import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);


    return (


        <nav className="w-full flex items-center justify-between py-4 px-10 bg-white border-b-1 border-neutral-200">

            {/* Logo area */}
            <div className="flex items-center space-x-2">
                <img src="/assets/logo.svg" alt="Logo" className="w-8 h-8" />

                <span className="font-francois text-gray-800 text-lg">SERENE ECHOES</span>
            </div>
            {/* End Logo area */}


            {/* Hamburger button */}
            <button
                className="md:hidden text-2xl text-gray-800 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? '✕' : '☰'}
            </button>



            {/* Nav Links  */}

            <ul className={`md:flex md:space-x-8 text-gray-800 font-francois text-sm transition-all duration-300 ease-in-out ${isOpen ? 'block absolute top-16 right-6 bg-white rounded shadow-md p-4 space-y-4' : 'hidden md:flex'
                    }`}>
                <li>
                    <Link href="/" className="">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/blog" className="">
                        Blog
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/portofolio" className="">
                        Portofolio
                    </Link>
                </li>
            </ul>



        </nav>
    );
}
