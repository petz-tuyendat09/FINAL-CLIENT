import NormalTransitionLink from "@/components/ui/NormalTransitionLink";
import { useGetProductsQuery } from "@/libs/features/services/product";
import { Product } from "@/types/Product";
import Image from "next/image";

export default function SuggestedProducts({
  categoryId,
}: {
  categoryId: string;
}) {
  const { data } = useGetProductsQuery({
    productCategory: categoryId,
    limit: 4,
  });
  const formatCurrency = (amount: any) => {
    return `${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ`;
  };
  return (
    <div>
      <div className="flex flex-row gap-[10px]">
        {data?.products.slice(0, 4).map((item: any, i: number) => {
          return (
            <NormalTransitionLink
              href={`/shop/${item.productSlug}`}
              key={item._id}
            >
              <Image
                unoptimized
                src={item.productThumbnail}
                width={300}
                height={300}
                alt=""
              />
              <div className="flex flex-col items-center justify-center">
                <h2>{item?.productName}</h2>
                <p>{formatCurrency(item?.productOption[0].productPrice)}</p>
              </div>
            </NormalTransitionLink>
          );
        })}
      </div>
    </div>
  );
}
