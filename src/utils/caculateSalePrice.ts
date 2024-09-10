export default function calculateSalePrice(
  productSalePercent: number,
  productPrice: number,
) {
  const salePrice = productSalePercent
    ? productPrice * (1 - productSalePercent / 100)
    : productPrice;

  return { salePrice };
}
