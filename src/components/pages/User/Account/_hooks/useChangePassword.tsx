/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useCreateBookingMutation } from "@/libs/features/services/booking";
import { useSession } from "next-auth/react";
import { useEditUserMutation } from "@/libs/features/services/user";

interface errorsValues {
    newPassword: string;
    confirmPassword: string;
}

export default function useChangePassword() {
    const [changePassword, { data }] = useEditUserMutation();

    const session = useSession();


    const formik = useFormik({
        initialValues: {
            newPassword: "",
            confirmPassword: ""
        },
        onSubmit: (values) => {
            console.log(values);
            const userId = session?.data?.user._id

            changePassword({ userId: userId as any, newPassword: values.newPassword })

        },
        validate: (values) => {
            let errors: Partial<errorsValues> = {};

            if (!values.newPassword) {
                errors.newPassword = "Vui lòng nhập mật khẩu! ";
            }

            if (values.confirmPassword !== values.newPassword) {
                errors.confirmPassword = "Mật khẩu không trùng khớp!";
            }


            return errors;
        },
    });

    // const handleChangePassword = () => {
    //     const changePasswordObject = {
    // userId: session?.data?.user._id,
    //         newPassword: formik.values.newPassword,
    //     }

    //     changePassword({user})

    // }
    // useEffect(() => {
    //     if (data) {
    //         router.push("/booking-success");
    //     }
    // }, [data]);


    return {
        formik,
    };
}
