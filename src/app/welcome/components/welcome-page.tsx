import React from "react";
import { Hero } from "./hero";
import { Contact } from "./contact";
import { Navbar, StarsCanvas } from "@/components";

export const WelcomePage: React.FC = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <Navbar />
      <Hero />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  )
}