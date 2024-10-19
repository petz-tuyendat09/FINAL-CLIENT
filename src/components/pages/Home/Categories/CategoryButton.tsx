interface CategoryButtonProps {
  handleFilter: (filterOption: string) => void;
  filterOption: string;
  buttonLabel: string;
  currentFilter: string;
}

export default function CategoryButton({
  filterOption,
  handleFilter,
  buttonLabel,
  currentFilter,
}: CategoryButtonProps) {
  return (
    <button
      onClick={() => handleFilter(filterOption)}
      className={`${currentFilter === filterOption ? "bg-primary text-white shadow-badget" : "border-black-900"} rounded-full border px-[20px] py-[7px] transition duration-300 hover:bg-primary hover:text-white text-[24px]`}
    >
      {buttonLabel}
    </button>
  );
}
