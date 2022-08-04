
import { DateStyled } from './Date.styled';
export const DateView=({props})=>{
    return (

        <DateStyled onLoad={(event) => { props.onChange(event.target.value) }} onChange={(event)=>{props.onChange(event.target.value)}} type="date" name="date" id="date"/>
     
        )

}