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

    case actionType.GET_APOD_LASTD:
        return { ...state,selectedLangAPOD:action.payload, lastDaysEng:action.payload,load:true,lang:"eng",selected:action.payload.getLastElement(),index:action.payload.length-1 }


         case actionType.GET_TRANSLATED_APOD_LASTD:
        return { ...state,selectedLangAPOD:action.payload, lastDaysRu:action.payload,load:true,loadRu:true,lang:"rus",selected:action.payload.getLastElement() }

    case actionType.SELECT_APOD_VIEW:

        return { ...state, selected:action.payload}

    case actionType.TOGGLE_LANG:

        return { ...state, lang:action.payload,selectedLangAPOD:(action.payload=="eng")?state.lastDaysEng:state.lastDaysRu}


        case actionType.SLIDER_NEXT:
        return { ...state,index:action.payload.index,selected:action.payload.arr[action.payload.index]}

        case actionType.OPEN_SFS:
        return { ...state,sliderFromSource:action.payload}

    default:
        return state
    }
}
