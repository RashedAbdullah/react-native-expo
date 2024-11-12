export const getTotalAmountByMember = (item) => {
  const totalAmount =
    item.July +
    item.August +
    item.September +
    item.October +
    item.November +
    item.December +
    item.January +
    item.February +
    item.March +
    item.April +
    item.May +
    item.June;
  return totalAmount;
};
