import React from 'react';
import { Swiper as SwiperType } from 'swiper/types';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./index.css";
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
    <div className="custom-navigation absolute flex flex-row gap-[10px] mt-[30px]">
      <button onClick={goPrev} className="rounded-[50%] prev-button bg-white"><ChevronLeftIcon className="prev-icon" /></button>
      <button onClick={goNext} className="rounded-[50%] next-button bg-white"><KeyboardArrowRightIcon className="next-icon" /></button>
    </div>
  );
};

export default CustomNavigation;
