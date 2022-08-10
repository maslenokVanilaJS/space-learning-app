import { SimpleTextInputView } from "./SimpleTextInput.view"

export const SimpleTextInput=({props})=>{

    const{onUserInput,setContentAmount,placeholder}=props;

    return(
        <SimpleTextInputView props={{onUserInput,css:props.css,setContentAmount,placeholder}}></SimpleTextInputView>
    )
}