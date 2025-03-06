import "./ExpensesContainer.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import Chart from "./Chart";

const ExpensesContainer = ({ expensesData }) => {
  const years = [
    "All",
    ...new Set(expensesData.map((el) => el.date.getFullYear()).sort()),
  ];
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const filtredExpenses = expensesData.filter((el) => {
    return selectedYear == "All" ? true : el.date.getFullYear() == selectedYear;
  });
  return (
    <div className="expenses">
      <ExpensesFilter
        years={years}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <Chart expensesData={filtredExpenses} />
      {filtredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        );
      })}
    </div>
  );
};

export default ExpensesContainer;
