import { useGetSubCategoriesQuery } from "@/libs/features/services/subcategories";

import { memo } from "react";
interface ProductInfoProps {
  productName: string;
  subCategoryId: string;
  productOption: [];
}

const ProductInfo = memo(
  ({ productName, subCategoryId, productOption }: ProductInfoProps) => {
    const { data } = useGetSubCategoriesQuery({ subCategoryId: subCategoryId });

    return (
      <div className="absolute bottom-4 left-4 flex items-center justify-between">
        <p>
          <h2 className="flex justify-between font-serif text-[14px] lg:text-h4">
            {productName}
          </h2>
          <h2 className="lg text-[12px] text-gray-500 lg:text-base">
            {data && data[0].subCategoryName} /
            <span className="text-gray-400">{productOption[0]}</span>
            <span className="ml-2 text-gray-400">
              {`(${productOption.length} lựa chọn)`}
            </span>
          </h2>
        </p>
      </div>
    );
  },
);

ProductInfo.displayName = "ProductInfo";

export default ProductInfo;
