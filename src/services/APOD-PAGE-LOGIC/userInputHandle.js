import { checkNumber } from "../INPUT-VALIDATION/inputCheckNumber";
import { userInputToNumber } from './../INPUT-VALIDATION/userInputToNumber';

export function userTextInputContentAmount(event, setcontentAmount,defaultValue){
console.log(setcontentAmount,event.target.value);
    const defaultOutput=5;

    if(event.target.value===""){
        setcontentAmount(1);
        event.target.value=1;
    }

    if (typeof checkNumber(event.target.value)==='number'&event.target.value!=="") {
console.log('redx');
         setcontentAmount( userInputToNumber(event.target.value));

    }

 /*   if (typeof checkNumber(event.target.value)!=='number'&event.target.value!=='') {
        
        setcontentAmount(defaultOutput);
    }*/

}