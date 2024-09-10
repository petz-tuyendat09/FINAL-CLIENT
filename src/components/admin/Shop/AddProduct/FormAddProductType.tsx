interface FormAddProductTypeProps {
  onChangeEvent: React.ChangeEventHandler<HTMLSelectElement>;
  defaultText: string;
  inputName: string;
  optionValues?: React.ReactNode;
  errorMessage?: string;
  visitedInput?: boolean;
}

export default function FormAddProductType({
  onChangeEvent,
  defaultText,
  inputName,
  optionValues,
  errorMessage,
  visitedInput,
}: FormAddProductTypeProps) {
  return (
    <div className="w-1/2">
      <label className="mb-2 block" htmlFor={inputName}>
        {defaultText}
        <span className="ml-1 text-xs text-red-500">
          {visitedInput && errorMessage}
        </span>
      </label>

      <select
        onChange={onChangeEvent}
        className="w-full rounded-lg border p-2"
        name={inputName}
        defaultValue="DEFAULT"
        id={inputName}
      >
        <option disabled value="DEFAULT">
          {defaultText}
        </option>
        {optionValues}
      </select>
    </div>
  );
}
