import { actionCreator } from "./creator";
import { actionType } from './const';
import { previewIconLogic } from '../../services/previewIconLogic/previewIconLogic';
const creator=actionCreator.CREATOR;
const getTarget=previewIconLogic.filterMars;
export const args={
    creator:actionCreator,
    type:actionType.GET_MARSROVER_PHOTOS
}

export const args1={
    creator:actionCreator,
    type:actionType.GET_TRANSLATED_APOD_LASTD
}

export const args2={
    creator:actionCreator,
    type:actionType.TOGGLE_LANG
}

export const GET_MARSROVER_PHOTOS=()=>{
          

    return (dispatch,fetchApod,count)=>{
        console.log(dispatch);
 fetchApod(dispatch,args,count);
    };
}


export const SELECT_MARSROVER_VIEW = (APODArray,date)=>{
     console.log(date);
     return (dispatch)=>{
        console.log(date)
     dispatch(creator(actionType.SELECT_MARSROVER_VIEW,getTarget(APODArray,date)));
    }
}

export const GET_TRANSLATED_APOD_LASTD=()=>{
          

    return (dispatch,fetchApod,count)=>{
        console.log(dispatch);
 fetchApod(dispatch,args,count);
    };
}


export const SHADOWGET_TRANSLATED_APOD_LASTD=()=>{
          

    return (dispatch,fetchApod,count)=>{
        console.log(dispatch);
 fetchApod(dispatch,args,count);
    };
}

export const TOGGLE_LANG=(lang)=>{
          

    return  (dispatch)=>{
        console.log(lang);
     dispatch(creator(actionType.TOGGLE_LANG,lang));
    }
}