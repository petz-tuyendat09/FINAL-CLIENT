// useEditProductForm.tsx
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import {
  useEditProductMutation,
  useGetProductsQuery,
} from "@/libs/features/services/product";
import { useRouter } from "next/router"; // Use 'next/router' instead of 'next/navigation'

interface ErrorsValues {
  productName?: string;
  productThumbnail?: string;
  productImage?: string;
  productPrice?: string;
  salePercent?: string;
  productQuantity?: string;
  productCategory?: string;
  productSubcategory?: string;
  animalType?: string;
  productDescription?: string;
  productOption?: string;
  productDetailDescription?: string;
}

export default function useEditProductForm({ slug }: { slug: string }) {
  const { data: productBySlug } = useGetProductsQuery({ productSlug: slug });
  const [animalType, setAnimalType] = useState<string>("");
  const [editProduct, { data, error: mutationError }] =
    useEditProductMutation();
  const [duplicatedMessage, setDuplicatedMessage] = useState();

  // const router = useRouter();

  // Prepare initial values
  const initialValues = productBySlug?.products?.[0]
    ? {
        productId: productBySlug.products[0]._id || "",
        productName: productBySlug.products[0].productName || "",
        productThumbnail: productBySlug.products[0].productThumbnail || [],
        productImages: productBySlug.products[0].productImages || [],
        productPrice: productBySlug.products[0].productPrice || 0,
        salePercent: productBySlug.products[0].salePercent || 0,
        productQuantity: productBySlug.products[0].productQuantity || 0,
        productCategory: productBySlug.products[0].productCategory || "",
        productSubcategory: productBySlug.products[0].productSubCategory || "",
        animalType: productBySlug.products[0].animalType || "",
        productDescription: productBySlug.products[0].productDescription || "",
        productOption: productBySlug.products[0].productOption || [],
        productDetailDescription:
          productBySlug.products[0].productDetailDescription?.detailContent ||
          "",
        removeImages: [],
        newImages: [],
        newThumbnail: [],
        removeThumbnail: [],
      }
    : {
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
      };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: (values) => {
      const formData = new FormData();

      Object.entries(values).forEach(([key, value]) => {
        if (key === "newImages" && Array.isArray(value)) {
          value.forEach((item) => {
            if (item instanceof File) {
              formData.append("newImages", item);
            }
          });
        } else if (key === "newThumbnail" && value instanceof File) {
          formData.append("newThumbnail", value);
        } else if (key === "removeImages" && Array.isArray(value)) {
          value.forEach((imageArray, index) => {
            if (imageArray.length > 0) {
              formData.append(`removeImages[${index}]`, imageArray[0]);
            }
          });
        } else if (typeof value === "number") {
          formData.append(key, value.toString());
        } else if (typeof value === "string") {
          formData.append(key, value);
        } else if (key === "productOption" && Array.isArray(value)) {
          value.forEach((option, index) => {
            formData.append(`productOption[${index}]`, option); // Append each option separately
          });
        }
      });

      // Submit form data
      editProduct(formData);
    },

    validate: (values) => {
      let errors: ErrorsValues = {};

      if (!values.productName) {
        errors.productName = "Required name";
      }
      if (!values.productQuantity || values.productQuantity === 0) {
        errors.productQuantity = "Required quantity";
      }
      if (!values.productPrice || values.productPrice === 0) {
        errors.productPrice = "Required price";
      }
      if (values.productPrice <= 1000) {
        errors.productPrice = "Invalid price";
      }
      if (!values.productCategory) {
        errors.productCategory = "Required";
      }
      if (!values.productSubcategory) {
        errors.productSubcategory = "Required";
      }
      if (values.salePercent < 0) {
        errors.salePercent = "Sale percent must be between 0 and 100";
      } else if (values.salePercent > 100) {
        errors.salePercent = "Sale percent must be between 0 and 100";
      }

      if (
        !values.productOption ||
        (Array.isArray(values.productOption) &&
          values.productOption.length === 0)
      ) {
        errors.productOption = "Please enter at least one product option";
      } else if (
        Array.isArray(values.productOption) &&
        values.productOption.some((option: string) => option.trim() === "")
      ) {
        errors.productOption = "Invalid option, cannot be empty";
      }

      return errors;
    },
  });

  // Update animalType state when formik's values change
  useEffect(() => {
    if (formik.values.animalType) {
      setAnimalType(formik.values.animalType);
    }
  }, [formik.values.animalType]);

  const handleAnimalTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const animalTypeSelected = e.target.value;
    setAnimalType(animalTypeSelected);
    formik.setFieldValue("animalType", animalTypeSelected);
  };

  useEffect(() => {
    if (mutationError && "data" in mutationError) {
      setDuplicatedMessage((mutationError.data as any).message);
    }
  }, [mutationError]);

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
