/** @format */

import React from "react";
import Chart from "react-apexcharts";

const ApexChart = ({ data }) => {
  return (
    <div>
      <Chart
        type="bar"
        height={500}
        width="300%"
        series={[
          {
            name: "Doanh Thu",
            data: data,
          },
        ]}
        options={{
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            style: {
              fontSize: "24px",
            },
            categories: [
              "tháng 1",
              "tháng 2",
              "tháng 3",
              "tháng 4",
              "tháng 5",
              "tháng 6",
              "tháng 7",
              "tháng 8",
              "tháng 9",
              "tháng 10",
              "tháng 11",
              "tháng 12",
            ],
          },
          plotOptions: {
            bar: {
              borderRadius: 5,
              dataLabels: {
                position: "top", // top, center, bottom
              },
            },
          },
          fill: {
            colors: ["#32CD32"],
          },
          dataLabels: {
            enabled: true,
            formatter: function (val) {
              return val + "Tr";
            },
            offsetY: -20,
            style: {
              fontSize: "12px",
              colors: ["#000000"],
            },
          },
          yaxis: {
            title: {
              text: "VNĐ (Triệu)",
            },
          },
        }}
      />
    </div>
  );
};
export default ApexChart;
