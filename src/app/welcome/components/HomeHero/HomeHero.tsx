'use client'
import { motion } from "framer-motion";
import { ComputersCanvas, styles } from "@/components";
import Image from "next/image";
import BackgroudImage from '../../../../../public/background.gif';

export const HomeHero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto bg-hero-pattern bg-cover bg-no-repeat bg-center`}>
      <Image src={BackgroudImage} fill alt="" className="absolute object-cover opacity-10" priority />
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className='text-[#915EFF]'>Joseph Lingad</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full Stack Engineer
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};
