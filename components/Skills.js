import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const languages = [
    { name: 'Python',          },
    { name: 'C Programming',   },
    { name: 'Java',            },
    { name: 'SQL',             },
    { name: 'Java Script',     },
    { name: 'HTML/CSS',        },
  ];
  const framework = [
    { name: 'Framework 1',  },
    { name: 'Framework 2',  },
    { name: 'Framework 3',  },
    { name: 'Framework 3',  },
    { name: 'Framework 3',  },
    { name: 'Framework 3',  },
  ];
  return (
    <>
      <div className="w-full h-auto  bg-zinc-800 font-cabinet py-4">
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 7 }}
          className="bg-slate-200 text-zinc-800 h-10 mt-4 text-2xl md:h-16 w-1/2 md:w-1/6 md:mt-6 md:text-4xl px-4">
          <span className="leading-10 md:leading-[64px]">Skill-Set</span>
        </motion.div>
        <motion.div
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 8 }}
          className="flex flex-col justify-evenly items-center md:items-stretch md:flex-row py-10 gap-y-10 text-center text-xl md:text-3xl">
          <div className="bg-slate-200 w-[80%] md:w-[40%] p-4 flex flex-col items-center">
            Languages
            <div className="grid grid-cols-2 p-8 gap-10">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className={`w-48 h-48  bg-zinc-800 relative border-2 border-zinc-800`}
                >
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    {language.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-200 w-[80%] md:w-[40%] p-4 flex flex-col items-center">
            Frameworks
            <div className="grid grid-cols-2 p-8 gap-10 ">
              {framework.map((framework, index) => (
                <div
                  key={index}
                  className={`bg-zinc-800 w-48 h-48 `}
                >
                  0{index + 1}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div >
    </>
  );
}
