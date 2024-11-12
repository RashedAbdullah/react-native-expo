export const getTotalShare = (invoices) => {
  const totalShares = invoices.reduce((accumulator, current) => {
    return accumulator + current.totalShare;
  }, 0);

  return totalShares;
};
