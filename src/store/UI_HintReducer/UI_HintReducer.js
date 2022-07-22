import { actionType } from './const';


const UI_HintStore={
     confirmButton:false,
     hintCheckBox:false,
     confirmButtonSlider:false,
     hintCheckBoxSlider:false,
     globalViewToggle:{
         display:null
     }
}



export const UI_HintReducer=(state = UI_HintStore, action) => {
    switch (action.type) {

    case actionType.CONFIRM_HINT_READ_BUTTON:
        return { ...state,confirmButton:action.payload }


         case actionType.DONTSHOWMORE_CHECKBOX_ACTION:
        return { ...state,hintCheckBox:action.payload }

        case actionType.CONFIRM_HINT_READ_BUTTON_SLIDER:
        return { ...state,confirmButtonSlider:action.payload }


         case actionType.DONTSHOWMORE_CHECKBOX_ACTION_SLIDER:
        return { ...state,hintCheckBoxSlider:action.payload }

            case actionType.TOGGLE_HINTVIEW_GLOBAL:
        return { ...state,globalViewToggle :{display:action.payload} }
        
    default:
        return state
    }
}
