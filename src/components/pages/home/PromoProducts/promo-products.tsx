import { useGetProductsQuery } from "@/libs/features/services/product"

export const PromotionalProducts = () => {
    const { data } = useGetProductsQuery({ salePercent: 1 });
    console.log(data);
    return (
        <div>

        </div>
    )
}