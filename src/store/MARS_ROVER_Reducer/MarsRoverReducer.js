import { actionType } from './const';


const marsRoverStore={
    load:false,
    lastPhotos:null,
    selectedView:null,
    
}



export const  marsRoverReducer=(state = marsRoverStore, action) => {
    switch (action.type) {

    case actionType.GET_MARSROVER_PHOTOS:
        console.log(action.payload);
        return { ...state,lastPhotos:action.payload,load:true,selectedView:action.payload.getLastElement() }

case actionType.SELECT_MARSROVER_VIEW:
        console.log(action.payload);
 return { ...state, selectedView:action.payload}       

    default:
        return state
    }
}
