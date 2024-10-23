/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useCreateBookingMutation } from "@/libs/features/services/booking";
import { useSession } from "next-auth/react";
import { useEditUserMutation } from "@/libs/features/services/user";

interface errorsValues {
    displayName: string;
    birthDay: string;
    userEmail: string;
    userPhone: string;
    userAddress: string;
}

export default function useChangeProfile() {
    const [changeProfile, { data }] = useEditUserMutation();

    const session = useSession();


    const formik = useFormik({
        initialValues: {
            displayName: "",
            birthDay: "",
            userEmail: "",
            userPhone: "",
            userAddress: "",
        },
        onSubmit: (values) => {
            console.log(values);
            const userId = session?.data?.user._id

            changeProfile({
                userId: userId as any,
                displayName: values.displayName,
                birthDay: values.birthDay,
                userEmail: values.userEmail,
                userPhone: values.userPhone,
                userAddress: values.userAddress,
            });

        },
        // validate: (values) => {
        //     let errors: Partial<errorsValues> = {};

        //     if (!values.displayName) {
        //         errors.displayName = "Vui lòng Không để trống!";
        //     }

        //     if (values.userEmail) {
        //         errors.userEmail = "Vui lòng Không để trống!";
        //     }

        //     if (values.userPhone) {
        //         errors.userPhone = "Vui lòng Không để trống!";
        //     }

        //     return errors;
        // },
    });


    return {
        formik,
    };
}
