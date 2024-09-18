import { filterOption } from "./filterOption";

interface FilterProps {
  handleQueryProduct: Function;
  handleFilter: Function;
}

export default function Filter({
  handleQueryProduct,
  handleFilter,
}: FilterProps) {
  return (
    <div>
      <input
        onChange={(e) => handleQueryProduct(e.target.value)}
        type="text"
        className="border border-black px-2 py-1"
        placeholder="Search tí style"
      />
      <div className="mt-2 space-x-2">
        {filterOption.map((filter) => (
          <button
            onClick={(e) => handleFilter(filter.filterValue)}
            key={filter.filterLabel}
          >
            {filter.filterLabel}
          </button>
        ))}
      </div>
    </div>
  );
}
