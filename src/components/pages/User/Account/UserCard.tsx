import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Input,
} from "@nextui-org/react";
import usePreviewUploadImage from "./_hooks/usePreviewImage";
import { useSession } from "next-auth/react";
import ChangePasswordInput from "./ChangePasswordInput";

export default function App() {
  const session = useSession();
  const { imagePreview, handlePreviewImg } = usePreviewUploadImage({});
  return (
    <Card className="">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <div className="space-y-2">
            <Avatar
              isBordered
              className="mx-auto"
              radius="full"
              size="lg"
              src={imagePreview}
            />
            <Button>
              <label htmlFor="userImage">Sửa</label>
              <Input
                onChange={handlePreviewImg}
                type="file"
                className="hidden"
                id="userImage"
              />
            </Button>
          </div>
          <div className="flex flex-col items-start justify-center gap-1">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {session.data?.user.displayName || "Chưa có tên hiển thị"}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {session.data?.user.userEmail}
            </h5>
            <h5 className="text-[12px] tracking-tight text-default-400">
              Điểm: {session.data?.user.userPoint}
            </h5>
          </div>
        </div>
      </CardHeader>
      <ChangePasswordInput />
    </Card>
  );
}
