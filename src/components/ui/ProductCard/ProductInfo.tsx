import { useGetCategoriesQuery } from "@/libs/features/services/categories";
import { useGetSubCategoriesQuery } from "@/libs/features/services/subcategories";

import { memo } from "react";
interface ProductInfoProps {
  productName: string;
  subCategoryId: string;
  productOption: string;
}

const ProductInfo = memo(
  ({ productName, subCategoryId, productOption }: ProductInfoProps) => {
    const { data } = useGetSubCategoriesQuery({ subCategoryId: subCategoryId });

    return (
      <div className="flex items-center justify-between">
        <p>
          <h2 className="font-serif text-h4">{productName}</h2>
          <h2 className="text-gray-500">
            {data && data[0].subCategoryName} /
            <span className="text-gray-400">{productOption}</span>
          </h2>
        </p>
      </div>
    );
  },
);

ProductInfo.displayName = "ProductInfo";

export default ProductInfo;
