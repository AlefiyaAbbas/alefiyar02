import React from 'react';
import Link from 'next/link';
import localFont from 'next/font/local'

const britney = localFont({ src: "../public/fonts/Britney/Britney-Variable.woff2" })
export const Navbar = () => {
    return (
        <header>
            <nav className="flex justify-around py-2 bg-slate-800 text-slate-200 items-center">
                <div id="logo" className={britney.className}>
                    <Link href="/" className='text-4xl'>  <span className='flex gap-[0.1px]'><span>Alef</span>iya Abbas </span> </Link>
                </div>
                <div>
                </div>
                <ul className="flex gap-10 justify-around align-middle">
                    <li>
                        <Link href="/about"> About </Link>
                    </li>
                    <li>
                        <Link href="/experience"> Experiences </Link>
                    </li>
                    <li>
                        <Link href="/projects"> Projects </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

