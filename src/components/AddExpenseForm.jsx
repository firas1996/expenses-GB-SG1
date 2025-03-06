import "./AddExpenseForm.css";

const AddExpenseForm = () => {
  const thisYear = new Date().getFullYear();
  const minDate = `${thisYear - 2}-01-01`;
  const maxDate = `${thisYear - 2}-12-31`;
  return (
    <div className="add-expense">
      <form>
        <div className="add-expense__controls">
          <div className="add-expense__control">
            <label>Title</label>
            <input required placeholder="Title" />
          </div>
          <div className="add-expense__control">
            <label>Price</label>
            <input
              required
              type="number"
              placeholder="Price"
              min="0"
              step="0.01"
            />
          </div>
          <div className="add-expense__control">
            <label>Date</label>
            <input required type="date" min={minDate} max={maxDate} />
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
