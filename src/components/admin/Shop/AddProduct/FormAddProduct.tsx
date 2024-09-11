/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import NoImg from "@@/assets/images/no-img.jpg";
import FormAddProductNormalInput from "./FormAddProductNormalInput";
import FormAddProductPrice from "./FormAddProductPrice";
import FormAddProductType from "./FormAddProductType";
import useAddProductForm from "./useAddProductForm";
import { useLazyGetSubCategoriesQuery } from "@/libs/features/services/subcategories";
import { useGetCategoriesQuery } from "@/libs/features/services/categories";

export default function FormAddProduct() {
  const { data: categories } = useGetCategoriesQuery();
  const [getSubCategories, { data: subCategories }] =
    useLazyGetSubCategoriesQuery();

  const [imagePreview, setImagePreview] = useState(NoImg.src);

  const { formik } = useAddProductForm();

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      formik.setFieldValue("productImage", file);
    }
  }

  function handleChangeCategory(event: React.ChangeEvent<HTMLSelectElement>) {
    // Get the selected option's text (innerText)
    const selectedOptionText = event.target.selectedOptions[0].innerText;

    // Fetch subcategories using the selected option's text
    getSubCategories(selectedOptionText);
  }

  console.log(categories);
  console.log("123");

  return (
    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
      <div className="flex gap-8">
        <div className="form-group bg-white p-4">
          <div>
            <h1 className="text-2xl">Product Image</h1>
            <div className="group relative space-y-2">
              <div className="absolute bottom-0 left-0 right-0 top-0 rounded-xl opacity-35 transition delay-75 duration-300 group-hover:bg-stone-700" />
              <label
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 cursor-pointer rounded-lg bg-primary px-4 py-2 opacity-0 transition delay-75 duration-300 group-hover:block group-hover:-translate-y-8 group-hover:opacity-100"
                htmlFor="product-img"
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
              id="product-img"
              name="productImage"
              className="hidden"
              type="file"
            />
          </div>
        </div>
        <div className="w-2/3 bg-white">
          <h1 className="border-1 border-b p-4">General Information</h1>
          <div className="space-y-4 p-4">
            <FormAddProductNormalInput
              inputType="text"
              // duplicatedMessage={duplicatedMessage}
              visitedInput={formik.touched.productName}
              label="Tên sản phẩm"
              onChangeEvent={formik.handleChange}
              inputName="productName"
              inputPlaceHolder="Nhập tên sản phẩm"
              onBlurEvent={formik.handleBlur}
              errorMessage={formik.errors.productName}
            />
            <div className="flex w-full gap-2">
              <FormAddProductType
                visitedInput={formik.touched.productCategory}
                errorMessage={formik.errors.productCategory}
                onChangeEvent={formik.handleChange}
                defaultText="Chọn danh mục"
                inputName="productCategory"
                optionValues={categories?.map((data) => (
                  <option key={data._id} value={data._id}>
                    {data.categoriesName}
                  </option>
                ))}
              />
              <FormAddProductType
                visitedInput={formik.touched.productSkintype}
                errorMessage={formik.errors.productSkintype}
                onChangeEvent={formik.handleChange}
                defaultText="Chọn danh mục con"
                inputName="productSkintype"
                // optionValues={skinType?.map((data) => (
                //   <option key={data._id} value={data._id}>
                //     {data.skinType}
                //   </option>
                // ))}
              />
            </div>
            <FormAddProductPrice
              formik={formik}
              errorMessage={formik.errors.productPrice}
              visitedInput={formik.touched.productPrice}
            />
            <FormAddProductNormalInput
              inputType="number"
              visitedInput={formik.touched.productQuantity}
              label="Nhập số lượng"
              onBlurEvent={formik.handleBlur}
              onChangeEvent={formik.handleChange}
              inputName="productQuantity"
              inputPlaceHolder="Nhập số lượng sản phẩm"
              errorMessage={formik.errors.productQuantity}
            />
            <button
              type="submit"
              className="ml-auto rounded-xl bg-primary px-4 py-2"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
