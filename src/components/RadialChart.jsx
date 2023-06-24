import React from "react";
import ReactApexChart from "react-apexcharts";

const RadialChart = () => {

  const options = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%",
        },
      },
    },
    labels: ["Fake Scans"],
  };

  return (
    <div className="bg-white p-5 w-full  flex items-center">
      <ReactApexChart
        series={[10]}
        options={options}
        type="radialBar"
        height={270}
      />
    </div>
  );
};

export default RadialChart;
