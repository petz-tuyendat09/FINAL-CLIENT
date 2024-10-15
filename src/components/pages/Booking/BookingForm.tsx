"use client";

import { Input, Tab, Tabs, DatePicker } from "@nextui-org/react";
import ServicesCard from "./ServicesCard";

export default function BookingForm() {
  return (
    <div className="w-1/2 border-r pb-8">
      <div className="mb-4 border-b border-t px-4">
        <h1 className="text-h1 font-semibold uppercase">Đặt lịch</h1>
      </div>
      <form action="">
        <div className="mb-4 border-b pb-4">
          <div className="space-y-4 px-4">
            <p>Thông tin liên hệ của bạn</p>
            <Input label="Họ và tên" />
            <Input label="Số điện thoại" />
            <Input label="Email" />
            <Input label="Địa chỉ" />
          </div>
        </div>

        <div className="mb-4 border-b pb-4">
          <div className="space-y-4 px-4">
            <p>Chọn dịch vụ cho bé</p>
            <Tabs>
              <Tab title="Chăm sóc móng">
                <ServicesCard />
              </Tab>
              <Tab title="Tắm - Chăm sóc lông">
                <ServicesCard />
              </Tab>
              <Tab title="Massage">
                <ServicesCard />
              </Tab>
              <Tab title="Combo">
                <ServicesCard />
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className="mb-4">
          <div className="space-y-4 px-4">
            <p>Chọn ngày thư giãn cho bé</p>
            <DatePicker />
            <p>Chọn giờ phù hợp với bé</p>
            <Tabs>
              <Tab title="8:00" />
              <Tab title="10:00" />
              <Tab title="12:00" />
              <Tab title="14:00" />
            </Tabs>
          </div>
        </div>
        <div className="px-4">
          <button
            type="button"
            className="mt-8 w-full rounded-full bg-primary py-4 font-bold text-white"
          >
            Đặt lịch ngay
          </button>
        </div>
      </form>
    </div>
  );
}
