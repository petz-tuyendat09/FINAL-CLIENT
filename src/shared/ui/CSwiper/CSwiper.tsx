import React from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper as SwiperType } from 'swiper/types';

interface SwiperWrapperProps {
    children: React.ReactNode;
    className?: string;
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
                spaceBetween={20}
                slidesPerView={slidesPerview}
                navigation={false}
            >
                {children}
            </Swiper>
            {navigationCustom}
        </div>
    );
};

export default CSwiper;
