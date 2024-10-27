import { useEffect } from "react";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { useEditUserMutation } from "@/libs/features/services/user";
import { successModal } from "@/utils/callModalANTD";

interface ErrorsValues {
  displayName: string;
  userEmail: string;
  userPhone: string;
  userAddress: string;
}

export default function useChangeProfile() {
  const { data: session } = useSession();
  const [changeProfile, { data, error }] = useEditUserMutation();

  const formik = useFormik({
    initialValues: {
      displayName: "",
      userEmail: "",
      userPhone: "",
      userAddress: "",
    },
    onSubmit: (values) => {
      const userId = session?.user?._id;
      if (userId) {
        changeProfile({
          userId,
          displayName: values.displayName,
          userEmail: values.userEmail,
          userPhone: values.userPhone,
          userAddress: values.userAddress,
        });
      }
    },
  });

  useEffect(() => {
    if (data) {
      successModal({ content: <p>Cập nhật thành công</p>, duration: 3 });
    }
  }, [data]);

  return { formik };
}
