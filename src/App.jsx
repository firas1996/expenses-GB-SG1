import { useState } from "react";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpensesContainer from "./components/ExpensesContainer";

function App() {
  const expensesData = [
    {
      id: 1,
      title: "Item 1",
      price: 250,
      date: new Date("2025-02-13"),
    },
    {
      id: 2,
      title: "Item 2",
      price: 200,
      date: new Date("2024-10-23"),
    },
    {
      id: 3,
      title: "Item 3",
      price: 333,
      date: new Date("2025-10-13"),
    },
    {
      id: 4,
      title: "Item 4",
      price: 250,
      date: new Date("2023-07-11"),
    },
  ];
  const [newExpensesData, setNewExpensesData] = useState(expensesData);
  const getData = (data) => {
    setNewExpensesData([data, ...newExpensesData]);
  };
  return (
    <>
      <AddExpenseForm getData={getData} />
      <ExpensesContainer expensesData={newExpensesData} />
    </>
  );
}

export default App;
