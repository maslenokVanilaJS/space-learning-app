import { SimpleCheckBox } from "../../Inputs/CheckBoxes/SimpleCheckBox/SimpleCheckBox";
import { HeadingDisplay } from "../../Text/HeadingDisplay/HeadingDisplay"
import { ModalBox } from "../ModalBox/ModalBox"
import { TextBox } from '../../Text/TextBox/TextBox';
import { cssModalBox } from '../ModalBox/css';
import { css } from './css';
import { BasicBtn } from '../../Buttons/BasicBtn/BasicBtn';
 
export const ModalHintView=({props})=>{
    console.log(props);
    return(
        <ModalBox top="20%" left="20%" css={cssModalBox+' '+ css}>
            <HeadingDisplay props={ props.hintTitle }></HeadingDisplay>
            <TextBox props={props.hint}></TextBox>
            <SimpleCheckBox props={{ 
                action:props.confirmAction,
                dispatch:props.dispatch
            }}></SimpleCheckBox>
            <BasicBtn  onClick={()=>{
                props.confirmChange(!props.confirmState);
                props.dispatch(props.confirmButtonAction(!props.confirmState));
            }} >Thank You!</BasicBtn>
        </ModalBox>
    )
}