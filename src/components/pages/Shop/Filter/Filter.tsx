// Filter.tsx
import { useContext, useState } from "react";
import { CategoryFilterContext } from "../_store/FilterContext";
import Category from "./FilterCategory";
import { useGetCategoriesQuery } from "@/libs/features/services/categories";
import { Icon } from "@iconify/react/dist/iconify.js";
import FilterInput from "./FilterInput";
import { motion } from "framer-motion";

interface FilterProps {
  handleQueryProduct: (productName: string) => void;
  handleSearchTermChange: (searchTerm: string) => void;
}

export default function Filter({
  handleQueryProduct,
  handleSearchTermChange,
}: FilterProps) {
  const { data: categories } = useGetCategoriesQuery("");
  const categoryFilterContext = useContext(CategoryFilterContext);
  const [openFilter, setOpenFilter] = useState(false);

  function handleOpenFilter() {
    setOpenFilter((prevState) => !prevState);
  }

  if (!categoryFilterContext) {
    throw new Error("CategoryFilterContext not provided");
  }

  document.body.style.overflow = openFilter ? "hidden" : "auto";

  return (
    <>
      <div className="container sticky top-4 z-40 my-4">
        <div className="flex gap-4">
          <div className="glass w-fit rounded-full px-4 py-2 text-[14px] text-white">
            <button
              onClick={handleOpenFilter}
              className="flex items-center gap-1"
            >
              <p>Lọc</p>
              <Icon icon="ion:filter" />
            </button>
          </div>
          <div className="glass w-fit rounded-full px-6 py-2 text-[14px] text-white">
            <button
              onClick={handleOpenFilter}
              className="flex items-center gap-1"
            >
              <p>Lọc</p>
              <Icon icon="ion:filter" />
            </button>
          </div>
        </div>
      </div>

      <motion.div
        onClick={handleOpenFilter}
        animate={{
          display: openFilter ? "block" : "none",
          opacity: openFilter ? 0.45 : 0,
        }}
        className="fixed bottom-0 left-0 right-0 top-0 z-[40] h-screen w-screen bg-black"
      />
      <motion.div
        initial={false}
        animate={{ x: openFilter ? 0 : 100 + "%" }}
        transition={{ type: "tween" }}
        className="fixed right-0 top-0 z-50 h-screen space-y-2 bg-white md:w-1/3 lg:w-1/4"
      >
        <div className="border-b p-4">
          <button
            onClick={handleOpenFilter}
            className="flex w-full items-center justify-between"
          >
            <h2 className="text-h4 font-bold">Lọc sản phẩm</h2>
            <Icon className="size-6" icon="mingcute:close-fill" />
          </button>
        </div>
        <FilterInput
          handleQueryProduct={handleQueryProduct}
          onSearchTermChange={handleSearchTermChange}
        />
        {(categories as any)?.map((category: any) => (
          <Category key={category._id} category={category} />
        ))}
      </motion.div>
    </>
  );
}
