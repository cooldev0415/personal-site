'use client'
import React from "react";
import { HomeHero } from "./HomeHero";
import { ContactUs } from "./ContactUs";
import { Certifications } from "./Cerifications";
import { Header, StarsCanvas } from "@/components";
import AboutMe from "./AboutMe/AboutMe";

export const WelcomePage: React.FC = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <Header />
      <HomeHero />
      <AboutMe />
      <Certifications />
      <div className='relative z-0'>
        <ContactUs />
        <StarsCanvas />
      </div>
    </div>
  )
}