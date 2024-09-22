import { Swiper, SwiperSlide } from "swiper/react";
import ProductBox from "@/components/ui/ProductCard/ProductCard";
import { useGetProductsQuery } from "@/libs/features/services/product";

// CSS
import "swiper/css";

interface ProductSliderProps {
  categoryName: string;
}

export default function ProductSlider({ categoryName }: ProductSliderProps) {
  const { data } = useGetProductsQuery({ productCategory: categoryName });

  console.log(categoryName);

  console.log(data);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container w-3/4">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data?.map((product) => (
          <SwiperSlide key={product._id}>
            <ProductBox Product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
