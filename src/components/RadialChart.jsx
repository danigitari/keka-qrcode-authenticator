import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function DoughnutChartDemo({data}) {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);

    const options = {
      cutout: "60%",
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card flex justify-center h-full sm:h-96 pb-0 sm:pb-5">
      <Chart
        type="doughnut"
        data={data}
        options={chartOptions}
        className="w-full md:w-30rem"
      />
    </div>
  );
}
