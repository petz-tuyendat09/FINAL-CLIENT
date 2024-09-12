/* eslint-disable @next/next/no-img-element */
import NoImg from "@@/assets/images/no-img.jpg";
import { useState } from "react";
import { FormikProps } from "formik";

interface FormAddProductImageProps {
  inputId: string;
  formik: FormikProps<any>; // Type for Formik's context
}

export default function FormAddProductImage({
  inputId,
  formik,
}: FormAddProductImageProps) {
  const [imagePreview, setImagePreview] = useState(NoImg.src);
  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      formik.setFieldValue("productImages", [
        ...formik.values.productImages,
        file,
      ]);
    }
    console.log(formik.values);
  }
  return (
    <div>
      <div className="group relative space-y-2">
        <div className="absolute bottom-0 left-0 right-0 top-0 rounded-xl opacity-35 transition delay-75 duration-300 group-hover:bg-stone-700" />
        <label
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 cursor-pointer rounded-lg bg-primary px-4 py-2 opacity-0 transition delay-75 duration-300 group-hover:block group-hover:-translate-y-8 group-hover:opacity-100"
          htmlFor={inputId}
        >
          Select
        </label>
        <img
          className="rounded-xl"
          src={imagePreview}
          alt="Sản phẩm không có hình ảnh"
        />
      </div>
      <input
        onChange={handleImageChange}
        id={inputId}
        name="productImages"
        className="hidden"
        type="file"
      />
    </div>
  );
}
