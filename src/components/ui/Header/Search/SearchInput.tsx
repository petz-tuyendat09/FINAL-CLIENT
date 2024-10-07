import { ChangeEvent } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface SearchInputProps {
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ handleSearch }: SearchInputProps) {
  return (
    <div className="glass rounded-full">
      <div className="flex items-center px-4 py-2 text-white">
        <input
          onChange={handleSearch}
          placeholder="Bạn đang tìm gì ?"
          className="w-full bg-transparent px-4 py-2 outline-0"
          type="text"
        />
        <Icon className="text-2xl text-white" icon="tabler:search" />
      </div>
    </div>
  );
}
