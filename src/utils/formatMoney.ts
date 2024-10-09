export default function formatMoney(price: string | number) {
  const formatedMoney = price.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });

  return formatMoney;
}
