'use client';

import React, { useEffect, useRef, useState } from 'react';
import { RiPieChartBoxLine } from 'react-icons/ri';
import { TbPhoto } from 'react-icons/tb';
import { IoCubeOutline } from 'react-icons/io5';
import { MdOutlineStars, MdOutlinePhoneInTalk } from 'react-icons/md';
import { motion } from 'framer-motion';
import { CardDataFromAPI, CardData, CheckboxData } from '../types/CardAndCheckboxTypes';

interface IconComponents {
  [key: string]: React.ComponentType;
}

const iconComponents: IconComponents = {
  RiPieChartBoxLine: RiPieChartBoxLine,
  TbPhoto: TbPhoto,
  IoCubeOutline: IoCubeOutline,
  MdOutlineStars: MdOutlineStars,
  MdOutlinePhoneInTalk: MdOutlinePhoneInTalk,
};

const HeroFooter: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [cardData, setCardData] = useState<CardData[]>([]);
  const [checkboxes, setCheckboxes] = useState<CheckboxData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cardsRes, checkboxesRes] = await Promise.all([fetch('/api/job-roles'), fetch('/api/checkboxes')]);

        if (!cardsRes.ok || !checkboxesRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const [cardsData, checkboxesData]: [CardDataFromAPI[], CheckboxData[]] = await Promise.all([
          cardsRes.json(),
          checkboxesRes.json(),
        ]);

        const cardsWithIcons: CardData[] = cardsData.map((card) => ({
          ...card,
          icon: iconComponents[card.icon] || null,
        }));

        setCardData([...cardsWithIcons, ...cardsWithIcons]);
        setCheckboxes(checkboxesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (cardData.length === 0) return;

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const cardWidth = 250;
    const totalScrollWidth = scrollContainer.scrollWidth / 2;

    const scrollStep = () => {
      if (!scrollContainer) return;

      scrollContainer.scrollBy({
        left: cardWidth,
        behavior: 'smooth',
      });

      setTimeout(() => {
        if (!scrollContainer) return;

        if (scrollContainer.scrollLeft >= totalScrollWidth) {
          scrollContainer.style.scrollBehavior = 'auto';
          scrollContainer.scrollLeft = scrollContainer.scrollLeft - totalScrollWidth;
          scrollContainer.style.scrollBehavior = 'smooth';
        }
      }, 500);
    };

    const scrollInterval = setInterval(scrollStep, 3000);

    return () => clearInterval(scrollInterval);
  }, [cardData]);

  return (
    <>
      <div className="block lg:hidden grid grid-cols-2 gap-4 text-white mb-4 pl-3 sm:pl-0">
        {checkboxes.map((checkbox, index) => (
          <div key={index} className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-[#2C599B] bg-[#E8ECFF] rounded-md">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-white text-base font-bold">{checkbox.label}</p>
          </div>
        ))}
      </div>

      {/* Call-to-action Text */}
      <p className="text-yellow-400 text-lg font-black mt-4 block lg:hidden pl-3 sm:pl-0 sm:w-full">
        개발자가 필요하신가요?
      </p>

      <div className="hidden lg:block w-full overflow-hidden mt-8">
        <div ref={scrollRef} className="flex space-x-4 overflow-x-scroll scrollbar-hide">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="min-w-[250px] bg-white/10 rounded-lg p-3 flex items-center justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}>
              <div className="flex items-center">
                <div className="icon-placeholder bg-white/50 rounded-md p-2 text-2xl text-white">
                  {/* {card.icon && React.createElement(card.icon)} */}
                  {card.icon !== null && <card.icon />}
                </div>
                <p className="text-white text-lg font-bold ml-4">{card.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroFooter;
