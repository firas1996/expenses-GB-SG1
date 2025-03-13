import { useState } from "react";
import "./AddExpenseForm.css";

const AddExpenseForm = ({ getData }) => {
  const thisYear = new Date().getFullYear();
  const minDate = `${thisYear - 2}-01-01`;
  const maxDate = `${thisYear + 2}-12-31`;
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    date: "",
  });
  const inputChangeHandler = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };
  const formSubmition = (event) => {
    event.preventDefault();
    getData({
      id: Math.random(),
      title: formData.title,
      price: +formData.price,
      date: new Date(formData.date),
    });
    setFormData({
      title: "",
      price: "",
      date: "",
    });
  };
  return (
    <div className="add-expense">
      <form onSubmit={formSubmition}>
        <div className="add-expense__controls">
          <div className="add-expense__control">
            <label>Title</label>
            <input
              required
              placeholder="Title"
              onChange={inputChangeHandler}
              value={formData.title}
              name="title"
            />
          </div>
          <div className="add-expense__control">
            <label>Price</label>
            <input
              required
              type="number"
              placeholder="Price"
              min="0"
              step="0.01"
              onChange={inputChangeHandler}
              value={formData.price}
              name="price"
            />
          </div>
          <div className="add-expense__control">
            <label>Date</label>
            <input
              required
              type="date"
              min={minDate}
              max={maxDate}
              onChange={inputChangeHandler}
              value={formData.date}
              name="date"
            />
          </div>
        </div>
        <div className="add-expense__actions">
          <button>Cancel</button>
          <button type="submit">Add expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpenseForm;
