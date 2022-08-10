import { actionCreator } from "./creator";
import { actionType } from './const';
import { previewIconLogic } from '../../services/previewIconLogic/previewIconLogic';
const creator=actionCreator.CREATOR;
const getTarget=previewIconLogic.filterAPOD;
export const args={
    creator:actionCreator,
    type:actionType.GET_APODPAGE_LASTD
}

export const args1={
    creator:actionCreator,
    type:actionType.GET_TRANSLATED_APODPAGE_LASTD
}

export const args2={
    creator:actionCreator,
    type:actionType.TOGGLE_LANG
}

export const args3={
    creator:actionCreator,
    type:actionType.SLIDER_NEXT
}

export const GET_APODPAGE_LASTD=()=>{
          

    return (dispatch,fetchApod,count)=>{
        console.log(dispatch);
 fetchApod(dispatch,args,count);
    };
}


 

export const GET_TRANSLATED_APODPAGE_LASTD=()=>{
          

    return (dispatch,fetchApod,count)=>{
        console.log(dispatch);
 fetchApod(dispatch,args,count);
    };
}


 
 
