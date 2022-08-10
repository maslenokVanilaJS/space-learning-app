 import { formatSpaceAndStrings } from "./inputFormatSpaceAndStrings";

 


 export function checkNumber(valueToCheck) {
     console.log(typeof valueToCheck);
  valueToCheck= formatSpaceAndStrings(valueToCheck);
     console.log(typeof valueToCheck);

   if(isNaN(valueToCheck)){
       return null;
   } 

   return valueToCheck;
}
 