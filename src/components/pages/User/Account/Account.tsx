"use client";
import { DateInput, Input, Card, CardBody, Button } from "@nextui-org/react";
import AddressInput from "./AddressInput";
import UserCard from "./UserCard";
import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();
  return (
    <main className="space-y-4">
      <UserCard />
      <Card className="flex-grow">
        <CardBody>
          <div>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold">Thông tin tài khoản</h1>
                <p>Chỉnh sửa thông tin tài khoản của bạn</p>
              </div>
              <button
                type="submit"
                className="rounded-full bg-primary px-6 py-2 text-white"
              >
                Lưu thay đổi
              </button>
            </div>
            <form className="space-y-4">
              <Input label="Họ và tên" />
              <DateInput label="Birth date" isRequired />
              <Input
                isDisabled
                value={session.data?.user.userEmail}
                label="Email"
              />
              <Input label="Số điện thoại" />
              <AddressInput />
            </form>
          </div>
        </CardBody>
      </Card>
    </main>
  );
}
