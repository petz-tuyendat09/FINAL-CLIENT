/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { FormikProps } from "formik";
import usePreviewUploadImage from "../hook/usePreviewUploadImage";
import FormAddProductImage from "./FormAddProductImage";
import { Icon } from "@iconify/react/dist/iconify.js";

interface FormAddProductThumbnailProps {
  formik: FormikProps<any>;
}

export default function FormAddProductThumbnail({
  formik,
}: FormAddProductThumbnailProps) {
  const { imagePreview, handlePreviewImg } = usePreviewUploadImage({
    formik: formik,
    fieldToSetValue: "productThumbnail",
  });

  const handleAddImage = () => {
    // Thêm một object trống vào mảng productImages trong Formik
    formik.setFieldValue("productImages", [
      ...formik.values.productImages,
      {}, // Thêm một object mới cho hình ảnh
    ]);
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...formik.values.productImages];
    updatedImages.splice(index, 1);
    formik.setFieldValue("productImages", updatedImages);
  };

  return (
    <div className="form-group bg-gray-50 w-2/4 rounded-[20px] p-4">
      <h1 className="text-xl font-bold">Thêm hình</h1>
      <div>
        <div className="group relative space-y-2">
          <div className="rounded-xl absolute bottom-0 left-0 right-0 top-0 opacity-35 transition delay-75 duration-300 group-hover:bg-stone-700" />
          <label
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 cursor-pointer rounded-lg bg-primary px-4 py-2 opacity-0 transition delay-75 duration-300 group-hover:block group-hover:-translate-y-8 group-hover:opacity-100"
            htmlFor="productThumbnail"
          >
            Select
          </label>
          <img
            className="rounded-xl w-full"
            src={imagePreview}
            alt="Sản phẩm không có hình ảnh"
          />
        </div>
        <input
          onChange={handlePreviewImg}
          id="productThumbnail"
          name="productThumbnail"
          className="hidden"
          type="file"
        />
      </div>

      {/* Thêm các input cho hình ảnh sản phẩm */}
      <div className="mt-4 flex flex-wrap gap-4">
        {formik.values.productImages.map((_, index) => (
          <div key={index} className="relative w-[48%]">
            <FormAddProductImage
              inputName={`productImages[${index}]`}
              inputId={`product-image-${index}`}
              index={index}
              formik={formik}
            />
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full bg-white p-2 text-red-500 shadow-md"
              onClick={() => handleRemoveImage(index)}
            >
              <Icon className="size-3" icon="streamline:delete-1-solid" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddImage}
          className="mt-2 w-full rounded-md bg-black p-2 text-white"
        >
          Thêm hình ảnh
        </button>
      </div>
    </div>
  );
}
