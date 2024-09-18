"use client"
import { useTranslations } from "next-intl";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { SwiperSlide } from "swiper/react";
import CSwiper from "@/shared/ui/CSwiper/CSwiper";
import { Booking } from "@/components/pages/home/Booking/booking";
import { CommentIcon, SendIcon, StarIcon } from "@/shared/ui/icons";
import { Products } from "@/components/pages/home/Products/products";
import { Feedbacks } from "@/components/pages/home/Feedbacks/feedbacks";
import { Swiper as SwiperType } from 'swiper/types';
import { useState } from "react";
import CustomNavigation from "@/shared/ui/CSwiper/CustomNavigation";
import { About } from "@/components/pages/home/About/about";
import { TrendingProducts } from "@/components/pages/home/TrendingProducts/trending-products";
export default function Index() {
    const t = useTranslations('home');
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    const handleSwiper = (swiper: SwiperType) => {
        setSwiperInstance(swiper);
    };
    return (
        <div className="mb-[50px]">
            <div className="px-[40px] mt-[50px]">
                <div className="flex flex-row justify-between">
                    <div>
                        <button className="bg-secondary flex items-center justify-center rounded-[20px] px-[30px] py-[5px] text-[15px]">{t('booking')}</button>
                    </div>
                    <div className="leading-[50px] ml-[60px]">
                        <div className="flex flex-row gap-[10px] items-center">
                            <h1 className="text-[40px]">Dịch vụ</h1>
                            <img src="./images/paw.png" width="20px" />
                            <h1 className="text-[40px]">Sản phẩm</h1>
                        </div>
                        <div className="ml-[20px]">
                            <h1 className="text-[40px]">& Chăm sóc thú cưng</h1>
                        </div>
                    </div>

                    <div>
                        <p>Đối tác đáng tin cậy cho thú cưng</p>
                        <p className="text-right">của bạn</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mt-[30px]">
                <div className="relative">
                    <img src="./images/home-bg.png" />
                    <div className="absolute top-[20%] left-[-20%] shadow-custom w-[230px] rounded-[20px] px-[20px] py-[15px] bg-white">
                        <CSwiper slidesPerview={1} navigationCustom={<CustomNavigation swiperRef={swiperInstance} />} handleSwiper={handleSwiper}>
                            <SwiperSlide>
                                <div>
                                    <div className="flex flex-row items-center gap-[10px]">
                                        <img src="./images/user1.png" />
                                        <div>
                                            <h1 className="text-[17px]">Phúc Thiện</h1>
                                            <p className="text-[14px] text-gray-500">Khách hàng</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center mt-[10px] gap-[4px]">
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                    </div>
                                    <div className="w-[180px] mt-[10px]">
                                        <p>Dịch vụ tốt, nhân viên nhiệt tình!</p>
                                    </div>
                                    <div className="flex justify-end items-end">
                                        <CommentIcon />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="flex flex-row items-center gap-[10px]">
                                        <img src="./images/user3.avif" width="70px" />
                                        <div>
                                            <h1 className="text-[17px]">Thu Nguyệt</h1>
                                            <p className="text-[14px] text-gray-500">Khách hàng</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center mt-[10px] gap-[4px]">
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                    </div>
                                    <div className="w-[180px] mt-[10px]">
                                        <p>Cún cưng của tôi rất hài lòng!</p>
                                    </div>
                                    <div className="flex justify-end items-end">
                                        <CommentIcon />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </CSwiper>
                    </div>
                    <div className="shadow-custom w-[200px] rounded-[20px] px-[20px] py-[20px] absolute right-[-10%] top-[2%] bg-white">
                        <div className="flex flex-row gap-[50px]">
                            <img src="./images/user2.png" />
                            <div className="bg-black w-[35px] h-[35px] flex items-center justify-center rounded-[50%]">
                                <SendIcon />
                            </div>
                        </div>
                        <div className="w-[150px] leading-[28px] mt-[20px]">
                            <h1 className="text-[22px]">{t('howToBooking')}</h1>
                            <p className="text-gray-500 mt-[7px]">{t('contact')}</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-custom rounded-[50%] w-[130px] h-[130px] flex items-center justify-center absolute bottom-[10%] right-[-30px]">
                        <div className="flex flex-col items-center justify-center">
                            <ArrowOutwardIcon />
                            <p className="font-[500] text-[14px]">{t('discover')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Booking />
            <Products />
            <Feedbacks />
            <About />
            <TrendingProducts />
        </div>
    );
}