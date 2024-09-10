interface FormAddProductNormalInputProps {
  onChangeEvent: React.ChangeEventHandler<HTMLInputElement>;
  onBlurEvent: React.FocusEventHandler<HTMLInputElement>;
  visitedInput?: boolean;
  inputPlaceHolder: string;
  inputName: string;
  label: string;
  errorMessage?: string;
  duplicatedMessage?: string;
  inputType: string;
}

export default function FormAddProductNormalInput({
  onChangeEvent,
  onBlurEvent,
  inputPlaceHolder,
  inputName,
  label,
  visitedInput,
  errorMessage,
  duplicatedMessage,
  inputType,
}: FormAddProductNormalInputProps) {
  return (
    <div>
      <label className="mb-2 block" htmlFor="product-quantity">
        {label}
      </label>
      <p className="text-sm text-red-500">{visitedInput && errorMessage}</p>
      <p className="text-sm text-red-500">{duplicatedMessage}</p>

      <input
        className="w-full rounded-lg border p-2 focus:outline-none"
        placeholder={inputPlaceHolder}
        type={inputType}
        onBlur={onBlurEvent}
        name={inputName}
        onChange={onChangeEvent}
      />
    </div>
  );
}
