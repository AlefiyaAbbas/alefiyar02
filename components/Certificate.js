import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Certificate() {
  const options = ['Top', 'Python', 'Java', 'Coursera', 'Accenture', 'Cryptography', 'Others'];

  const data = [
    {
      lang: 'Hash Code 2022',
      platform: 'Coding Competition • Google',
      date: '2022',
      percent: '-',
      extlink: 'https://drive.google.com/file/d/1siaU6hx3EpbRpzX9rvKJDr-YQbFzPb7s/view?usp=drive_link',
      category: ['Top'],
    },
    {
      lang: 'Digital Skills: Artificail Intelligence',
      platform: 'AI • Accenture',
      date: 'May 19, 2023',
      percent: '100',
      extlink: 'https://drive.google.com/file/d/1hEmNGPuDvklP3JkOreDrfkpFi2qBVSC2/view?usp=drive_link',
      category: ['AI', 'Accenture', 'Top'],
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
      lang: 'Programming for Everybody ',
      platform: 'Python • Coursera',
      date: 'June 24, 2022',
      percent: '100',
      extlink: 'https://drive.google.com/file/d/1ilFNnNLFVnOqZCjrhnGKV_k6rLgourGq/view?usp=drive_link',
      category: ['Python', 'Coursera', 'Top'],
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
      extlink: 'https://drive.google.com/file/d/13RhOea_ajjcC72ZEAq1kCT-T3AtzKC2z/view?usp=drive_link',
      category: ['Top', 'Python'],
    },
    {
      lang: 'Python 3.4.3 Training',
      platform: 'Python • IIT Bombay: Spoken Tutorial',
      date: 'Mar 21, 2022',
      percent: '-',
      extlink: 'https://drive.google.com/file/d/1JQjzklxRs8LRBmfCumOoW6xg3ew1GFGn/view?usp=drive_link',
      category: ['Python', 'Others'],
    },
    {
      lang: 'Java Training',
      platform: 'Java • IIT Bombay: Spoken Tutorial',
      date: 'Nov 26, 2021',
      percent: '-',
      extlink: 'https://drive.google.com/file/d/15gBurXMlIGJStQHYO1xz5y5-p8RLUKz9/view?usp=drive_link',
      category: ['Java', 'Others'],
    },
    {
      lang: 'C Training',
      platform: 'C • IIT Bombay: Spoken Tutorial',
      date: 'June 23, 2021',
      percent: '-',
      extlink: 'https://drive.google.com/file/d/1a-HyzhLVjxXeNVQM6M6d89ETND3H4WO3/view?usp=drive_link',
      category: ['Others'],
    },
    {
      lang: 'PHP and MySQL Training',
      platform: 'PHP • MySQL • IIT Bombay: Spoken Tutorial',
      date: 'Oct 7, 2022',
      percent: '-',
      extlink: 'https://drive.google.com/file/d/1DTaRjHtDcBLUq_GoAAaqWlO7PF0tnYvh/view?usp=drive_link',
      category: ['Others'],
    },


    {
      lang: 'Cryptography with Python',
      platform: 'Python • Cryptography • Infosys',
      date: 'Feb 8, 2023',
      percent: '-',
      extlink: 'https://drive.google.com/file/d/1fSxH1M3QJzcBPM-bOpw8EWnQxXXxlxr8/view?usp=drive_link',
      category: ['Python', 'Cryptography'],
    },
    {
      lang: 'Ethical Hacker: Cryptography Attacks',
      platform: 'Cryptography • Infosys',
      date: ' Jan 28, 2023',
      percent: '-',
      extlink: 'https://drive.google.com/file/d/1QoSWIAtlOeC-sH3RpP1JuW-bqDU7ZdNk/view?usp=drive_link',
      category: ['Cryptography'],
    },
    {
      lang: 'Cryptography: Introduction to Cryptography Services',
      platform: 'Cryptography • Infosys',
      date: ' Jan 28, 2023',
      percent: '-',
      extlink: 'https://drive.google.com/file/d/1Wd7fcrAAmDEqYHTEQh2WBdkVtANbyp6Q/view?usp=drive_link',
      category: ['Cryptography'],
    },
    {
      lang: 'Securing Information using Cryptography',
      platform: 'Cryptography • Infosys',
      date: ' Feb 5, 2023',
      percent: '-',
      extlink: 'https://drive.google.com/file/d/1WY5AHlhbTiEGPLyOBqME2RamyWD_Vxtv/view?usp=drive_link',
      category: ['Cryptography'],
    },
  ];

  const [selected, setSelected] = useState('Top');

  return (
    <div className="w-full h-auto bg-zinc-800 font-cabinet p-4 pb-32">
      <motion.div
        // initial={{ x: -1000 }}
        // animate={{ x: 0 }}
        // transition={{ duration: 1, delay: 7 }}
        className="bg-slate-200 text-zinc-800 h-10 mt-4 text-2xl md:h-16 w-1/2 md:w-1/6 md:mt-6 md:text-4xl px-4 "
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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mx-10">
        {data.map(({ category, lang, platform, date, percent, extlink }) => {
          if (category.includes(selected)) {
            return (
              <div key={lang} className='h-auto w-auto bg-slate-200 p-2 text-zinc-800 customShadow'>
                <a href={extlink} target="_blank"  className="font-semibold sm:text-lg text-xl hover:text-teal-600">
                  {lang}
                </a>
                <div className='sm:text-base text-lg leading-[20.16px]'>
                  {platform}
                </div>
                <div className='text-base mt-7'>
                  {date} <br />
                  {percent}
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
