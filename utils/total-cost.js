export const getTotalCost = (expenses) => {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};
