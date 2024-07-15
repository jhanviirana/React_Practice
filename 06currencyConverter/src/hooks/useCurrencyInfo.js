import {useEffect, useState} from 'react'

//here we made custom hooks


function useCurrencyInfo(currency){

    const [data,setData] = useState({})

    //automatic fetch call
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
        console.log(data)
    },[currency])
    console.log(data)
    return data
}

export default useCurrencyInfo;