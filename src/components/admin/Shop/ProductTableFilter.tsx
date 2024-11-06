import { useGetCategoriesQuery } from "@/libs/features/services/categories";
import { useGetSubCategoriesQuery } from "@/libs/features/services/subcategories";
import formatSelectedKeys from "@/utils/formatSelectedValue";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

interface ProductTableFilterProps {
  setSaleFilter: any;
  saleFilter: any;
  setOutStockFilter: any;
  outStockFilter: any;
  setProductBuyFilter: any;
  productBuyFilter: any;
  subCateFilter: any;
  setSubCateFilter: any;
}

export default function ProductTableFilter({
  setSaleFilter,
  saleFilter,
  setOutStockFilter,
  outStockFilter,
  setProductBuyFilter,
  productBuyFilter,
  subCateFilter,
  setSubCateFilter,
}: ProductTableFilterProps) {
  const { data } = useGetSubCategoriesQuery({});

  return (
    <>
      <Dropdown>
        <DropdownTrigger className="border-none">
          <Button
            className="bg-[#f2f2f2] text-black hover:bg-[#e0e0e0]"
            variant="bordered"
          >
            {(formatSelectedKeys(saleFilter) as any) == 1
              ? "Sale"
              : "Không sale"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Multiple selection example"
          variant="flat"
          closeOnSelect={false}
          disallowEmptySelection
          selectionMode="single"
          onSelectionChange={setSaleFilter}
        >
          <DropdownItem key={1}>Sale</DropdownItem>
          <DropdownItem key={0}>Không sale</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown className="h-full">
        <DropdownTrigger className="border-none">
          <Button
            className="bg-[#f2f2f2] text-black hover:bg-[#e0e0e0]"
            variant="bordered"
          >
            {((formatSelectedKeys(outStockFilter) as any) == 1 && "Hết hàng") ||
              "Trạng thái"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Multiple selection example"
          variant="flat"
          closeOnSelect={false}
          disallowEmptySelection
          selectionMode="single"
          onSelectionChange={setOutStockFilter}
        >
          <DropdownItem key={1}>Sắp hết hàng</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown className="h-full">
        <DropdownTrigger className="border-none">
          <Button
            className="bg-[#f2f2f2] text-black hover:bg-[#e0e0e0]"
            variant="bordered"
          >
            {((formatSelectedKeys(productBuyFilter) as any) ==
              "productBuyDesc" &&
              "Hết hàng") ||
              "Lượt mua"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Multiple selection example"
          variant="flat"
          closeOnSelect={false}
          disallowEmptySelection
          selectionMode="single"
          onSelectionChange={setProductBuyFilter}
        >
          <DropdownItem key="productBuyDesc">Lượt mua giảm dần</DropdownItem>
          <DropdownItem key="productBuyAsc">Lượt mua tăng dần</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown className="h-full">
        <DropdownTrigger className="border-none">
          <Button
            className="bg-[#f2f2f2] text-black hover:bg-[#e0e0e0]"
            variant="bordered"
          >
            {subCateFilter
              ? data?.find(
                  (item) => item._id === formatSelectedKeys(subCateFilter),
                )?.subCategoryName || "Chọn danh mục"
              : "Chọn danh mục"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Multiple selection example"
          variant="flat"
          closeOnSelect={false}
          disallowEmptySelection
          selectionMode="single"
          onSelectionChange={setSubCateFilter}
          items={data}
        >
          {(item) => (
            <DropdownItem key={item._id}>{item.subCategoryName}</DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
