import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import Link from 'next/link';
export default function Certificate() {
  const options = ['Top', 'Python', 'Java', 'AI', 'Coursera', 'Accenture', 'HashCode'];

  const data = [
    {
      lang: 'Programming for Everybody ',
      platform: 'Python • Coursera',
      date: 'June 24, 2022',
      percent: '100',
      extlink: 'https://drive.google.com/file/d/1ilFNnNLFVnOqZCjrhnGKV_k6rLgourGq/view?usp=drive_link',
      category: ['Python', 'Coursera', 'Top'],
    },
    {
      lang: 'Getting Started with Data Analytics on AWS',
      platform: 'AWS • Coursera',
      date: 'June 23, 2022',
      percent: '100',
      extlink: 'https://drive.google.com/file/d/1VPoDmzQoZmehxcRDGaV7uBaO2DVqRudT/view?usp=drive_link',
      category: ['Top', 'Coursera'],
    },
    {
      lang: 'Digital Skills: Artificail Intelligence',
      platform: 'AI • Accenture',
      date: 'June 24, 2022',
      percent: '100',
      extlink: 'https://drive.google.com/file/d/1hEmNGPuDvklP3JkOreDrfkpFi2qBVSC2/view?usp=drive_link',
      category: ['AI', 'Accenture', 'Top'],
    },
    {
      lang: 'Python for problem solving - 1',
      platform: 'Python • CodeChef',
      date: 'June 11, 2023',
      percent: '100',
      extlink: 'https://drive.google.com/file/d/1omjy_HWWSVTzmnfF12CpyZZ4pvrlYxTr/view?usp=drive_link',
      category: ['Python'],
    },
    {
      lang: 'Python for problem solving - 2',
      platform: 'Python • CodeChef',
      date: 'June 12, 2023',
      percent: '100',
      extlink: 'https://drive.google.com/file/d/1hEmNGPuDvklP3JkOreDrfkpFi2qBVSC2/view?usp=drive_link',
      category: ['Python'],
    },
    {
      lang: 'Programming in Java',
      platform: 'Java • NPTEL',
      date: 'July - Oct, 2021',
      percent: '84 • Silver Elite',
      extlink: 'https://drive.google.com/file/d/1Y4wkQkyglRyAOCGBOBTG2U7017YO8V-c/view?usp=drive_link',
      category: ['Java', 'Top'],
    },
    {
      lang: 'Hash Code 2022',
      platform: 'Coding Competiton • Google',
      date: ' 2022',
      percent: '-',
      extlink: 'https://drive.google.com/file/d/1siaU6hx3EpbRpzX9rvKJDr-YQbFzPb7s/view?usp=drive_link',
      category: ['HashCode', 'Top'],
    },
  ];

  const [selected, setSelected] = useState('all');

  return (
    <div className="w-full h-auto bg-zinc-800 font-cabinet py-4">
      <motion.div
        // initial={{ x: -1000 }}
        // animate={{ x: 0 }}
        // transition={{ duration: 1, delay: 7 }}
        className="bg-slate-200 text-zinc-800 h-10 mt-4 text-2xl md:h-16 w-1/2 md:w-1/6 md:mt-6 md:text-4xl px-4"
      >
        <span className="leading-10 md:leading-[64px]">Certifications</span>
      </motion.div>

      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={` bg-zinc-700 focus:ring-gray-300 text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 text-slate-200 ${selected === option ? 'text-teal-300 bg-slate-200 border border-teal-300' : ''}`}
            onClick={() => setSelected(option)}
          >
            {option}
          </button>

        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-10">
        {data.map(({ category, lang, platform, date, percent, extlink }) => {
          if ( category.includes(selected)) {
            return (
              <div key={lang} className='h-auto w-auto bg-slate-200 p-2 text-zinc-800 customShadow'>
                <a href={extlink} target="_blank" rel="noopener noreferrer" className="font-semibold sm:text-2xl text-xl hover:text-teal-600">
                  {lang}
                </a>
                <div className='text-lg leading-[20.16px]'>
                  {platform}
                </div>
                <div className='text-base mt-7'>
                  Date: {date} <br />
                  Percent: {percent}
                </div>
              </div>
            );

          }
          return null;
        })}
      </div>
    </div>
  );
}
