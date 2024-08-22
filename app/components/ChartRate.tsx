'use client'
import { Chart as ChartJS, registerables } from 'chart.js';
import { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';
import getData from '../utils/utils';
ChartJS.register(...registerables);

export default function ChartRate() {
    const [data, setData] = useState(
        {
            labels: [],
            datasets: [
                {
                    label: 'BTC',
                    data: [],
                }
            ]
        }
    )

    useEffect(() => {
        const interval = setInterval(() => getData().then((res) => setData(res)), 1000);
        return () => {
            clearInterval(interval);
        };
    }, [])

    return (

        <Chart type='line' data={data} />
    )


}
