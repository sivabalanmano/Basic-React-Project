import { useEffect, useState } from "react";


export default function useLocalStorage(key,defaltValue){
    const [value,setValue]=useState(()=>{
        let currentValue;

        try{
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaltValue))
        }catch(e){
            console.log(e)
            currentValue = defaltValue
        }
        return currentValue
    })
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])
    return [value,setValue]
}