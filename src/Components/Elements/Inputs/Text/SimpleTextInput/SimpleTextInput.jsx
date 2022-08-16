import { SimpleTextInputView } from "./SimpleTextInput.view"

export const SimpleTextInput=({props})=>{

    const{onUserInput,setContentAmount,placeholder,defaultValue}=props;

    return(
        <SimpleTextInputView props={{onUserInput,css:props.css,setContentAmount,placeholder,defaultValue}}></SimpleTextInputView>
    )
}