import Chart from 'chart.js/auto';
import React, { useEffect, useRef } from 'react';

export default function PieChart({ completed, incomplete }) {

    const chartRef = useRef(null)
    const chartInstance = useRef(null)


    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy()
        }

        const myChartRef = chartRef.current.getContext('2d');

        chartInstance.current = new Chart(myChartRef, {
            type: "pie",
            data: {
                labels: ["Incomplete", "Complete"],
                datasets: [
                    {
                        data: [incomplete, completed],
                        backgroundColor: [
                            'rgb(255, 99, 132',
                            'rgb(54, 162, 235'
                        ],
                    }
                ]
            }
        })
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy()
            }
        }
    })
    return (

        <div className='container row'>
            <div className="col-3">
                <canvas ref={chartRef} />
            </div>

        </div>
    )
}