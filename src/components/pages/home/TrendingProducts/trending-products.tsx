import { useGetTrendingProductsQuery } from "@/libs/features/services/product";
import CSwiper from "@/shared/ui/CSwiper/CSwiper";
import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import CustomNavigation from "./custom-navigation";
import numeral from "numeral";
import { Icon } from "@iconify/react/dist/iconify.js";
import './index.css';
export const TrendingProducts = () => {
    const { data, error, isLoading } = useGetTrendingProductsQuery({});
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    const handleSwiper = (swiper: SwiperType) => {
        setSwiperInstance(swiper);
    };
    return (
        <div className="mt-[80px] px-[40px]">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-[36px] font-[700] text-[#3c3731]">
                    Trending Products
                </h1>
                <img src="../images/bone-toy.svg" width="80px" className="mt-[15px]" />
                <p className="text-[#958b7e] mt-[15px] text-[17px]">
                    Top-selling items and popular picks by our customers. Check them now!
                </p>
            </div>
            <div className="mt-[70px] px-[50px]">
                <CSwiper
                    handleSwiper={handleSwiper}
                    slidesPerview={4}
                    navigationCustom={<CustomNavigation swiperRef={swiperInstance} />}
                >
                    <div className="flex flex-row gap-[10px]">
                        {data?.slice(0, 8).map((item: any, i: any) => (
                            <div key={i}>
                                <SwiperSlide>
                                    <div className="bg-gray rounded-[10px] pb-[20px] hover:shadow-custom cursor-pointer">
                                        <div className="product-container relative overflow-x-hidden">
                                            <div>
                                                <img
                                                    src={
                                                        process.env.NEXT_PUBLIC_API_URL +
                                                        "public/images/products/" +
                                                        item.productImage
                                                    }
                                                    width="400px"
                                                    className="rounded-tl-[10px] rounded-tr-[10px]"
                                                />
                                            </div>
                                            <div className="pl-[20px]">
                                                <h2 className="text-[#958b7e] text-[19px] mt-[15px] mb-[10px]">{item.productName}</h2>
                                                <span className="text-[18px] text-yellow font-[500]">{numeral(item.productPrice).format("$0,")}</span>
                                            </div>
                                            <div className="buttons flex flex-col gap gap-[10px] absolute right-[15px] top-[10px]">
                                                <button className="bg-white shadow-custom w-[32px] h-[32px] flex justify-center items-center rounded-[50%]"><Icon icon="fluent:heart-16-filled" width={22} className="hover:text-red" /></button>
                                                <button className="bg-white hidden shadow-custom w-[32px] h-[32px] justify-center items-center rounded-[50%]"><Icon icon="weui:eyes-on-outlined" width={20} className="hover:text-red" /></button>
                                                <button className="bg-white hidden shadow-custom w-[32px] h-[32px] justify-center items-center rounded-[50%]"><Icon icon="fa6-solid:cart-plus" className="hover:text-red" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        ))}
                    </div>
                </CSwiper>
            </div>
        </div>
    );
};
