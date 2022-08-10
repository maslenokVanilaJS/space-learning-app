import { actionType } from './const';


const apodPagesStore={
    load:false,
    loadRu:false,
    lastDaysEng:null,
    lastDaysRu:null,
    selected:null,
    lang:null,
    selectedLangAPOD:null,
    index:null,
    sliderFromSource:false,
 }



export const apodPagesReducer=(state = apodPagesStore, action) => {
    switch (action.type) {

    case actionType.GET_APODPAGE_LASTD:
        return { ...state,selectedLangAPOD:action.payload, lastDaysEng:action.payload,load:true,lang:"eng",selected:action.payload.getLastElement(),index:action.payload.length-1 }


         case actionType.GET_TRANSLATED_APODPAGE_LASTD:
        return { ...state,selectedLangAPOD:action.payload, lastDaysRu:action.payload,load:true,loadRu:true,lang:"rus",selected:action.payload.getLastElement() }

    
    default:
        return state
    }
}
