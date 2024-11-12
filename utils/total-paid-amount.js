export const getTotalPaidAmount = (investments) => {
  return investments.reduce(
    (acc, investment) => acc + investment.paidAmount,
    0
  );
};
