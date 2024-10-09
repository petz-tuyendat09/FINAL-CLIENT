import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductBox from "@/components/ui/ProductCard/ProductCard";
import { useGetProductsQuery } from "@/libs/features/services/product";
import { motion } from "framer-motion";
import { useCallback, useRef } from "react";
import SwiperCore from "swiper";
// CSS
import "swiper/css";
import { Icon } from "@iconify/react/dist/iconify.js";

interface ProductSliderProps {
  filterOption?: object;
}

export default function ProductSlider({ filterOption }: ProductSliderProps) {
  const sliderRef = useRef<SwiperCore | null>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.slideNext();
  }, []);

  const { data } = useGetProductsQuery({
    ...filterOption,
    limit: 8,
    page: 1,
  });

  return (
    <div className="slider-container relative">
      <Swiper
        onSwiper={(swiper) => (sliderRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={4}
      >
        {data?.products?.map((product, index) => (
          <SwiperSlide key={product._id}>
            <motion.div
              className={`${index == 2 && "hidden"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 * index }}
            >
              <ProductBox Product={product} />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
