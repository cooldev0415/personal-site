import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "@/constants";
import { SectionWrapper } from "@/components";
import { fadeIn, textVariant } from '@/utils';
import Image from "next/image";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <Image
          src={icon}
          alt='web-development'
          className='w-[100px] h-[100px] object-cover rounded-md'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const AboutMe = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>Introduction</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
          Seasoned Senior Full Stack Engineer with over 8 years of experience in developing, and maintaining robust and scalable web
          applications. Proficient in front-end and back-end technologies, including various programming languages and frameworks. Adept
          at working in Agile environments, collaborating with cross-functional teams, and delivering high-quality software solutions.
          Strong background in database management, cloud services, and DevOps practices. Proven track record of leading projects from
          inception to deployment, optimizing performance, and enhancing user experience. Self-motivated and dedicated leader. Passionate about learning and
          constantly improving skills.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(AboutMe, "about");
