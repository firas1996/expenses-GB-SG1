import "./ExpenseItem.css";

const Expensetem = () => {
  return (
    <div className="expense-item">
      <div className="expense-date">date</div>
      <div className="expense-item__description">
        <h3>title</h3>
        <div className="expense-item__price">$ price</div>
      </div>
    </div>
  );
};

export default Expensetem;
