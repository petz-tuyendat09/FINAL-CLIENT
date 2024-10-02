/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import FormAddProductNormalInput from "./FormAddProductNormalInput";
import FormAddProductPrice from "./PriceAndStock/FormAddProductPrice";
import FormAddProductType from "./FormAddProductType";
import useAddProductForm from "./hook/useAddProductForm";
import { useLazyGetSubCategoriesQuery } from "@/libs/features/services/subcategories";
import { useGetCategoriesQuery } from "@/libs/features/services/categories";
import MyEditor from "./CKEditorComponent";
import FormAddProductThumbnail from "./ProductImage/FormAddProductThumbnail";
import GerneralInformation from "./GerneralInfor/GerneralInformation";

export default function FormAddProduct() {
  const { data: categories } = useGetCategoriesQuery("");
  const [getSubCategories, { data: subCategories }] =
    useLazyGetSubCategoriesQuery();
  const { formik, animalType, handleAnimalTypeChange, duplicatedMessage } =
    useAddProductForm();

  useEffect(() => {
    if (animalType) {
      getSubCategories({
        animalType: animalType,
        categoryId: formik.values.productCategory,
      });
    }
  }, [animalType, formik.values.productCategory, getSubCategories]);

  return (
    <>
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <div className="flex gap-8">
          <FormAddProductThumbnail formik={formik} />
          <div className="w-3/4">
            <GerneralInformation
              formik={formik}
              duplicatedMessage={duplicatedMessage}
            />
            <div className="flex gap-4">
              <div className="bg-gray-100 w-1/2 rounded-[20px] p-4">
                <FormAddProductPrice
                  formik={formik}
                  errorMessage={formik.errors.productPrice}
                  visitedInput={formik.touched.productPrice}
                />
              </div>

              <div className="bg-gray-100 h-40 w-1/2"></div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

{
  /* <FormAddProductType
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
                  inputName="animalType"
                  optionValues={
                    formik.values.productCategory && (
                      <>
                        <option value="Chó">Chó</option>
                        <option value="Mèo">Mèo</option>
                      </>
                    )
                  }
                /> */
}
{
  /* <FormAddProductType
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
                /> */
}
