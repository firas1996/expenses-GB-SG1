import "./ExpenseItem.css";

const Expensetem = ({ title, price, date }) => {
  const year = date.getFullYear();
  return (
    <div className="expense-item">
      <div className="expense-date">
        <div>month</div>
        <div>{year}</div>
        <div>day</div>
      </div>
      <div className="expense-item__description">
        <h3>{title}</h3>
        <div className="expense-item__price">$ {price}</div>
      </div>
    </div>
  );
};

export default Expensetem;
