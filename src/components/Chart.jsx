import "./Chart.css";
import ChartElement from "./ChartElement";

const Chart = ({ expensesData }) => {
  const chartData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "Mai", value: 0 },
    { label: "Jui", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const expense of expensesData) {
    chartData[expense.date.getMonth()].value += expense.price;
  }
  console.log(chartData);
  return (
    <div className="chart">
      {chartData.map((el) => {
        return (
          <ChartElement key={el.label} label={el.label} value={el.value} />
        );
      })}
    </div>
  );
};

export default Chart;
