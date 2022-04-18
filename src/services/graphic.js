import React from "react";
import { Chart } from "react-google-charts";


 const options = {
  title: "Company Performance",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 3,maxValue:5 },
  chartArea: { width: "40%", height: "60%", fill: "transparen"  },
  backgroundColor: { fill: "transparent"},

};

export default function Grafico(props) {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={props.data}
      options={options}
    />
  );
}
