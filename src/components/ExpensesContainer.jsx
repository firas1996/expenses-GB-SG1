import "./ExpensesContainer.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesContainer = ({ expensesData }) => {
  return (
    <div className="expenses">
      {expensesData.map((expense) => {
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
