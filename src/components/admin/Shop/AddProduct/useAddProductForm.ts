import { useEffect } from "react";
import { useFormik } from "formik";
// import { useAddNewProductMutation } from "@/libs/features/services/products";
import { useRouter } from "next/navigation";

interface errorsValues {
  productName: string;
  productImage: string;
  productPrice: string;
  salePercent: string;
  productQuantity: string;
  productCategory: string;
  productSkintype: string;
}

export default function useAddProductForm() {
  // const [addNewProduct, { data, error: mutationError }] =
  //   useAddNewProductMutation();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      productName: "",
      productImage: null,
      productPrice: 0,
      salePercent: 0,
      productQuantity: 0,
      productCategory: "",
      productSkintype: "",
    },
    onSubmit: (values) => {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (value !== null) {
          if (typeof value === "number") {
            formData.append(key, value.toString());
          } else {
            formData.append(key, value);
          }
        }
      });
      // addNewProduct(formData);
    },
    validate: (values) => {
      let errors: Partial<errorsValues> = {};

      if (!values.productName) {
        errors.productName = "Required name";
      }
      if (values.productPrice === 0) {
        errors.productPrice = "Required price";
      }
      if (values.productQuantity === 0) {
        errors.productQuantity = "Required quantity";
      }
      if (!values.productSkintype) {
        errors.productSkintype = "Required";
      }
      if (!values.productCategory) {
        errors.productCategory = "Required";
      }

      return errors;
    },
  });

  // let duplicatedMessage;

  // if (data) {
  //   if (data.message === "Duplicated product name") {
  //     duplicatedMessage = "Duplicated product name";
  //   }
  // }

  // useEffect(() => {
  //   if (data && data.status === 201) {
  //     router.push("/admin/shop");
  //   }
  // }, [data, router]);

  return {
    formik,
    // duplicatedMessage
  };
}
