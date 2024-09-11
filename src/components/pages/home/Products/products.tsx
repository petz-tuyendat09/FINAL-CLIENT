"use client";
import { useGetProductsQuery } from "@/libs/features/services/product";
import { useTranslations } from "next-intl";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import numeral from "numeral";
import { BoxIcon } from "@/shared/ui/icons/BoxIcon";
import "./products.css";
export const Products = () => {
  const t = useTranslations("arrivals");
  const { data, error, isLoading } = useGetProductsQuery({});
  console.log(data);
  return (
    <div className="px-[40px] mt-[80px]">
      <div className="flex items-center justify-center">
        <h1 className="text-[30px] font-[600]">{t("title")}</h1>
      </div>
      <div className="mt-[20px]">
        <div className="flex flex-row justify-between items-center">
          {data?.map((item) => (
            <div key={item._id}>
              <div className="relative">
                <img
                  src={
                    process.env.NEXT_PUBLIC_API_URL +
                    "public/images/products/" +
                    item.productImage
                  }
                  width="470px"
                  className="rounded-[10px]"
                />
                <div className="absolute bottom-[20px] left-[10px] flex flex-row justify-between items-center w-[450px]">
                  <div className="product-name flex flex-row items-center justify-between bg-[#14141443] w-[300px] py-[8px] px-[20px] rounded-[20px] cursor-pointer">
                    <p className="text-white">{item.productName}</p>
                    <button className="bg-white w-[25px] h-[25px] rounded-[50%] flex items-center justify-center">
                      <ArrowForwardIcon className="text-[18px]" />
                    </button>
                  </div>
                  <div className="bg-black px-[25px] py-[8px] rounded-[20px]">
                    <p className="text-white text-[15px]">
                      {numeral(item.productPrice).format("$0,")}
                    </p>
                  </div>
                </div>
                <div className="add-to-cart absolute top-[10px] right-[10px] bg-white w-[45px] h-[45px] rounded-[50%] flex items-center justify-center">
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
