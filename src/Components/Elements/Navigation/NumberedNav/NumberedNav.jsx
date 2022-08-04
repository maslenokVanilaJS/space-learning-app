 
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
        const {contentAmount,contentQuantity}=props;
        console.log(contentAmount,  contentQuantity)

        let { arrayOfNumbers } = useArrayOfNumbersFrom(Math.floor(contentAmount / contentQuantity));
        console.log(arrayOfNumbers)
        useEffect(() => {

            setpagesNumber(arrayOfNumbers);


        }, []);
       
        

        return(

            
    (pagesNumber)?<NumberedNavView props={{css,
                            pagesNumber,
                            defaultStyles  }}>
                                
    </NumberedNavView>:null
        )
    }