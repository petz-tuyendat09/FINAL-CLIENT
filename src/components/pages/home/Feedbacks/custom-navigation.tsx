import React from 'react';
import { Swiper as SwiperType } from 'swiper/types';
import { ArrowRight } from '@/shared/ui/icons';
interface CustomNavigationProps {
  swiperRef: SwiperType | null;
}

const CustomNavigation: React.FC<CustomNavigationProps> = ({ swiperRef }) => {
  const goNext = () => {
    swiperRef?.slideNext();
  };

  const goPrev = () => {
    swiperRef?.slidePrev();
  };

  return (
    <div className="custom-navigation absolute flex flex-row gap-[10px] mt-[30px] top-0 right-[40px]">
      <button onClick={goPrev} className=""><ArrowRight /></button>
      <button onClick={goNext} className="rotate-180"><ArrowRight /></button>
    </div>
  );
};

export default CustomNavigation;
