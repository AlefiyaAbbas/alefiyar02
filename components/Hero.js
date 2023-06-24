import React from 'react'

export default function Hero() {
  return (
    <>
      <div className="w-full h-screen flex flex-row items-center bg-zinc-800 font-cabinet">
        <div className='bg-[url("/images/hero.png")] h-5/6 w-10/12 my-4'>
          <div className='flex flex-col justify-center bg-zinc-800 w-9/12 h-5/6 bg-opacity-95 my-12 px-10'>
            <div className='text-6xl md:text-9xl text-slate-200'>
              Alefiya Abbas.
            </div>
            <ul className='flex flex-col gap-4 text-2xl md:text-4xl text-slate-200 py-12'>
              <li>CS Engineer</li>
              <li>Software Developer</li>
              <li>AI  &  ML Enthusiastic</li>
            </ul>
            <button className='border-2 border-solid border-slate-200 text-slate-200 p-4 w-40 text-xl hover:bg-slate-300 hover:text-zinc-800 duration-200'>
              Let&apos;s Connect!
            </button>
          </div>
        </div>
      </div>
    </>
  )
}



