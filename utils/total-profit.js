export const getTotalProfitAmount = (investments) => {
  return investments.reduce(
    (acc, investment) => acc + investment.profitAmount,
    0
  );
};
