import { useState, useEffect } from "react";

const getInvoices = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const getInvoice = async () => {
      try {
        const response = await fetch(
          "https://sihabul-khair.vercel.app/api/invoice"
        );
        const data = await response.json();
        setInvoices(data.data);
      } catch (error) {
        console.error("Failed to fetch invoices:", error);
      }
    };

    getInvoice();
  }, []);

  return invoices;
};

export default getInvoices;
