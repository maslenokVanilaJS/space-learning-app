import { SimpleCheckBox } from "../../Inputs/CheckBoxes/SimpleCheckBox/SimpleCheckBox";
import { HeadingDisplay } from "../../Text/HeadingDisplay/HeadingDisplay"
import { ModalBox } from "../ModalBox/ModalBox"
import { TextBox } from './../../Text/TextBox/TextBox';
import { cssModalBox } from './../ModalBox/css';
import { css } from './css';
import { BasicBtn } from './../../Buttons/BasicBtn/BasicBtn';
import { ModalHintView } from "./ModalHintView";
import { useDispatch, useSelector } from 'react-redux';
import { CONFIRM_HINT_READ_BUTTON, CONFIRM_HINT_READ_BUTTON_SLIDER, DONTSHOWMORE_CHECKBOX_ACTION, DONTSHOWMORE_CHECKBOX_ACTION_SLIDER } from './../../../../store/UI_HintReducer/thunk';
import { useState } from "react";
import { useEffect } from "react";
import { OnScrollShow } from './../../../../services/scrollShow/scrollShow';
import { useShowOnScrollTarget } from "../../../../hooks/useShowOnScrollTarget";
   export const ModalHint=({props})=>{
    const dispatch = useDispatch();
    const [confirm, setconfirm] = useState(props.hide);
    const [removeListener, setremoveListener] = useState(false);
    if (props.scroll){
     Object.defineProperties(props,{
    dispatch:{value:dispatch,writable:false},
    confirmAction:{ value:DONTSHOWMORE_CHECKBOX_ACTION,writable:true},
    confirmChange:{value:setconfirm,writable:true},
    confirmState:{value:confirm,writable:true},
    confirmButtonAction:{value:CONFIRM_HINT_READ_BUTTON,writable:true}
 });
};

       if (!props.scroll) {
           Object.defineProperties(props, {
               dispatch: { value: dispatch, writable: false },
               confirmAction: { value: DONTSHOWMORE_CHECKBOX_ACTION_SLIDER, writable: true },
               confirmChange: { value: setconfirm, writable: true },
               confirmState: { value: confirm, writable: true },
               confirmButtonAction: { value: CONFIRM_HINT_READ_BUTTON_SLIDER, writable: true }
           });
       };

 const state = useSelector(state => state.UI_HintReducer);
       const globalViewToggle = useSelector(state => state.UI_HintReducer.globalViewToggle.display);
 let showHintOnScroll=null;
 
       
           useShowOnScrollTarget(props.target, setconfirm, props.scroll, state);

       useEffect(() => {
if (props.scroll&&globalViewToggle==false) {
    console.log('globalViewToggle');
    setconfirm(true);
}
           console.log(globalViewToggle);


       }, [globalViewToggle]);
      
       

useEffect(()=>{
    
    if (props.scroll == false && state.confirmButtonSlider == true && state.hintCheckBoxSlider==true){
setconfirm(true);
    }

 },[state]);

    console.log(props);
       console.log(globalViewToggle);
    return(
        (confirm!=true)?
        <ModalHintView props={props} ></ModalHintView>:
        null
    )
} 
