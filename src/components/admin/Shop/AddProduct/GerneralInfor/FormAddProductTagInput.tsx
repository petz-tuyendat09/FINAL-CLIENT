import { FormikProps } from "formik";
import React, { useState } from "react";

interface FormAddProductTagInputProps {
  inputPlaceHolder: string;
  inputName: string;
  errorMessage?: string;
  formik: FormikProps<any>;
  className?: string;
}

export default function FormAddProductTagInput({
  inputPlaceHolder,
  inputName,
  errorMessage,
  formik,
  className = "",
}: FormAddProductTagInputProps) {
  const [tagInput, setTagInput] = useState("");

  console.log(formik.touched[inputName]);

  return (
    <div className={className}>
      <p className="text-sm text-red-500">
        {formik.touched[inputName] && errorMessage}
      </p>
      <div className="bg-gray-200 mt-1 flex w-full flex-wrap items-center gap-2 rounded-md p-2">
        <input
          className="flex-grow bg-transparent focus:outline-none"
          placeholder={inputPlaceHolder}
          type="text"
          value={tagInput}
          name={inputName}
          onChange={(e) => setTagInput(e.target.value)}
          onBlur={formik.handleBlur}
          onKeyDown={(e) => {
            if (e.key === "Enter" && tagInput.trim() !== "") {
              e.preventDefault();
              formik.setFieldValue(inputName, [
                ...formik.values[inputName],
                tagInput.trim(),
              ]);
              setTagInput("");
            }
          }}
        />
      </div>
      <div className="flex gap-2">
        {formik.values[inputName].map((tag: string, index: number) => (
          <div
            key={index}
            className="bg-gray-950 mt-2 flex items-center rounded-lg p-2 text-lg text-white"
          >
            {tag}
            <button
              type="button"
              className="ml-2 text-white"
              onClick={() => {
                const updatedTags = formik.values[inputName].filter(
                  (_: string, i: number) => i !== index,
                );
                formik.setFieldValue(inputName, updatedTags);
              }}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
