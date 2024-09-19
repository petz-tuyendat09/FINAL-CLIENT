"use client";
import { useGetProductsByCategoryIdQuery, useGetProductsQuery } from "@/libs/features/services/product";
import { useTranslations } from "next-intl";
import numeral from "numeral";
import { BoxIcon } from "@/shared/ui/icons/BoxIcon";
import "./products.css";
import { ArrowDownIcon } from "@/shared/ui/icons";
import Image from "next/image";
import { useGetCategoriesQuery } from "@/libs/features/services/categories";
import { useEffect, useState } from "react";
import { Product } from "@/types/Product";
export const Products = () => {
  const t = useTranslations("arrivals");
  const { data: productsData, error, isLoading } = useGetProductsQuery({});
  const { data: categories } = useGetCategoriesQuery({});
  const [category, setCategory] = useState(-1);
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryId, setCategoryId] = useState<string | undefined>(undefined);
  const { data: filteredProductsData } = useGetProductsByCategoryIdQuery(
    { categoryId: categoryId }
  );
  useEffect(() => {
    if (productsData) {
      setProducts(productsData);
    }
  }, [productsData])

  useEffect(() => {
    if (filteredProductsData) {
      setProducts(filteredProductsData);
    }

    if (category === -1 && productsData) {
      setProducts(productsData);
    }
  }, [category, filteredProductsData]);
  return (
    <div className="px-[40px] mt-[80px]">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[26px] font-500] text-[#3c3731] font-quicksand">New <span className="text-custom-red">Arrivals</span></h1>
          <p className="text-[rgb(104,110,125)] font-quicksand">Shop online for new arrivals and get free shipping!</p>
        </div>
        <div>
          <ul className="flex flex-row gap-[40px]">
            <li className="category-item relative cursor-pointer" onClick={() => setCategory(-1)}>
              <a className={`${category === -1 ? 'text-custom-red' : 'text-[rgb(104,110,125)]'} text-[18px]`}>Tất cả</a>
            </li>
            {categories?.map((item, i) => {
              return (
                <div key={i}>
                  <li className="category-item relative cursor-pointer" onClick={() => { setCategory(i), setCategoryId(item._id) }}>
                    <a className={`${category === i ? 'text-custom-red' : 'text-[rgb(104,110,125)]'} text-[18px]`}>
                      {item.categoryName}
                    </a>
                  </li>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="mt-[40px]">
        <div className="grid grid-cols-4 gap-[20px] justify-between items-center">
          {products?.slice(0, 8).map((item, i) => (
            <div key={i}>
              <div className="relative shadow-custom rounded-[20px]">
                <Image
                  alt=""
                  src={item.productThumbnail}
                  width={470}
                  height={300}
                  className="rounded-[10px]"
                />
                <div className="absolute bottom-[20px] left-[10px] flex flex-row justify-between items-center w-[325px]">
                  <div className="product-name flex flex-row items-center justify-between bg-[#494949d1] w-[200px] py-[6px] px-[20px] rounded-[20px] cursor-pointer">
                    <p className="text-white text-[14px]">{item.productName?.length > 19 ? item.productName.substring(0, 19) : item.productName}</p>
                    <button className="bg-white w-[25px] h-[25px] rounded-[50%] flex items-center justify-center">
                      <ArrowDownIcon width="14" className="arrow-icon" style={{ transform: 'rotate(270deg)' }} />
                    </button>
                  </div>
                  <div className="bg-black px-[25px] py-[8px] rounded-[20px]">
                    <p className="text-white text-[13px]">
                      {numeral(item.productPrice).format("$0,")}
                    </p>
                  </div>
                </div>
                <div className="add-to-cart absolute top-[10px] right-[10px] bg-gray w-[45px] h-[45px] rounded-[50%] flex items-center justify-center">
                  <BoxIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center w-[100%] mt-[50px]">
        <button className="border border-black px-[70px] py-[10px] rounded-[30px] font-[500]">
          XEM THÊM
        </button>
      </div>
    </div>
  );
};
