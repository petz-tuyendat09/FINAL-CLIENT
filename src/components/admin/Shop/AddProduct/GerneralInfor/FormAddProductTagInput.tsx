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
  const [duplicateError, setDuplicateError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
    setDuplicateError(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault();
      // Check if tag already exists
      if (formik.values[inputName].includes(tagInput.trim())) {
        setDuplicateError("Tag đã tồn tại!");
      } else {
        formik.setFieldValue(inputName, [
          ...formik.values[inputName],
          tagInput.trim(),
        ]);
        setTagInput("");
      }
    }
  };

  // Function to handle tag removal
  const handleTagRemove = (index: number) => {
    const updatedTags = formik.values[inputName].filter(
      (_: string, i: number) => i !== index,
    );
    formik.setFieldValue(inputName, updatedTags);
  };

  return (
    <div className={className}>
      <p className="text-sm text-red-500">
        {formik.touched[inputName] && errorMessage}
        {duplicateError}
      </p>
      <div className="mt-1 flex w-full flex-wrap items-center gap-2 rounded-lg bg-gray-100 p-2">
        <input
          className="flex-grow bg-transparent focus:outline-none"
          placeholder={inputPlaceHolder}
          type="text"
          value={tagInput}
          name={inputName}
          onChange={handleInputChange}
          onBlur={formik.handleBlur}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="flex gap-2">
        {formik.values[inputName].map((tag: string, index: number) => (
          <div
            key={index}
            className="mt-2 flex items-center rounded-lg bg-gray-950 p-2 text-lg text-white"
          >
            {tag}
            <button
              type="button"
              className="ml-2 text-white"
              onClick={() => handleTagRemove(index)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}