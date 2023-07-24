// TransactionList.js

import React, { useState, useEffect } from "react";

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("/db.json") // Assumes db.json is in the public folder
      .then((response) => response.json())
      .then((data) => setTransactions(data.transactions))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div>
      {/* Render the component that will display the list of transactions */}
      {/* Pass the transactions data as props */}
      <DisplayTransactions transactions={transactions} />
    </div>
  );
};

export default TransactionList;