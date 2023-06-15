import React from "react";
import ReactApexChart from "react-apexcharts";

const MyChartComponent = () => {
  const series = [
    {
      name: "STOCK ABC",
      height: 700,
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ];

  const options = {
    chart: {
      type: "area",
      zoom: {
        enabled: false,
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },

    title: {
      text: " Number of Scans ",
      align: "left",
      fontSize: 16,
    },
    subtitle: {
      text: "Per year",
      align: "left",
    },
    labels: [1991, 1992, 1993, 1994, 1995, 1996, 1997],
    xaxis: {
      type: "number",
    },
    yaxis: {
      opposite: false,
    },
    legend: {
      horizontalAlign: "right",
    },
  };

  return (
    <div className="bg-white p-5 w-full ">
      <ReactApexChart
        series={series}
        options={options}
        type="area"
        height={350}
      />
    </div>
  );
};

export default MyChartComponent;
