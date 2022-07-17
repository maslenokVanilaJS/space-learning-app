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