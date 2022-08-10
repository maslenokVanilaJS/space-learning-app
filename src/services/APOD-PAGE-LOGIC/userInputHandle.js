import { checkNumber } from "../INPUT-VALIDATION/inputCheckNumber";

export function userTextInputContentAmount(event, setcontentAmount){
console.log(setcontentAmount,event.target.value);
    const defaultOutput=5;

    if (typeof checkNumber(event.target.value)==='number') {
console.log('redx');
         setcontentAmount(event.target.value);

    }

 /*   if (typeof checkNumber(event.target.value)!=='number'&event.target.value!=='') {
        
        setcontentAmount(defaultOutput);
    }*/

}