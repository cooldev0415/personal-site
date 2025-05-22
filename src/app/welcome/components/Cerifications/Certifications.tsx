'use client'
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '@/components';
import { SectionWrapper } from '@/components';
import { fadeIn, textVariant } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { certifications, ICertification } from '@/constants';

const CertificationCard = ({ certification, index }: { certification: ICertification; index: number }) => {
  useEffect(() => {
    if (certification.embedCode) {
      const stylesheet = "https://www.testdome.com/content/certificates/embed.css";
      const link = document.createElement("link");
      link.href = stylesheet;
      link.type = "text/css";
      link.rel = "stylesheet";
      link.media = "screen,print";
      document.head.appendChild(link);
    }
  }, [certification.embedCode]);

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="bg-tertiary p-6 rounded-xl w-full sm:w-[360px]"
    >
      <div className="flex flex-col items-center">
        <h3 className="text-white text-[20px] font-bold mb-2">{certification.title}</h3>
        <div className="flex items-center gap-1 mb-4">
          <Image
            src="https://www.testdome.com/webapp/dist/assets/primary.svg-9xmsfn8i.svg"
            alt="TestDome Logo"
            width={100}
            height={50}
            className="object-contain"
          />
          <span className="text-[#d1a215] text-[12px] font-medium">{certification.ranking}</span>
        </div>
        {/* Embedded Certificate */}
        <div className="w-full flex items-center justify-center bg-black-100 p-4 rounded-lg aspect-video overflow-hidden">
          <div
            className="transform scale-[0.85] hover:scale-[0.9] transition-transform duration-300"
            dangerouslySetInnerHTML={{ __html: certification.embedCode }}
          />
        </div>

        {/* Verify Button */}
        <Link
          href={certification.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full text-center text-gray-400 underline text-[14px]"
        >
          Verify Certificate
        </Link>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant(0.2)}>
        <p className={styles.sectionSubText}>My Professional Certifications</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {certifications.map((certification, index) => (
          <CertificationCard
            key={`certification-${index}`}
            index={index}
            certification={certification}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
