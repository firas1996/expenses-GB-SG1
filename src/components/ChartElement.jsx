import "./ChartElement.css";

const ChartElement = ({ value, label, max, total }) => {
  const x = (value / max) * 100 + "%";
  return (
    <div className="chart-element">
      <div className="chart-element__inner">
        <div className="chart-element__fill" style={{ height: x }}></div>
      </div>
      <div className="chart-element__label">{label}</div>
    </div>
  );
};

export default ChartElement;
