import {useState,useEffect} from 'react'

import axios from 'axios'

import {marketstackkey,tdkey} from "./../apikey.js"

import './../style/chartstyle.css'

const Chart = ({ticker,stockprice,setStockprice}) => {
    const [stockdata,setStockdata] = useState({
        'name':'nostock'
    })
    //const [stockprice,setStockprice] = useState(-1)
    useEffect(() => {
        console.log('effect ' + ticker + ' ' + marketstackkey)
        axios
            .get('http://api.marketstack.com/v1/tickers/'+ticker.toUpperCase()+'?access_key=' + marketstackkey)
            .then(response => {
                console.log(response.data)
                setStockdata(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [ticker])

    useEffect(() => {
        console.log('effect ' + ticker)
        axios
            .get('http://api.marketstack.com/v1/tickers/'+ticker.toUpperCase()+'/eod/latest?access_key=' + marketstackkey)
            .then(response => {
                console.log(response.data.close)
                setStockprice(response.data.close)
            })
            .catch(err => {
                console.log(err)
            })
    }, [ticker])

    if(stockdata.name === 'nostock') return (<div></div>)

    return (
        <div class='chart'>
            <h1>{stockdata.symbol}: {stockdata.name}</h1>
            <h2>{stockdata.stock_exchange.acronym}</h2>
            <h3>Price: ${stockprice}</h3>
        </div>
        
    )

    


}

export default Chart