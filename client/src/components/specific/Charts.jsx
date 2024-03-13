import React from 'react'
import { Line, Doughnut } from "react-chartjs-2";
import {
    CategoryScale,
    Chart as ChartJS,
    Tooltip,
    Filler,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Legend,
} from "chart.js";
import { litepurple, matblack, orange, purple } from '../../constants/color';
import { getLast7Days } from '../../lib/features';


ChartJS.register(
    CategoryScale,
    Tooltip,
    Filler,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Legend,
);

const labels = getLast7Days()

const LineChartOptions = {
    responsive: true,
    Plugins: {
        Legende: {
            display: false,
        },
        title: {
            display: false,
        }

    },

    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            beginAtZero: true,
            grid: {
                display: false,
            },
        },
    },

};

const LineChart = ({ value = [] }) => {
    const data = {
        labels,

        datasets: [{
            data: value,
            label: "Revenue",
            fill: true,
            backgroundColor: "rgba(75,12,192,0.2)",
            borderColor: purple,

        },


        ],
    };


    return <Line data={data} options={LineChartOptions} />

};



const doughnutChartOptions = {
    responsive: true,
    Plugin: {
        Legend: {
            display: false, 
        },
    },
};

const DoughnutChart = ({ value = [], labels = [] }) => {
    const data = {
        labels,
        datasets: [{
            data: value,
            backgroundColor: [litepurple, matblack],
            hoverBackgroundColor:[purple, "black"],
            borderColor: [purple, matblack],
            offset:10,

        },
        ],
    };

    return (
    <Doughnut 
    style={{zIndex:10}}
    data={data} 
    options={doughnutChartOptions} />)

};

export { LineChart, DoughnutChart };