import React from 'react'
import Image from 'next/image'
import HeroImg from "../public/images/hero.png" 

export default function Hero() {
    return (
        <>
            <div className="flex flex-row items-center min-h-screen w-screen py-2 bg-zinc-800">
                <div className='bg-gray-200 absolute inset-x-20 bottom-0 h-10 md:h-1/2 md:w-16 md:left-0 md:inset-y-1/4'>
                </div>
                <div className='bg-gray-200 absolute h-5/6 w-10/12 md:w-11/12 md:right-0 transform transition duration-700'>
                    <Image src={HeroImg} alt="hero" className='bg-cover w-full h-full z-20 '  />
                    <div className='bg-zinc-800 absolute w-10/12 md:w-9/12 right-0 inset-y-12 md:bg-opacity-95'>
                        <div className='w-full h-full p-12 md:px-20 text-7xl md:text-9xl text-slate-200 font-cabinet'>
                            Alefiya Abbas.
                            <div className=' text-3xl md:text-4xl text-slate-200 font-cabinet py-8'>
                                <ul>
                                    <li>CS Engineer</li>
                                    <li className='py-4'>Software Developer</li>
                                    <li >AI  &  ML Enthusiastic</li>
                                </ul>
                            </div>
                            <button className='border border-solid border-slate-200 text-slate-200 p-4 font-cabinet text-xl hover:bg-slate-300 hover:text-zinc-800 duration-200'>
                                Let&apos;s Connect!
                            </button>                   
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



