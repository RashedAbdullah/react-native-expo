export const getTotalAmount = (invoices) => {
  const totalAmounts = invoices.reduce((acc, curr) => {
    Object.keys(curr).forEach((month) => {
      if (
        month !== "invoice" &&
        month !== "memberName" &&
        month !== "post" &&
        month !== "totalShare"
      ) {
        acc[month] = (acc[month] || 0) + curr[month];
      }
    });
    return acc;
  }, {});

  const total =
    totalAmounts.July +
    totalAmounts.August +
    totalAmounts.September +
    totalAmounts.October +
    totalAmounts.November +
    totalAmounts.December +
    totalAmounts.January +
    totalAmounts.February +
    totalAmounts.March +
    totalAmounts.April +
    totalAmounts.May +
    totalAmounts.June;

  return total;
};
