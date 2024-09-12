export interface filter {
  filterLabel: string;
  filterValue: string;
}

export const filterOption: filter[] = [
  { filterLabel: "Theo giảm giá", filterValue: "1" },
  {
    filterLabel: "Theo ngày thêm gần nhất",
    filterValue: "lastest",
  },
];
