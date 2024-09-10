'use client'
import useGetProduct from "@/app/(admin)/admin/shop/hooks/useGetProduct";
import { PaginateProduct, Product } from "@/types/Product";
import { useTranslations } from "next-intl";
interface ProductsProps {
    initialData: PaginateProduct;
    products: Product[]
}
export const Products = ({ initialData }: ProductsProps) => {
    const t = useTranslations('arrivals');
    const { products } = useGetProduct({initialData});

    console.log(products);
    return (
        <div className="px-[40px] mt-[50px]">
            <div className="flex items-center justify-center">
                <h1 className="text-[26px] font-[600]">{t('title')}</h1>
            </div>
            <div>
                <div>

                </div>
            </div>
        </div>
    )
}