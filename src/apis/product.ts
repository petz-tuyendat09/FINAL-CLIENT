"use server";

import next from "next";

// const DOMAIN_URL = process.env.DOMAIN_URL;
const DOMAIN_URL = "http://localhost:8888/api";

export interface QueryParams {
  productName?: string;
  page?: number;
  status?: string;
  salePerecent?: string;
  limit?: number;
}

export const getProduct = async (params: QueryParams) => {
  const options: any = {
    method: "GET",
  };

  const queryParams = new URLSearchParams(
    params as Record<string, string>,
  ).toString();
  const response = await fetch(
    `${DOMAIN_URL}/product/?${queryParams}`,
    options,
  );

  return response.json();
};

export const getProductWithPaginate = async (params: QueryParams) => {
  const options: any = {
    method: "GET",
     next: { revalidate: 3600 } 

  };

  const queryParams = new URLSearchParams(
    params as Record<string, string>,
  ).toString();
  const response = await fetch(
    `${DOMAIN_URL}/product/page?${queryParams}`,
    options,
  
  );

  return response.json();
};

// export const getProductWithPaginate = async (params: QueryParams) => {
//   const delay = (ms: number) =>
//     new Promise((resolve) => setTimeout(resolve, ms));

//   const options: any = {
//     method: "GET",
//   };

//   const queryParams = new URLSearchParams(
//     params as Record<string, string>
//   ).toString();

//   // Thêm độ trễ 2 giây trước khi gọi API
//   await delay(2000);

//   const response = await fetch(
//     `${DOMAIN_URL}/product/page?${queryParams}`,
//     options
//   );

//   return response.json();
// };
