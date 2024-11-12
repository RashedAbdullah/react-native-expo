import { useState, useEffect } from "react";

const getInvestments = () => {
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://sihabul-khair.vercel.app/api/investment"
        );
        const data = await response.json();
        setInvestments(data.data);
      } catch (error) {
        console.error("Failed to fetch investments:", error);
      }
    };

    getData();
  }, []);

  return investments;
};

export default getInvestments;
