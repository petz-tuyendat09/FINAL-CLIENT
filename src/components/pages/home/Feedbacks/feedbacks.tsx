import {
  CalendarIcon,
  CommentIcon,
  CorgyIcon,
  StarIcon,
  UserSmileIcon,
} from "@/shared/ui/icons";
import CSwiper from "@/shared/ui/CSwiper/CSwiper";
import CustomNavigation from "./custom-navigation";
import { useState } from "react";
import { Swiper as SwiperType } from "swiper/types";
import { SwiperSlide } from "swiper/react";
export const Feedbacks = () => {
  const overviews = [
    {
      icon: <UserSmileIcon width="70" />,
      quantity: "5,000+",
      content: "Khách hàng hài lòng",
    },
    {
      icon: <CorgyIcon width="80" />,
      quantity: "8,000+",
      content: "Bé được chăm sóc",
    },
    {
      icon: <CalendarIcon width="60" />,
      quantity: "5,000+",
      content: "Khách hàng hài lòng",
    },
  ];
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handleSwiper = (swiper: SwiperType) => {
    setSwiperInstance(swiper);
  };

  const feedbacks = [
    {
      stars: 5,
      content:
        "Lorem ipsum dolor sit ametrac ashixat consectetur. Morbi semperasa lectus tempus metus pellen",
      user: {
        avatar: "user1.png",
        name: "Phuc Thien",
      },
    },
    {
      stars: 4,
      content:
        "Lorem ipsum dolor sit ametrac ashixat consectetur. Morbi semperasa lectus tempus metus pellen",
      user: {
        avatar: "user2.png",
        name: "Phuc Long",
      },
    },
    {
      stars: 3,
      content:
        "Lorem ipsum dolor sit ametrac ashixat consectetur. Morbi semperasa lectus tempus metus pellen",
      user: {
        avatar: "user3.avif",
        name: "Phuc Minh",
      },
    },
  ];
  return (
    <div className="px-[40px] mt-[120px]">
      <div className="flex flex-row items-center gap-[10px]">
        <div className="w-[65%] flex flex-row justify-between">
          {overviews.map((item, i) => (
            <div className="bg-yellow w-[302px] p-[20px] rounded-[20px]" key={i}>
              <div className="h-[100px]">{item.icon}</div>
              <div className="text-[30px] font-[600]">{item.quantity}</div>
              <p className="text-[17px]">{item.content}</p>
            </div>
          ))}
        </div>
        <div className="w-[35%] bg-primary py-[27px] px-[60px] rounded-[20px]">
          <div className="rotate-180 flex justify-end">
            <CommentIcon />
          </div>
          <h1 className="text-[24px]">
            You Can Tell By The Kindess Of A Dog How A Human Should Be.
          </h1>
          <div className="flex justify-end">
            <CommentIcon />
          </div>
          <p>- Captain Beefheart</p>
        </div>
      </div>
      <div className="flex flex-row mt-[10px] gap-[10px]">
        <div className="w-[72%] bg-primary pb-[80px] pt-[30px] px-[40px] rounded-[20px] relative">
          <div>
            <h1 className="text-[23px]">OUR FEEDBACKS</h1>
            <div className="mt-[30px]">
              <CSwiper
                slidesPerview={2}
                navigationCustom={
                  <CustomNavigation swiperRef={swiperInstance} />
                }
                handleSwiper={handleSwiper}
              >
                {feedbacks.map((item, i) => (
                  <div key={i}>
                    <SwiperSlide>
                      <div className="rounded-[5px] bg-white py-[25px] px-[30px]">
                        <div className="flex flex-row gap-[3px]">
                          {Array.from({ length: item.stars }, (_, index) => (
                            <StarIcon key={index} />
                          ))}
                        </div>
                        <div className="mt-[10px] mb-[20px]">
                          "{item.content}"
                        </div>
                        <div className="flex flex-row items-center gap-[10px]">
                          <div>
                            <img
                              src={"./images/" + item.user.avatar}
                              width="60px"
                            />
                          </div>
                          <div>
                            <h1 className="font-[500]">{item.user.name}</h1>
                            <p className="text-[13px] text-[#747474]">
                              Khách hàng
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                ))}
              </CSwiper>
            </div>
          </div>
        </div>
        <div className="w-[28%]">
          <img src="./images/image.png" />
        </div>
      </div>
    </div>
  );
};
