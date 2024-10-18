import { Card, CardBody, Input } from "@nextui-org/react";

export default function ChangePasswordInput() {
  return (
    <Card className="flex-grow">
      <CardBody>
        <div>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold">Đổi mật khẩu</h1>
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
            <Input label="Họ và tên" />
          </form>
        </div>
      </CardBody>
    </Card>
  );
}
