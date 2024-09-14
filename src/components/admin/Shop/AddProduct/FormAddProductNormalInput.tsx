import { FormikProps } from "formik";

interface FormAddProductNormalInputProps {
  inputPlaceHolder: string;
  inputName: string;
  label: string;
  duplicatedMessage?: string;
  errorMessage?: string;
  inputType: string;
  formik: FormikProps<any>;
}

export default function FormAddProductNormalInput({
  inputPlaceHolder,
  inputName,
  label,
  duplicatedMessage,
  errorMessage,
  inputType,
  formik,
}: FormAddProductNormalInputProps) {
  return (
    <div>
      <label className="block" htmlFor="product-quantity">
        {label}
      </label>

      <p className="text-sm text-red-500">
        {formik.touched[inputName] && errorMessage}
      </p>
      <p className="text-sm text-red-500">{duplicatedMessage}</p>

      <input
        className="mt-1 w-full rounded-lg border p-2 focus:outline-none"
        placeholder={inputPlaceHolder}
        type={inputType}
        onBlur={formik.handleBlur}
        name={inputName}
        onChange={formik.handleChange}
        onWheel={(e: React.WheelEvent<HTMLInputElement>) =>
          e.currentTarget.blur()
        }
      />
    </div>
  );
}
