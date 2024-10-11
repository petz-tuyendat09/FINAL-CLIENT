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
      <div className="bg sticky left-0 top-0 z-40 ml-auto w-full bg-white py-8 text-left text-h4">
        <div className="container">
          <button
            onClick={handleOpenFilter}
            className="flex items-center gap-1"
          >
            <p>Lọc</p>
            <Icon icon="ion:filter" />
          </button>
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
        className="fixed right-0 top-0 z-50 h-screen space-y-2 bg-white px-8 py-4 md:w-1/3 lg:w-1/4"
      >
        <button
          onClick={handleOpenFilter}
          className="flex w-full items-center justify-between"
        >
          <h2 className="text-h3 font-bold">Lọc sản phẩm</h2>
          <Icon className="size-6" icon="mingcute:close-fill" />
        </button>
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
