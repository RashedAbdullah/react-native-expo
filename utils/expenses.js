import { useState, useEffect } from "react";

const getExpenses = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://sihabul-khair.vercel.app/api/expense"
        );
        const data = await response.json();
        setExpenses(data.data);
      } catch (error) {
        console.error("Failed to fetch invoices:", error);
      }
    };

    getData();
  }, []);

  return expenses;
};

export default getExpenses;
