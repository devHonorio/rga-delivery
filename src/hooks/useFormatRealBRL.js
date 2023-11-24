export const useFormatToRealBRL = (price) => {
  return price?.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
