import React from 'react'
import {Line} from 'react-chartjs-2'
import styles from "../styles";
import { Chart, registerables } from "chart.js"
Chart.register(...registerables);
const LineChart = ({coinHistory,currentPrice,coinName}) => {
    const coinPrice = [];
    const coinTimeStamp = [];
    for (let i = (coinHistory?.data?.history?.length) - 1 ; i >= 0; i--) {
        coinPrice.push(coinHistory.data.history[i].price)
        var time = new Date(parseInt(coinHistory.data.history[i].timestamp)* 1000).toLocaleString()
        coinTimeStamp.push(time)
    }
    const data = {
        labels:coinTimeStamp,
        datasets:[
            {
                label: 'Price in USD',
                data: coinPrice,
                fill:false,
                backgroundColor:'#0071bd',
                borderColor:'#0071bd',

            }
        ]
    }
    const options = {
        scales:{
            yAxes:[
                {
                    ticks:{
                        beginAtZero:true
                    }
                }
            ]
        }
    }
    console.log(coinHistory)
    console.log(coinTimeStamp)

  return (
    <div>
        <div className={styles.cryptoTitle}>
            {coinName} Price Chart {currentPrice} 
            <div className={`${coinHistory?.data?.change.indexOf("-")<0?"text-green-500" : "text-red-500"}`}>
            {coinHistory?.data?.change}%
            </div>
           
        </div>
        <Line data={data} options={options} />
    </div>
  )
}

export default LineChart