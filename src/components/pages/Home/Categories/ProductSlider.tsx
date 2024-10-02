import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductBox from "@/components/ui/ProductCard/ProductCard";
import { useGetProductsQuery } from "@/libs/features/services/product";
import { motion } from "framer-motion";
import { useCallback, useRef } from "react";
// CSS
import "swiper/css";

interface ProductSliderProps {
  filterOption?: object;
}

export default function ProductSlider({ filterOption }: ProductSliderProps) {
  const sliderRef = useRef(null);
  const swiper = useSwiper();

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const { data } = useGetProductsQuery({
    ...filterOption,
    limit: 25,
    page: 1,
  });
  console.log("Filter option:", { filterOption });
  console.log(data);

  return (
    <div className="slider-container relative">
      <Swiper ref={sliderRef} spaceBetween={20} slidesPerView={4}>
        {data?.products.map((product, index) => (
          <SwiperSlide key={product._id}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 * index }}
            >
              <ProductBox Product={product} />
            </motion.div>
          </SwiperSlide>
        ))}
        <button className="absolute right-0 top-1/2 z-10" onClick={handleNext}>
          Next
        </button>
        <button className="absolute left-0 top-1/2 z-10" onClick={handlePrev}>
          Prev
        </button>
      </Swiper>
    </div>
  );
}
