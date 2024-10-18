import { useState } from "react";
import NoImg from "@@/assets/images/no-img.jpg";
import { FormikProps } from "formik";

interface ImageUploadProps {
  //   formik: FormikProps<any>;
  //   fieldToSetValue: string;
}

export default function usePreviewUploadImage(
  {
    //   formik,
    //   fieldToSetValue,
  }: ImageUploadProps,
) {
  const [imagePreview, setImagePreview] = useState(
    "https://nextui.org/avatars/avatar-1.png",
  );

  function handlePreviewImg(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  return {
    imagePreview,
    handlePreviewImg,
  };
}
