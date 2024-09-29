import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useSignUpMutation } from "@/libs/features/services/auth";
import {
  validateEmail,
  validateUsername,
  validatePassword,
} from "@/utils/validationUtils";

interface errorsValues {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export default function useSignUp() {
  const [duplicatedMessage, setDuplicatedMessage] = useState<
    string | undefined
  >();
  const [signUp, { data, error: mutationError, isLoading }] =
    useSignUpMutation();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      signUp(values);
    },
    validate: (values) => {
      let errors: Partial<errorsValues> = {};

      if (!values.email) {
        errors.email = "Email không được để trống";
      } else if (!validateEmail(values.email)) {
        errors.email = "Email không hợp lệ";
      }

      if (!values.username) {
        errors.username = "Username không được để trống";
      } else if (!validateUsername(values.username)) {
        errors.username = "Username không chứa ký tự đặc biệt";
      }

      if (!values.password) {
        errors.password = "Mật khẩu không được để trống";
      } else if (!validatePassword(values.password)) {
        errors.password = "Mật khẩu không chứa ký tự đặc biệt";
      }

      if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Mật khẩu không trùng";
      }

      return errors;
    },
  });

  useEffect(() => {
    if (mutationError && "data" in mutationError) {
      setDuplicatedMessage((mutationError.data as any).message);
    }
  }, [mutationError]);

  return {
    formik,
    duplicatedMessage,
  };
}
