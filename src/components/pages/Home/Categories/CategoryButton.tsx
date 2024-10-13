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
  console.log(currentFilter);
  return (
    <button
      onClick={() => handleFilter(filterOption)}
      className={`${currentFilter === filterOption ? "bg-primary text-white" : "border-black-900"} rounded-full border px-4 py-2 transition duration-300 hover:bg-primary hover:text-white`}
    >
      {buttonLabel}
    </button>
  );
}
