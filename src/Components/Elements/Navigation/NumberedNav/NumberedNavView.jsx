import { Wrapper } from "../../Boxes/Wrapper"
 
export const NumberedNavView=({props})=>{
    console.log(props);
    return(
        <Wrapper css={props.defaultStyles} >
        {props.pagesNumber.map((number)=>{
          return  <Wrapper css={props.css}>{number}</Wrapper>

        })}
        </Wrapper>
    )
}