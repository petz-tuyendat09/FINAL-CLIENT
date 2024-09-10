<<<<<<< HEAD
import React, { useRef, useState } from 'react';
=======
import React from 'react';
>>>>>>> 27ea2b71898f71d1b528b0ba3be043b4884d760e
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
<<<<<<< HEAD
import CustomNavigation from './CustomNavigation';
=======
>>>>>>> 27ea2b71898f71d1b528b0ba3be043b4884d760e
import { Swiper as SwiperType } from 'swiper/types';

interface SwiperWrapperProps {
    children: React.ReactNode;
    className?: string;
<<<<<<< HEAD
}

const CSwiper = ({ className, children }: SwiperWrapperProps) => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handleSwiper = (swiper: SwiperType) => {
    setSwiperInstance(swiper);
  };
    return (
        <div>
            <Swiper
                onSwiper={handleSwiper}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={false}
                className={className}
            >
                {children}
            </Swiper>
            <CustomNavigation swiperRef={swiperInstance} />
        </div>

=======
    handleSwiper: (swiper: SwiperType) => void; 
    navigationCustom?: React.ReactNode; 
    slidesPerview: number
}

const CSwiper: React.FC<SwiperWrapperProps> = ({ slidesPerview, className, children, handleSwiper, navigationCustom }) => {
    return (
        <div className={className}>
            <Swiper
                onSwiper={handleSwiper}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={25}
                slidesPerView={slidesPerview}
                navigation={false}
            >
                {children}
            </Swiper>
            {navigationCustom}
        </div>
>>>>>>> 27ea2b71898f71d1b528b0ba3be043b4884d760e
    );
};

export default CSwiper;
