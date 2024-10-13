import { useGetProductsByCatIdQuery } from "@/libs/features/services/product";
import { Product } from "@/types/Product";
import Image from "next/image";

export default function SuggestedProducts ({ categoryId }: { categoryId: string }) {
    const { data } = useGetProductsByCatIdQuery(categoryId) as { data: Product[] | undefined };
    const formatCurrency = (amount:any) => {
        return `${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}đ`;
    };
    return (
        <div>
            <div className="flex flex-row justify-between gap-[10px]">
                {data?.slice(0,4).map((item:any, i:number) => {
                    return (
                        <div>
                            <Image src={item.productThumbnail} width={300} height={300} alt="" />
                            <div className="flex flex-col justify-center items-center">
                                <h2>{item?.productName}</h2>
                                <p>{formatCurrency(item?.productOption[0].productPrice)}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}