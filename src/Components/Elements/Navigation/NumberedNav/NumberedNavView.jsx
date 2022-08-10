import { Wrapper } from "../../Boxes/Wrapper"
 
export const NumberedNavView=({props})=>{
    console.log(props);
    return(
        <Wrapper css={props.defaultStyles} >
        {props.pagesNumber.map((number,index)=>{
          return  <Wrapper key={index} onClick={()=>{props.onClick(index);console.log('clocl');props.setcurrent("violet")}} current={props.current} css={props.css}>{number}</Wrapper>

        })}
        </Wrapper>
    )
}