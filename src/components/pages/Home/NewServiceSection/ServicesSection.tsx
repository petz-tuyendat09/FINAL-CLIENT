"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

const services = [
  {
    title: "Chăm sóc móng",
    items: [
      "Chăm sóc móng chuyên nghiệp, an toàn và nhẹ nhàng cho bé.",
      "Loại bỏ móng thừa, giảm nguy cơ chấn thương.",
      "Chăm sóc toàn diện cho móng, giữ móng khỏe mạnh.",
      "Trải nghiệm cắt tỉa móng thoải mái, không gây căng thẳng.",
    ],
  },
  {
    title: "Tắm - Vệ sinh",
    items: [
      "Tắm sạch sẽ, loại bỏ bụi bẩn và mùi hôi.",
      "Sử dụng sản phẩm dịu nhẹ, phù hợp cho bé.",
      "Giữ lông sáng bóng, mềm mượt sau mỗi lần tắm.",
      "Vệ sinh toàn diện, mang lại cảm giác bồng bềnh.",
    ],
  },
  {
    title: "Tỉa lông",
    items: [
      "Tỉa lông theo kiểu dáng yêu thích của bạn.",
      "Tạo kiểu lông đẹp, phù hợp và gọn gàng.",
      "Lông được cắt tỉa đều đặn, tránh rối lông.",
      "Chăm sóc lông kỹ lưỡng, giúp bé luôn dễ thương.",
    ],
  },
  {
    title: "Massage",
    items: [
      "Massage thư giãn, giảm căng thẳng cho bé.",
      "Kỹ thuật massage đặc biệt, giúp bé thư giãn.",
      "Tăng cường tuần hoàn máu, hỗ trợ sức khỏe bé.",
      "Giúp bé cảm thấy thoải mái, yêu thích.",
    ],
  },
];

export default function ServicesSection() {
  const triggerRef = useRef(null);

  const boxesRef = useRef([]); // Mảng chứa các ref cho mỗi box màu trắng

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(boxesRef.current, {
      y: "0%",
      opacity: 1,
      duration: 1,
      stagger: 0.4,
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top 30%",
        end: "bottom 70%",
      },
    });
  }, []);

  return (
    <div className="pin-section">
      <div ref={triggerRef} className="h-[300vh]">
        <div className="sticky top-0 h-[100vh]">
          <div>
            <div className="mb-4 flex justify-center gap-[300px]">
              <h1 className="text-display">Dịch vụ của PETZ</h1>
              <p className="max-w-[500px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione deleniti adipisci in, vel rem laudantium eveniet dolores
                error numquam itaque cumque quos quia minus, dicta maxime alias
                beatae consequatur voluptate quis molestias veniam eos possimus.
              </p>
            </div>
            <div className="h-[900px] bg-services-image">
              <div className="flex h-full">
                {services.map((service, index) => (
                  <div
                    key={index}
                    ref={(el: any) => ((boxesRef as any).current[index] = el)}
                    className="service-box h-full w-1/4 translate-y-full border border-[#dadada] bg-white p-4 duration-500 dark:border-none dark:bg-[#0d0d0d]"
                  >
                    <h2 className="mb-4 text-h3">{service.title}</h2>
                    {service.items.map((item, index) => (
                      <div className="border-b py-4" key={index}>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
