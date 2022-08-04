import { useEffect } from "react"


 export function useArrayOfNumbersFrom(number){

    let arrayOfNumbers=[];

    for (let index = 1; index <= number; index++) {
        arrayOfNumbers.push(index);
        
    }
    console.log(number);
    return {arrayOfNumbers};

}