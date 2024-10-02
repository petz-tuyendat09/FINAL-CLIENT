interface CategoryButtonProps {
  handleFilter: (filterOption: string) => void;
  filterOption: string;
  buttonLabel: string;
}

export default function CategoryButton({
  filterOption,
  handleFilter,
  buttonLabel,
}: CategoryButtonProps) {
  return (
    <button
      onClick={() => handleFilter(filterOption)}
      className="rounded-full border border-black px-4 py-2 transition duration-300 hover:bg-black hover:text-white"
    >
      {buttonLabel}
    </button>
  );
}
