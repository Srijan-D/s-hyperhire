'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroHeader = () => {
  const [bgColor, setBgColor] = useState('#fff');

  useEffect(() => {
    const updateBgColor = () => {
      if (window.innerWidth < 640) {
        setBgColor('#8BC4FF');
      } else {
        setBgColor('#fff');
      }
    };

    updateBgColor();

    window.addEventListener('resize', updateBgColor);

    return () => window.removeEventListener('resize', updateBgColor);
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto space-y-6 w-[95%] sm:w-full">
      {/* Full-time, Part-time Tagline */}
      <motion.div
        className="flex sm:justify-start relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}>
        <span
          className="bg-white font-black py-1 px-3 rounded-lg text-lg sm:text-cyan-400"
          style={{ backgroundColor: bgColor }}>
          풀타임, 파트타임
        </span>
        <div className="absolute bottom-[-4px] left-[20px] flex justify-center z-0 ">
          <div className="w-3 h-3 bg-[#8BC4FF] sm:bg-white rotate-45"></div>
        </div>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold leading-snug mt-4 text-left text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}>
        최고의 실력을 가진 <br />
        외국인 인재를 찾고 계신가요?
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="mt-4 text-lg md:text-2xl text-left text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}>
        <span className="hidden md:block text-xl md:text-2xl font-black">
          법률 및 인사관리 부담없이 1 <br />
          주일 이내에 원격으로 채용해보세요.
        </span>
      </motion.p>
      <motion.p
        className="hidden md:block text-lg text-left text-white underline font-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        style={{ textDecorationThickness: '0.8px' }}>
        개발자가 필요하신가요?
      </motion.p>

      {/* Large screen only section */}
      <motion.div className="hidden lg:block ">
        {/* 3-Column Layout */}
        <motion.div
          className="grid grid-cols-3 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}>
          {/* Column 1 */}
          <div className="p-4 max-w-sm ml-[-15px] items-start justify-start">
            <div className="border-t border-white block w-28"></div>

            <p className="font-black mt-4 ">평균 월 120만원</p>
            <p className="text-sm mt-2 font-black opacity-80">
              임금은 해당 국가를 기 <br /> 준으로 계산합니다.
            </p>
          </div>

          {/* Column 2 */}
          <div className="p-4 max-w-sm ml-[-15px] items-start justify-start">
            <div className="border-t border-white block w-28"></div>

            <p className="font-black mt-4">최대 3회 인력교체</p>
            <p className="text-sm mt-2 font-black opacity-80">
              막상 채용해보니 맞지 않<br />
              아도 걱정하지 마세요.
            </p>
          </div>

          {/* Column 3 */}
          <div className="p-4 max-w-sm ml-[-15px] items-start justify-start">
            <div className="border-t border-white block w-28"></div>

            <p className="font-black mt-4">평균 3일, 최대 10일</p>
            <p className="text-sm mt-2 font-black opacity-80">
              급하게 사람이 필요한 경<br />
              우에도 빠른 채용이 가능
              <br />
              합니다.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroHeader;
