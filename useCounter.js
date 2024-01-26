import { useState } from "react"

export const useCounter=( intialValue=10)=>{

    const [counter, setCounter] = useState(intialValue)

    const increment=(value =1)=>{
        setCounter((current)=> current+value);
    }

    const decrement=(value =1)=>{

        if (counter===0) return;
        setCounter((current)=>current-value);
    }

    const reset=()=>{
        setCounter(intialValue);
    }

    return{
        // counter:counter,
        counter,
        increment,
        decrement,
        reset
    }
}