import { NumericFormat } from "react-number-format";
import { FormikProps } from "formik";

interface FormAddProductPriceProps {
  visitedInput?: boolean;
  errorMessage?: string;
  formik: FormikProps<any>; // Type for Formik's context
}

export default function FormAddProductPrice({
  visitedInput,
  errorMessage,
  formik,
}: FormAddProductPriceProps) {
  const priceAfterDiscount =
    formik.values.productPrice -
    formik.values.productPrice * (formik.values.salePercent / 100);

  return (
    <div className="flex w-full gap-4">
      <div>
        <span>Giá</span>
        <span className="ml-1 text-sm text-red-500">
          {visitedInput && errorMessage}
        </span>
        <div className="flex items-center rounded-lg border p-2">
          <p>đ</p>
          <NumericFormat
            onBlur={formik.handleBlur}
            name="productPrice"
            value={1000}
            displayType={"input"}
            thousandSeparator={true}
            placeholder="Nhập giá sản phẩm"
            className="p-1 focus:outline-none"
            onValueChange={(val) =>
              formik.setFieldValue("productPrice", val.floatValue)
            }
          />
        </div>
      </div>
      <div>
        <p>
          Giảm giá <span className="text-sm text-gray-text">(Optional)</span>
        </p>
        <div className="flex items-center rounded-lg border p-2">
          <p>%</p>
          <input
            onChange={formik.handleChange}
            name="salePercent"
            type="number"
            placeholder="Nhập phần trăm giảm"
            value={formik.values.salePercent}
            className="p-1 focus:outline-none"
            max={100}
            onWheel={(e: React.WheelEvent<HTMLInputElement>) =>
              e.currentTarget.blur()
            }
          />
        </div>
      </div>
      <div>
        <p>Giá sản phẩm</p>
        <div className="flex items-center rounded-lg border p-2">
          <p>đ</p>
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
