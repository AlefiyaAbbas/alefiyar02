import Header from "./Header";
import Alef from "../public/images/alefiya.png"
import Image from 'next/image'

export default function About() {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-zinc-800 font-cabinet">
        <div className="bg-slate-200 w-11/12 h-auto py-8">
          <div className="flex flex-row justify-end">
            <Header />
          </div>
          <div className="flex flex-col  justify-center items-center m-2">
            <Image src={Alef} alt="alefiya" className="w-36 h-36 border-4 border-zinc-800 m-12 md:hidden" />
            <div className="md:flex">
              <div clasName="flex flex-row">
                <div className="bg-zinc-800 md:w-96 md:h-96 mx-20 mt-10" />
                <div className='bg-[url("/images/alefiya.png")] md:w-96 md:h-96 mx-24 -my-[370px]' />
              </div>
              <ul className="flex flex-col gap-4 text-zinc-800 pt-[340px] px-6 text-sm md:text-3xl text-justify md:p-10 md:leading-10">
                <li> Hello World, I&apos;m <b>Alefiya!</b> </li>
                <li> An aspiring engineer in <b>Computer Science</b> with a deep passion for <b>Artificial Intelligence and Machine Learning</b>.</li>
                <li>
                  Throughout my journey, I have acquired strong expertise in <b>Python, Java, SQL, React, and Next.js</b>, which have been instrumental in my exploration and development of innovative solutions.
                  Aside from my technical proficiency, I value <b>collaboration and teamwork</b>.
                </li>
                <li> Explore my portfolio to see my work. Let&apos;s <b>connect and create</b> something extraordinary!</li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}