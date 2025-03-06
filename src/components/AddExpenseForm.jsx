import "./AddExpenseForm.css";

const AddExpenseForm = () => {
  return (
    <div className="add-expense">
      <form>
        <div className="add-expense__controls">
          <div className="add-expense__control">
            <label>Title</label>
            <input />
          </div>
          <div className="add-expense__control">
            <label>Price</label>
            <input />
          </div>
          <div className="add-expense__control">
            <label>Date</label>
            <input />
          </div>
        </div>
        <div className="add-expense__actions">
          <button>Cancel</button>
          <button>Add expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpenseForm;
