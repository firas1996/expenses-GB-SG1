import Expensetem from "./components/Expensetem";

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
  return (
    <>
      {expensesData.map((expense) => {
        return (
          <Expensetem
            key={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        );
      })}
    </>
  );
}

export default App;
