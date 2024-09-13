/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import FormAddProductNormalInput from "./FormAddProductNormalInput";
import FormAddProductPrice from "./FormAddProductPrice";
import FormAddProductType from "./FormAddProductType";
import useAddProductForm from "./hook/useAddProductForm";
import { useLazyGetSubCategoriesQuery } from "@/libs/features/services/subcategories";
import { useGetCategoriesQuery } from "@/libs/features/services/categories";
import MyEditor from "./CKEditorComponent";
import FormAddProductThumbnail from "./FormAddProductThumbnail";

export default function FormAddProduct() {
  const { data: categories } = useGetCategoriesQuery();
  const [getSubCategories, { data: subCategories }] =
    useLazyGetSubCategoriesQuery();
  const { formik, animalType, handleAnimalTypeChange } = useAddProductForm();

  useEffect(() => {
    if (animalType) {
      getSubCategories({
        animalType: animalType,
        categoryId: formik.values.productCategory,
      });
    }
  }, [animalType, formik.values.productCategory, getSubCategories]);

  console.log(categories);

  return (
    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
      <div className="flex gap-8">
        <FormAddProductThumbnail formik={formik} />
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
                    {data.categoryName}
                  </option>
                ))}
              />
              <FormAddProductType
                visitedInput={formik.touched.animalType}
                onChangeEvent={handleAnimalTypeChange}
                defaultText="Chọn thú cưng"
                inputName="productCategory"
                optionValues={
                  formik.values.productCategory && (
                    <>
                      <option value="Chó">Chó</option>
                      <option value="Mèo">Mèo</option>
                    </>
                  )
                }
              />
              <FormAddProductType
                visitedInput={formik.touched.productSubcategory}
                errorMessage={formik.errors.productSubcategory}
                onChangeEvent={formik.handleChange}
                defaultText="Chọn danh mục con"
                inputName="productSubcategory"
                optionValues={subCategories?.map((data) => (
                  <option key={data._id} value={data._id}>
                    {data.subCategoryName}
                  </option>
                ))}
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
            {/* <MyEditor /> */}
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
