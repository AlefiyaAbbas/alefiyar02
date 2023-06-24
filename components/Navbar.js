// import React from 'react';
// import Link from 'next/link';
// import localFont from 'next/font/local'

// export const Navbar = () => {
//     return (
//         <header>
//             <nav className="flex justify-around py-2 bg-slate-800 text-slate-200 items-center">
//                 <div id="logo">
//                     <Link href="/" className='text-3xl font-britney'>  <span className='flex gap-[0.1px]'><span>Alef</span>iya Abbas </span> </Link>
//                 </div>
//                 <div>
//                 </div>
//                 <ul className="flex gap-10 justify-around align-middle font-cabinet text-xl">
//                     <li>
//                         <Link href="/about"> About </Link>
//                     </li>
//                     <li>
//                         <Link href="/experience"> Experiences </Link>
//                     </li>
//                     <li>
//                         <Link href="/projects"> Projects </Link>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     );
// };

import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'
import { useEffect, useState } from 'react'

export default function Navbar() {
    const links = ['Home', 'About', 'Experience', 'Contact']
    const [Nav, setNav] = useState(false)

    useEffect(() => {
        let lastScrollTop = 0
        let navbar = document.getElementById('nav')
        window.addEventListener('scroll', () => {
            let scrollTop = window.scrollY || document.documentElement.scrollTop
            if (scrollTop > lastScrollTop) {
                navbar.style.top = '-100px'
            }
            else {
                navbar.style.top = '0'
            }
            lastScrollTop = scrollTop
        })
    }, [])

    const HorizontalNavList = ({ link }) => {
        return (
            <li className="px-4 cursor-pointer capitalize font-medium text-slate-200 hover:scale-105 duration-200">
                {link}
            </li>
        )
    }
    const VerticalNavList = ({ link }) => {
        return (
            <li className="px-4 capitalize py-6 text-4xl cursor-pointer">{link}</li>
        )
    }

    return (
        <nav id="nav" className='fixed w-full duration-700'>
            <div className="flex justify-end items-center w-full h-12 bg-zinc-800 text-slate-200 px-4">
                <ul className="hidden md:flex font-cabinet text-lg">
                    {links.map((link, index) => {
                        return <HorizontalNavList key={index} link={link} />
                    })}
                </ul>
                <div
                    onClick={() => {
                        setNav(!Nav)
                    }}
                    className="cursor-pointer md:hidden text-slate-200 pr-4 z-10"
                >
                    {Nav ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
                </div>
                {Nav && (
                    <ul className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-full bg-gradient-to-b from-zinc-500 to-zinc-900 text-slate-200 font-cabinet">
                        {links.map((link, index) => {
                            return <VerticalNavList key={index} link={link} />
                        })}
                    </ul>
                )}
            </div>
        </nav>
    )
}