
import { useState } from 'react';
import { PaginateView } from './Paginate.view';
import { useEffect } from 'react';
 
export const Paginate=({props})=>{
   console.log(props)
    const { contentView, ctnAmount, ctnQuantity, childrensTop,page, source, setpage,setuserContentAmount,setuserContentQuantity } = props;
   
    const [pageNumber, setpageNumber] = useState(0);
    let slicesFromContentAmount=[];
 
    useEffect(() => {

        setpageNumber(0);
    }, [props.ctnAmount, props.ctnQuantity]);

    useEffect(() => {
        if (props.ctnQuantity > props.ctnAmount) {
            props.setuserContentQuantity(props.ctnAmount);
            console.log(props.ctnQuantity);
            setpageNumber(0);

        }
        slicesFromContentAmount = props.source.inverseFlat(props.ctnQuantity);
console.log(pageNumber);

if(pageNumber<slicesFromContentAmount.length){
    setpage(slicesFromContentAmount[pageNumber]);
}
 
        console.log(slicesFromContentAmount);
        console.log(props.ctnQuantity, props.page)

    }, [props.source, props.ctnQuantity, pageNumber, props.ctnAmount]);
    console.log(ctnAmount)
  /*  useEffect(() => {
        console.log(ctnAmount,pageNumber);
        if (ctnAmount < ctnQuantity) {
         //   setuserContentQuantity(ctnAmount);
        }
        
          
            setpage(source.inverseFlat(ctnQuantity)[pageNumber]);
        console.log(ctnQuantity,page)
        
    }, [pageNumber,ctnAmount,ctnQuantity,source]);*/
    

    return (
        <PaginateView props={{
            contentView,
            ctnAmount,
            ctnAmountByMedia:props.setuserContentAmountByMedia,
            ctnQuantityByMedia: props.setuserContentQuantityByMedia,

            setcontentAmount: props.setuserContentAmount,
            contentQuantity: props.ctnQuantity,
            setcontentQuantity: props.setuserContentQuantity,
            childrensTop,
            onClick:setpageNumber
          
        }}></PaginateView>
    )
}