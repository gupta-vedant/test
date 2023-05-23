import React from 'react'
import "./chart.css"
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';



const labels = ["Feb 03 2023", "Feb 03 2023", "Feb 03 2023", "Feb 03 2023"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "System Status",
      backgroundColor: "grey",
      borderColor: "green",
      data: [100 , 200, 300 , 400, 500, 600],
       
      
    },
  ],
};

const LineChart = () => {
  return (
    <div className='chart'>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
