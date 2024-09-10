import React, { useRef, useState } from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CustomNavigation from './CustomNavigation';
import { Swiper as SwiperType } from 'swiper/types';

interface SwiperWrapperProps {
    children: React.ReactNode;
    className?: string;
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

    );
};

export default CSwiper;
