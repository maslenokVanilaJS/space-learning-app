import { actionCreator } from "./creator";
import { actionType } from './const';
import { previewIconLogic } from '../../services/previewIconLogic/previewIconLogic';
const creator=actionCreator.CREATOR;
 

 export const CONFIRM_HINT_READ_BUTTON=(buttonState)=>{
     return (dispatch)=>{

        dispatch(creator(actionType.CONFIRM_HINT_READ_BUTTON,buttonState));
     }
 }
 export const  DONTSHOWMORE_CHECKBOX_ACTION=(checkboxState)=>{
     return (dispatch)=>{
console.log(checkboxState);
        dispatch(creator(actionType.DONTSHOWMORE_CHECKBOX_ACTION,checkboxState));
     }
 }

  export const CONFIRM_HINT_READ_BUTTON_SLIDER=(buttonState)=>{
     return (dispatch)=>{

        dispatch(creator(actionType.CONFIRM_HINT_READ_BUTTON_SLIDER,buttonState));
     }
 }
 export const  DONTSHOWMORE_CHECKBOX_ACTION_SLIDER=(checkboxState)=>{
     return (dispatch)=>{
console.log(checkboxState);
        dispatch(creator(actionType.DONTSHOWMORE_CHECKBOX_ACTION_SLIDER,checkboxState));
     }
 }

 export const  TOGGLE_HINTVIEW_GLOBAL=(viewState)=>{
     return (dispatch)=>{
console.log(viewState);
        dispatch(creator(actionType.TOGGLE_HINTVIEW_GLOBAL,viewState));
     }
 }