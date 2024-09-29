import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useVerifyEmailMutation } from "@/libs/features/services/auth";
import { useAuth } from "../../_store/AuthContext";

import { validateEmail } from "@/utils/validationUtils";

interface errorsValues {
  email: string;
  otpCode: string;
}

export default function useVerify() {
  const { email } = useAuth();
  const [seconds, setSeconds] = useState<number>(60);
  const [canResend, setCanResend] = useState<boolean>(false);

  useEffect(() => {
    let timerId: any;
    if (seconds > 0) {
      timerId = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setCanResend(true);
    }
    return () => clearTimeout(timerId);
  }, [seconds]);

  const [verify, { data, error: mutationError, isLoading }] =
    useVerifyEmailMutation();
  const router = useRouter();

  function handleResendOTP() {
    setCanResend(false);
    setSeconds(60);
  }

  const formik = useFormik({
    initialValues: {
      email: email,
      otpCode: 0,
    },
    onSubmit: (values) => {
      verify(values);
    },
    validate: (values) => {
      let errors: Partial<errorsValues> = {};

      if (!values.otpCode) {
        errors.otpCode = "OTP không được để trống";
      }

      return errors;
    },
  });

  return {
    formik,
    handleResendOTP,
    seconds,
    canResend,
  };
}
