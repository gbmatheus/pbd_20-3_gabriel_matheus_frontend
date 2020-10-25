const currency = function (money) {
  if (typeof money === "number")
    return money.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  return undefined;
};

export default currency;
