import {useState,useEffect} from 'react'

import axios from 'axios'

import ResultRow from './ResultRow'

import blackScholes from './blackscholes'
import {marketstackkey,tdkey} from "./../apikey.js"

const MS_PER_YEAR = 1000*60*60*24*365

const calcreturn = (option,estprice,date) => {
    const dateutc = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    const timetoexp = (option.expirationDate-dateutc)/MS_PER_YEAR
    const optionprice = (option.bid+option.ask)/2
    return (blackScholes(estprice,option.strikePrice,timetoexp,option.theoreticalVolatility/100.0,0.027,"call")/optionprice-1)*100
}

const Result = ({ticker,pricestring,date,currentprice}) => {
    const [optiondata,setOptiondata] = useState({
        "symbol":"nostock",
        "status":"FAILED"
    })

    useEffect(() => {
        //console.log('effect')
        axios
            .get('https://api.tdameritrade.com/v1/marketdata/chains?apikey='+tdkey+'&symbol='+ticker.toUpperCase()+'&contractType=CALL&fromDate='+date)
            .then(response => {
                //console.log(response.data)
                setOptiondata(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [ticker,date])


    if(ticker === '' || pricestring === '' || date==='') return (<div></div>)
    
    const price = parseFloat(pricestring)
    if(isNaN(price)) return (<div><p>Non-numeric value for price</p></div>)

    if(optiondata.symbol === 'nostock') return (<div></div>)

    if(optiondata.status === 'FAILED') return (<div>Failed to retreive options data</div>)

    let alloptions = []
    for(let expdate in optiondata.callExpDateMap){
        //console.log(expdate)
        if(!optiondata.callExpDateMap.hasOwnProperty(expdate)) continue
        for(let strike in optiondata.callExpDateMap[expdate]){
            //console.log(strike)
            for(let k = 0; k < optiondata.callExpDateMap[expdate][strike].length; k++){
                if(optiondata.callExpDateMap[expdate][strike][k].ask === 0 || optiondata.callExpDateMap[expdate][strike][k].ask === 0) continue
                alloptions.push({
                    "option":optiondata.callExpDateMap[expdate][strike][k],
                    "estimatedreturn":calcreturn(optiondata.callExpDateMap[expdate][strike][k],price,new Date(date))
                })
            }
        }
    }

    alloptions.sort((a,b) => {
        return a.estimatedreturn-b.estimatedreturn
    }).reverse()

    let topoptions = alloptions.slice(0,10);
    //console.log(topoptions[0].option)

    //console.log(topoptions)
    return (
        <div class='result'>
            {topoptions.map((element, index) => (
                <ResultRow rank={index+1} option={element.option} estimatedreturn={element.estimatedreturn.toFixed(2)} />
                
            ))}
        </div>
        
    )

    


}

export default Result