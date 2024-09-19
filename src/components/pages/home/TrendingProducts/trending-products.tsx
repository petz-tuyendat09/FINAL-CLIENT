import { useGetTrendingProductsQuery } from "@/libs/features/services/product";
import CSwiper from "@/shared/ui/CSwiper/CSwiper";
import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import CustomNavigation from "./custom-navigation";
import numeral from "numeral";
import { Icon } from "@iconify/react/dist/iconify.js";
import './index.css';
import Image from "next/image";
import { Button, useDisclosure } from "@nextui-org/react";
import DetailModal from "../ModalDetails/modal-details";
import { Product } from "@/types/Product";
export const TrendingProducts = () => {
    const { data, error, isLoading } = useGetTrendingProductsQuery({});
    const [selectedData, setSelectedData] = useState<Product[]>([]);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    const handleSwiper = (swiper: SwiperType) => {
        setSwiperInstance(swiper);
    };
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
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
                    autoplay={false}
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
                                                <Image
                                                    alt=""
                                                    src={item.productThumbnail}
                                                    width={470}
                                                    height={300}
                                                    className="rounded-tl-[10px] rounded-tr-[10px]"
                                                />
                                            </div>
                                            <div className="pl-[20px]">
                                                <h2 className="text-[#958b7e] text-[19px] mt-[15px] mb-[10px]">{item.productName}</h2>
                                                <span className="text-[18px] text-yellow font-[500]">{numeral(item.productPrice).format("$0,")}</span>
                                            </div>
                                            <div className="buttons flex flex-col gap gap-[10px] absolute right-[15px] top-[10px]">
                                                <button className="bg-white shadow-custom w-[32px] h-[32px] flex justify-center items-center rounded-[50%] hover:bg-custom-red hover:text-white"><Icon icon="fluent:heart-16-filled" width={22} className="hover:text-white" /></button>
                                                <Button onClick={() => setSelectedData(item)} onPress={onOpen} className="bg-white shadow-custom opacity-0 min-w-0 p-0 w-[32px] h-[32px] flex justify-center items-center rounded-[50%] hover:bg-custom-red hover:text-white"><Icon icon="weui:eyes-on-outlined" width={20}  className="hover:text-white" /></Button>
                                                <button className="bg-white shadow-custom opacity-0 w-[32px] h-[32px] flex justify-center items-center rounded-[50%] hover:bg-custom-red hover:text-white"><Icon icon="fa6-solid:cart-plus" className="hover:text-white" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        ))}
                    </div>
                </CSwiper>
            </div>
            <DetailModal selectedData={selectedData} isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} />
        </div>
    );
};
