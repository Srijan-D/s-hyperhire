declare module '3d-react-carousal' {
  import React from 'react';

  interface CarouselProps {
    slides: React.ReactNode[];
    autoplay?: boolean;
    interval?: number;
    arrows?: boolean;
    arrowLeft?: React.ReactNode;
    arrowRight?: React.ReactNode;
  }

  export const Carousel: React.FC<CarouselProps>;
}
