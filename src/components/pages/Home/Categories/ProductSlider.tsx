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
    <div className="relative">
      <div className="grid grid-cols-4 gap-4">
        {data?.products.map((product, index) => (
          <div key={product._id}>
            {/* Kiểm tra vị trí sản phẩm thứ 3 để hiển thị div chứa chữ "test" */}
            {index === 2 && (
              <div className="relative h-full items-center justify-center text-[72px] font-bold uppercase text-black">
                <p>ưu đãi</p>
                <span className="text-primary">đặc biệt</span>
                <p>cho</p>
                <p>khách mới</p>
                <button className="absolute bottom-4 h-fit w-fit rounded-full bg-primary px-6 py-2 text-base text-white">
                  Đăng ký ngay
                </button>
              </div>
            )}

            {/* Hiển thị sản phẩm */}
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
