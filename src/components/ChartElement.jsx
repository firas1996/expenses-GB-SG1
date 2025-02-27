import "./ChartElement.css";

const ChartElement = ({ value, label }) => {
  return (
    <div className="chart-element">
      <div className="chart-element__inner">
        <div className="chart-element__fill"></div>
      </div>
      <div className="chart-element__label">{label}</div>
    </div>
  );
};

export default ChartElement;
