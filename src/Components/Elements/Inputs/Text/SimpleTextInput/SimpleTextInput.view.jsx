import { SimpleTextInputStyled } from "./SimpleTextInput.styled"

export const SimpleTextInputView=({props})=>{
    return(
        <SimpleTextInputStyled type="text" placeholder={props.placeholder} props={props.css} onChange={(event) => { props.onUserInput(event,props.setContentAmount)}}></SimpleTextInputStyled>
    )
}