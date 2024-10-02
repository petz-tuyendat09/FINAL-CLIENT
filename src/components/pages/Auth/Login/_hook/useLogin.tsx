// useLogin.js

import { useFormik } from "formik";
import { signIn } from "next-auth/react";

interface errorsValues {
  loginkey: string;
  password: string;
}

export default function useLogin() {
  const formik = useFormik({
    initialValues: {
      loginkey: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const res = await signIn("credentials", {
          redirect: false, // Không tự động chuyển hướng
          loginkey: values.loginkey,
          password: values.password,
          callbackUrl: "/", // Đường dẫn sau khi đăng nhập thành công
        });
      } catch (error) {
        console.log("Error during login:", error);
      }
    },
    validate: (values) => {
      const errors: Partial<errorsValues> = {};

      if (!values.loginkey) {
        errors.loginkey = "Tên đăng nhập hoặc email không được để trống";
      }

      if (!values.password) {
        errors.password = "Mật khẩu không được để trống";
      }
      return errors;
    },
  });

  return {
    formik,
  };
}
