import { actionCreator } from "./creator";
import { actionType } from './const';
import { previewIconLogic } from '../../services/previewIconLogic/previewIconLogic';
const creator=actionCreator.CREATOR;
const getTarget=previewIconLogic.filterAPOD;
export const args={
    creator:actionCreator,
    type:actionType.GET_APOD_LASTD
}

export const args1={
    creator:actionCreator,
    type:actionType.GET_TRANSLATED_APOD_LASTD
}

export const args2={
    creator:actionCreator,
    type:actionType.TOGGLE_LANG
}

export const args3={
    creator:actionCreator,
    type:actionType.SLIDER_NEXT
}

export const GET_APOD_LASTD=()=>{
          

    return (dispatch,fetchApod,count)=>{
        console.log(dispatch);
 fetchApod(dispatch,args,count);
    };
}


export const SELECT_APOD_VIEW = (APODArray,date)=>{
     console.log(date);
     return (dispatch)=>{
        console.log(date)
     dispatch(creator(actionType.SELECT_APOD_VIEW,getTarget(APODArray,date)));
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

export const SLIDER_NEXT=()=>{
          

    return  (event,next,dispatch,obj)=>{
        
       next(event,dispatch,args3,{index:obj.index,arr:obj.arr});
    }
}

export const SLIDER_BACK=(next,dispatch,index,arr)=>{
          

    return  ()=>{
        
     next(dispatch,args3,{index,arr});
    }
}

export const OPEN_SFS=()=>{
          

    return  (dispatch)=>{
        
  dispatch(creator(actionType.OPEN_SFS,true));
    }
}
