import LogoImage from "@@/assets/images/logoFinal.png";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Footer() {
  return (
    <>
      <div className="mt-[200px] bg-primary px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col justify-between xl:flex-row">
          <div>
            <h1 className="text-5xl font-bold">
              Tham gia bản tin <br /> PETZ để nhận <br /> thông tin khuyến mãi
            </h1>
            <div className="mt-8 flex">
              <input
                type="email"
                placeholder="Email của bạn"
                className="w-80 rounded-full px-4 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="ml-4 rounded-full bg-black bg-gradient-to-r px-4 text-white shadow-sm">
                <Icon icon="mingcute:arrow-right-line" className="size-6" />
              </button>
            </div>
            <div className="mt-8 flex items-center space-x-8">
              <a className="rounded-full border-1 p-2" href="#">
                <Icon icon="gg:facebook" className="size-6" />
              </a>
              <a className="rounded-full border-1 p-2" href="#">
                <Icon icon="ri:linkedin-fill" className="size-6" />
              </a>
              <a className="rounded-full border-1 p-2" href="#">
                <Icon className="size-6" icon="mdi:instagram" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-3 xl:w-1/2 xl:text-left">
            <div>
              <h2 className="text-lg text-gray-200">THÔNG TIN LIỆN HỆ</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#">
                    <span className="font-bold">Địa chỉ:</span> Lô 24, Khu Công
                    viên phần mềm Quang Trung, P. Tân Chánh Hiệp, Quận 12,
                    TP.HCM
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="font-bold">Email: </span>petz@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg text-gray-200">KHÁM PHÁ</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#">Trang chủ</a>
                </li>
                <li>
                  <a href="#">Cửa hàng</a>
                </li>
                <li>
                  <a href="#">Đặt lịch</a>
                </li>
                <li>
                  <a href="#">Tìm bạn</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg text-gray-200">ĐIỀU KHOẢN DỊCH VỤ</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#">Chính sách bảo mật</a>
                </li>
                <li>
                  <a href="#">Hoàn trả</a>
                </li>
                <li>
                  <a href="#">Giao hàng</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-y border-gray-200 py-6 text-center md:text-left">
          <p className="">&copy; PETZ. All Rights Reserved 2024</p>
          <div className="rounded-full bg-white p-4">
            <ResponsiveImage
              imageSrc={LogoImage}
              altImage="Logo"
              imageWidth={500}
              imageHeight={500}
            />
          </div>
          <div className="flex justify-center md:justify-between">
            <div className="flex items-center space-x-2">
              <a href="#" className="hover:text-gray-700">
                Created by
              </a>
              <span className="font-semibold">PETZ</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
