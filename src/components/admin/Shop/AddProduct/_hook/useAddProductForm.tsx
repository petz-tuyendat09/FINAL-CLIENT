/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useAddNewProductMutation } from "@/libs/features/services/product";
import { useRouter } from "next/navigation";
import { ModalProvider, useModal } from "../_store/ModalContext"; // Import the ModalProvider

interface errorsValues {
  productName: string;
  productThumbail: string;
  productImage: string;
  productPrice: string;
  salePercent: string;
  productQuantity: string;
  productCategory: string;
  productSubcategory: string;
  animalType: string;
  productDescription: string;
  productOption: string;
}

export default function useAddProductForm() {
  const { setModalText, setModalDisplay } = useModal();
  const [animalType, setAnimalType] = useState<string>("");
  const [duplicatedMessage, setDuplicatedMessage] = useState<
    string | undefined
  >();
  const router = useRouter();

  const handleAnimalTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const animalTypeSelected = e.target.value;
    setAnimalType(animalTypeSelected);
    formik.setFieldValue("animalType", animalTypeSelected);
    console.log(formik.values.animalType);
  };

  const [addNewProduct, { data: mutationResponse, error: mutationError }] =
    useAddNewProductMutation();

  const formik = useFormik({
    initialValues: {
      productName: "",
      productThumbnail: null,
      productImages: [],
      productPrice: 0,
      salePercent: 0,
      productQuantity: 0,
      productCategory: "",
      productSubcategory: "",
      animalType: "",
      productDescription: "",
      productOption: [],
      productDetailDescription: "",
    },
    onSubmit: (values) => {
      const formData = new FormData();

      Object.entries(values).forEach(([key, value]) => {
        if (key === "productImages" && Array.isArray(value)) {
          value.forEach((item: any, index) => {
            if (item instanceof File) {
              formData.append(`productImages`, item);
            }
          });
        } else if (key === "productOption" && Array.isArray(value)) {
          value.forEach((option, index) => {
            formData.append(`productOption[${index}]`, option);
          });
        } else if (typeof value === "number") {
          formData.append(key, value.toString());
        } else {
          formData.append(key, value as string);
        }
      });

      addNewProduct(formData);
    },
    validate: (values) => {
      let errors: Partial<errorsValues> = {};

      if (!values.productName) {
        errors.productName = "Required name";
      }
      if (!values.productQuantity || values.productQuantity == 0) {
        errors.productQuantity = "Required quantity";
      }
      if (values.productPrice === 0 || !values.productPrice) {
        errors.productPrice = "Required price";
      }
      if (values.productPrice <= 1000 || !values.productPrice) {
        errors.productPrice = "Invalid price";
      }
      if (!values.productCategory) {
        errors.productCategory = "Required";
      }
      if (!values.productSubcategory) {
        errors.productSubcategory = "Required";
      }
      if (values.salePercent < 0) {
        formik.setFieldValue("salePercent", 0);
        errors.salePercent = "Sale percent must be between 0 and 100";
      }

      if (values.salePercent > 100) {
        formik.setFieldValue("salePercent", 100);
      }

      if (!values.productOption || values.productOption.length === 0) {
        errors.productOption = "Vui lòng nhập ít nhất 1 tùy chọn sản phẩm";
      } else if (
        values.productOption.some((option: string) => option.trim() === "")
      ) {
        errors.productOption = "Tùy chọn không hợp lệ, không được để trống";
      }

      return errors;
    },
  });

  useEffect(() => {
    if (mutationError && "data" in mutationError) {
      setDuplicatedMessage((mutationError.data as any).message);
    }
    if (mutationResponse) {
      setModalDisplay(true); // Show modal on successful product addition
      setModalText("Thêm sản phẩm thành công quay về sau 3s");
    }
  }, [mutationError, mutationResponse]);

  useEffect(() => {
    if (formik.values.productName) {
      setDuplicatedMessage(undefined);
    }
  }, [formik.values.productName]);

  return {
    formik,
    animalType,
    handleAnimalTypeChange,
    duplicatedMessage,
  };
}
