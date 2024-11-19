'use client';
import React from 'react';
import HeroHeader from '@/components/HeroHeader';
import Cards from '@/components/Cards';
import HeroFooter from '@/components/HeroFooter';
import { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
const Hero = () => {
  return (
    <div className="w-full h-full ">
      <div className="flex flex-col md:max-w-6xl lg:max-w-7xl mx-auto px-3 lg:px-0 space-y-12 pt-4 lg:pt-24 pb-12 sm:w-[90%] md:w-[90%] 2xl:w-full">
        <div className="flex flex-col lg:flex-row space-y-4 h">
          <HeroHeader />
          <Cards />
        </div>
        <ErrorBoundary fallback={<div>Loading...</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <HeroFooter />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Hero;
