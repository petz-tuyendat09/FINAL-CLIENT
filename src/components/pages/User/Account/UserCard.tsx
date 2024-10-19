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
import ChangePasswordInput from "./ChangePasswordInput";

export default function App() {
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
              Nguyễn Phúc Thiện
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              phucthien@gmail.com
            </h5>
            <h5 className="text-[12px] tracking-tight text-default-400">
              500 điểm
            </h5>
          </div>
        </div>
      </CardHeader>
      <ChangePasswordInput />
    </Card>
  );
}
