 
 import { useEffect, useState } from 'react';
import { defaultStyles } from './NumberedNavDefaultStyles';
 import { NumberedNavView } from './NumberedNavView';
 import { useArrayOfNumbersFrom } from './../../../../hooks/useArrayOfNumbersFrom';
 const css=`
background:blue;
color:white;
width:50px;
height:50px;
padding:10px;

&:hover{
      box-shadow:-1px 2px 17px 1px black;
      border-radius:10px;
      transition:all 0.3s;
    }
 `;
    export const NumberedNav=({props})=>{
        const [pagesNumber, setpagesNumber] = useState(null); 
        const [contentAmount, setcontentAmount] = useState(props.contentAmount);
        const [contentQuantity, setcontentQuantity] = useState(props.contentQuantity);
        const [current, setcurrent] = useState(null);
        const{onClick}=props;
        console.log(contentAmount, props.contentQuantity)
        
        useEffect(() => {
            console.log(props.contentAmount, contentQuantity)

            setcontentAmount(props.contentAmount);
            console.log(contentAmount, contentQuantity)

            let number = Math.floor(props.contentAmount / props.contentQuantity);
            let arrayOfNumbers = [];

            if (props.contentAmount<=1) {
                number=1;
            }
            for (let index = 1; index <= number; index++) {
                arrayOfNumbers.push(index);

            }
            console.log(arrayOfNumbers);
setpagesNumber(arrayOfNumbers);
            console.log(contentAmount, props.contentQuantity)


        }, [props.contentAmount, props.contentQuantity]);
        
       
        

        return(

            
    (pagesNumber)?<NumberedNavView props={{css,
                            pagesNumber,
                            current,
                            setcurrent,
                            defaultStyles,
                            onClick  }}>
                                
    </NumberedNavView>:null
        )
    }