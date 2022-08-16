import { NumberedNav } from "../Navigation/NumberedNav/NumberedNav"

export const PaginateView = ({ props }) => {
    console.log(props)
    return (
        <div>
            {props.childrensTop.map((children)=>{
                return children
            })}
            { props.contentView}
       
        <NumberedNav props={{
                contentAmount: props.ctnAmount,
            contentQuantity: props.contentQuantity,
            contentAmountByMedia:props.ctnAmountByMedia,
            contentQuantityByMedia: props.ctnQuantityByMedia,

            onClick:props.onClick
         }}></NumberedNav>
        </div>
    )
}