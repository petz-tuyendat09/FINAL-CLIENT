interface FormAddProductPriceProps {
  onChangeEvent: React.ChangeEventHandler<HTMLInputElement>;
  onBlurEvent: React.FocusEventHandler<HTMLInputElement>;
  inputPriceValue: number;
  inputDiscountValue: number;
  visitedInput?: boolean;
  errorMessage?: string;
}

export default function FormAddProductPrice({
  onChangeEvent,
  onBlurEvent,
  inputPriceValue,
  inputDiscountValue,
  visitedInput,
  errorMessage,
}: FormAddProductPriceProps) {
  const priceAfterDiscount =
    inputPriceValue - inputPriceValue * (inputDiscountValue / 100);

  return (
    <div className="flex w-full gap-4">
      <div>
        <span>Price</span>
        <span className="ml-1 text-sm text-red-500">
          {visitedInput && errorMessage}
        </span>
        <div className="flex items-center rounded-lg border p-2">
          <p>$</p>
          <input
            onBlur={onBlurEvent}
            onChange={onChangeEvent}
            name="productPrice"
            type="number"
            placeholder="Enter product price"
            value={inputPriceValue}
            className="p-1 focus:outline-none"
          />
        </div>
      </div>
      <div>
        <p>
          Discount <span className="text-sm text-gray-400">(Optional)</span>
        </p>
        <div className="flex items-center rounded-lg border p-2">
          <p>%</p>
          <input
            onChange={onChangeEvent}
            name="salePercent"
            type="number"
            placeholder="Enter discount"
            value={inputDiscountValue}
            className="p-1 focus:outline-none"
          />
        </div>
      </div>
      <div>
        <p>Discount Price</p>
        <div className="flex items-center rounded-lg border p-2">
          <p>$</p>
          <input
            disabled
            type="text"
            value={priceAfterDiscount}
            className="p-1 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
