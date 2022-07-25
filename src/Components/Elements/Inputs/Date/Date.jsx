import { DateView } from "./Date.view"

export const Date =({props})=>{
    console.log(props)
    return (
        (props.visible) ?
        <DateView  props={{
            onChange:props.onChange,
            date:props.date,
            
            
            }}></DateView> : null
    )
}