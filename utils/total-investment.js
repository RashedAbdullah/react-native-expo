export const getTotalInvestment = (investments) => {
  return investments.reduce((acc, investment) => acc + investment.amount, 0);
};
