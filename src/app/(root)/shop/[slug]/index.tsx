'use client'
import { useGetProductsQuery } from "@/libs/features/services/product";
import { useParams } from "next/navigation";

export const Index = () => {
    const { slug } = useParams();
    const productSlug = Array.isArray(slug) ? slug[0] : slug;
    const {data: products, error, isLoading} = useGetProductsQuery({ productSlug });
    console.log(isLoading);
    return (
        <div>
        </div>
    );
}
