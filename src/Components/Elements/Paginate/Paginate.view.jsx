import { NumberedNav } from "../Navigation/NumberedNav/NumberedNav"

export const PaginateView = ({ props }) => {
    console.log(props)
    return (
        <div>
       
             { props.contentView}
       
        <NumberedNav props={{
            contentAmount:props.contentAmount,
            contentQuantity: props.contentQuantity,
         }}></NumberedNav>
        </div>
    )
}