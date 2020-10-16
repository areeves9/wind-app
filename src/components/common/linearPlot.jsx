import React from 'react';
import { Line } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';


const LinearPlot = props => {
    const {precipitation, time} = props;

    const nthDateTime = (arr, nth) => arr.filter((e, i) => i % nth === 0);
    const dtToLocal = arr => arr.map(dt => new Date(dt*1000).toLocaleTimeString([], {hour: '2-digit'}).replace(/^0+/, "").trim())

    const data = {
        labels: dtToLocal(nthDateTime(time[0], 4)),
        datasets: [
          {
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "black",
            borderWidth: 4,
            data: precipitation,
            font: {
              weight: 'bold',
            },
            fill: false,
            label: "% Probability",
          },
        ],
      };

    const options = {
        events: [],
        plugins: {
          // Change options for ALL labels of THIS CHART
          datalabels: {
            formatter: function(value, context) {
              return value + `%`
            },
            font : {
              weight: 'bold',
              size: 16,
            },
            align: 'end',
            color: '#6c757d',
            labels: {
              title: {},
              value: {},
            },
            display: true,
            offset: 7,
          }
        },
        responsive: true,
        responsiveAnimationDuration: 100,
        scaleBeginAtZero: true,
        scales: {
          xAxes: [{
            display: true,
            gridLines: {
              display: false
            },
            ticks: {
              beginAtZero: true,
              fontStyle: 'bold',
              fontSize: 14,
            }
          }],
          yAxes: [{
            display: false,
            gridLines: {
              display: false,
            },
            ticks: {
              beginAtZero: true,
            }
          }],
        },
        title: {
            display: false,
            text: 'POP',
        }
      };

      const legend = {
        display: false,
        position: "bottom",
        labels: {
          fontColor: "#323130",
          fontSize: 12,
        }
      };


    return (data.datasets[0].data.every(value => value === "0")) ? 
    <p className="text-left">None</p> :
    <Line data={data} legend={legend} options={options} />
};

export default LinearPlot;