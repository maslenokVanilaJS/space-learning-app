import { Wrapper } from "../../Boxes/Wrapper"

 
export const BlockText= ({props})=>{
return (
    <Wrapper width={props.width}  height={props.height}>
<p>{props.text}</p>
    </Wrapper>
)
}