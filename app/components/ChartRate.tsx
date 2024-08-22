import { time } from "console";
import { list } from "postcss";
import { useEffect, useState } from "react";
import { Chart, Doughnut, Line  } from 'react-chartjs-2';


export default async function ChartRate(timestamp: any, rateUsd: any){
    const data = {labels: timestamp,
            datasets: [
                {label:  '# of Votes',
                data: rateUsd,
                borderWidth: 1
                }
            ]
    } 
    
    return(

        <Line data= {data}/>
    )


}
