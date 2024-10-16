export default function formatMoney(price: any) {
  const formatedMoney = price.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });

  return formatedMoney;
}
