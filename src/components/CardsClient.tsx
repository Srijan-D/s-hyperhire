'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
const DynamicCarousel = dynamic(() => import('3d-react-carousal').then((mod) => mod.Carousel), { ssr: false });
import Image from 'next/image';
interface Profile {
  name: string;
  role: string;
  skills: string[];
  image: string;
  countryFlag: string;
}

interface CardsClientProps {
  sampleProfiles: Profile[];
}

const CardsClient: React.FC<CardsClientProps> = ({ sampleProfiles }) => {
  const cards = sampleProfiles.map((profile, index) => (
    <motion.div
      key={index}
      className=" items-center "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}>
      <div className="bg-white rounded-3xl shadow-lg p-6 text-center border border-gray-200 w-[300px]  h-[420px]">
        {/* Profile Card */}
        <div className="relative w-28 h-28 mx-auto mb-4">
          <div className="w-full h-full rounded-full overflow-hidden">
            <Image
              src={profile.image}
              alt={profile.name}
              width={112}
              height={112}
              className="w-full h-full object-cover"
            />
          </div>
          <Image
            src={profile.countryFlag}
            alt="Country flag"
            width={24}
            height={16}
            className="absolute bottom-0 right-0 mb-2 mr-2 z-50"
          />
        </div>
        <h3 className="font-black text-xl text-gray-800">{profile.name}</h3>
        <p className="text-[#4A77FF] text-base font-black mt-1">{profile.role}</p>
        <div className="mt-6 flex flex-col gap-1 justify-center items-center">
          {/* First two skills */}
          {profile.skills.slice(0, 2).map((skill: string, skillIndex: number) => (
            <div
              key={skillIndex}
              className="bg-white border border-[#C1C5CF] rounded-lg px-4 py-2 text-sm  text-[#5E626F] w-auto font-black">
              {skill}
            </div>
          ))}

          {/* Third row with the next two skills side by side */}
          <div className="flex gap-2 w-full justify-center">
            {profile.skills.slice(2, 4).map((skill: string, skillIndex: number) => (
              <div
                key={skillIndex + 2} // Adjust key to avoid duplication
                className="bg-white border border-[#C1C5CF] rounded-lg px-4 py-2 text-sm  text-[#5E626F] w-auto font-black">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  ));

  return (
    <section className="flex flex-col items-center w-full">
      {/* Pricing Badge */}
      <motion.div
        className="relative z-10 lg:mt-[-50px] mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}>
        <div className="flex justify-center items-center bg-[#E9F7EF] text-green-500 rounded-lg shadow-md px-4 py-2">
          <span className="px-2 rounded-full bg-green-400/50 font-bold">$</span>
          <span className="font-black">월 100만원</span>
        </div>
        <div className="absolute inset-x-0 bottom-[-5px] flex justify-center">
          <div className="w-3 h-3 bg-[#E9F7EF] rotate-45"></div>
        </div>
      </motion.div>

      <div className="carousel-container relative w-full max-w-2xl">
        <DynamicCarousel slides={cards} autoplay={true} arrows />
      </div>
    </section>
  );
};

export default CardsClient;
