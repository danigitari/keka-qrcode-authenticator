import React from "react";
import ReactApexChart from "react-apexcharts";

const RadialChart = () => {
  const series = [
    {
      name: "Scans",
      height: 700,
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ];

  const options =   {
              chart: {
                height: 350,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: '70%',
                  }
                },
              },
              labels: ['Fake Scans'],
            }
          
          
        
          
          
   


  return (
    <div className="bg-white p-5 w-full  ">
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
