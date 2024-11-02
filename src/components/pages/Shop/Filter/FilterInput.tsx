"use client";

import { useState, useEffect, useMemo } from "react";
import debounce from "lodash.debounce";
import { Input } from "@nextui-org/react";

interface FilterInputProps {
  handleQueryProduct: (productName: string) => void;
  onSearchTermChange: (searchTerm: string) => void;
}

export default function FilterInput({
  handleQueryProduct,
  onSearchTermChange,
}: FilterInputProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // Memoize the debounced function
  const debouncedHandleQueryProduct = useMemo(
    () =>
      debounce((term: string) => {
        handleQueryProduct(term);
      }, 500), // Adjust the debounce delay as needed
    [handleQueryProduct],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearchTermChange(term); // Notify parent component about search term change
    debouncedHandleQueryProduct(term);
  };

  // Clean up the debounced function on unmount
  useEffect(() => {
    return () => {
      debouncedHandleQueryProduct.cancel();
    };
  }, [debouncedHandleQueryProduct]);

  return (
    <div className="px-4">
      <Input
        type="text"
        placeholder="Tìm sản phẩm"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
}
