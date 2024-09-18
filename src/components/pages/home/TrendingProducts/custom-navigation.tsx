import React from 'react';
import { Swiper as SwiperType } from 'swiper/types';
import { Icon } from "@iconify/react/dist/iconify.js";
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
    <div className="relative flex flex-row gap-[10px] mt-[30px]">
      <button className="absolute left-[-70px] bottom-[250px] text-[#3c3731]" onClick={goPrev}><Icon icon="solar:alt-arrow-left-outline" width={35}/></button>
      <button className="absolute right-[-70px] bottom-[250px] text-[#3c3731]" onClick={goNext}><Icon icon="solar:alt-arrow-right-outline" width={35} /></button>
    </div>
  );
};

export default CustomNavigation;
