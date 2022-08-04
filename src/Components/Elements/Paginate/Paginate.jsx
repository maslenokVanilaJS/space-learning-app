
import { useState } from 'react';
import { PaginateView } from './Paginate.view';
 
export const Paginate=({props})=>{
   console.log(props)
    const { contentView,ctnAmount,ctnQuantity } = props;
    const [contentAmount, setcontentAmount] = useState(ctnAmount); 
    const [contentQuantity, setcontentQuantity] = useState(ctnQuantity); 
    console.log(ctnAmount)

    return (
        <PaginateView props={{
            contentView,
             contentAmount,
            setcontentAmount,
            contentQuantity,
            setcontentQuantity,
          
        }}></PaginateView>
    )
}