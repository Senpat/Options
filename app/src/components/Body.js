import {useState,useEffect} from 'react'
import axios from 'axios'

import Chart from "./Chart"
import Result from "./Result"

import marketstackkey from "./../apikey"

import '../style/bodystyle.css'

const Body = () => {
    const [searchtext,setSearchtext] = useState("")
    const [selectedtext,setSelectedtext] = useState("")
    
    const [expprice,setExpprice] = useState("")
    const [date,setDate] = useState("")

    const [selectedexpprice,setSelectedexpprice] = useState("")
    const [selecteddate,setSelecteddate] = useState("")
    
    const [stockprice,setStockprice] = useState(-1)

    const submitparams = () => {
        setSelectedexpprice(expprice)
        setSelecteddate(date)
    }

    return (
        <div class='body'>
            <input class='searchbox' type='text' value={searchtext} placeholder='Search any stock or ticker' onChange={(e) => {setSearchtext(e.target.value)}} />
            <button class='submitsearch' onClick={() => {setSelectedtext(searchtext)}}>Submit</button> 
            <Chart ticker={selectedtext} stockprice={stockprice} setStockprice={setStockprice} />
            
            <div class='form'>
                <input class='pricebox' type='text' value={expprice} placeholder='100.00' onChange={(e) => {setExpprice(e.target.value)}} />
                <input class='datebox' type='date' value={date} onChange={(e) => {setDate(e.target.value)}} />
                <button class='submitparams' onClick={submitparams}>Go</button> 
            </div>
            
            <Result ticker={selectedtext} pricestring={selectedexpprice} date={selecteddate} currentprice={stockprice}/>
            
        </div>
    )
}

export default Body