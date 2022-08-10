
import { useState } from 'react';
import { PaginateView } from './Paginate.view';
import { useEffect } from 'react';
 
export const Paginate=({props})=>{
   console.log(props)
    const { contentView,ctnAmount,ctnQuantity,childrensTop,source,setpage,setuserContentQuantity } = props;
    const [contentAmount, setcontentAmount] = useState(ctnAmount); 
    const [contentQuantity, setcontentQuantity] = useState(ctnQuantity); 
    const [pagedContent, setpagedContent] = useState(null);
    const [pageNumber, setpageNumber] = useState(0);
    let slicesFromContentAmount=[];
    const [userPageChoose, setuserPageChoose] = useState(source.inverseFlat(ctnQuantity)[0]);

    useEffect(() => {
        if (ctnAmount<ctnQuantity) {
            setuserContentQuantity(ctnQuantity);
        }
        slicesFromContentAmount = source.inverseFlat(ctnQuantity);
        console.log(slicesFromContentAmount);
    }, [source,ctnQuantity]);
    console.log(ctnAmount)
    useEffect(() => {
        console.log(ctnAmount,pageNumber);
 
        setpage(source.inverseFlat(ctnQuantity)[pageNumber]);
    }, [pageNumber,ctnAmount,ctnQuantity]);
    useEffect(() => {
        
setpageNumber(0);
    }, [ctnAmount, ctnQuantity]);

    return (
        <PaginateView props={{
            contentView,
            ctnAmount,
            setcontentAmount,
            contentQuantity: ctnQuantity,
            setcontentQuantity,
            childrensTop,
            onClick:setpageNumber
          
        }}></PaginateView>
    )
}