import { useEffect } from "react"


 export function useArrayOfNumbersFrom(number,set,watch){
 useEffect(()=>{
    
     let arrayOfNumbers=[];

     for (let index = 1; index <= number; index++) {
        arrayOfNumbers.push(index);
        
    }
    console.log(number);

   set(arrayOfNumbers);

    },watch)
 
}