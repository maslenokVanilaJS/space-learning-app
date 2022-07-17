import { actionType } from './const';


const UI_HintStore={
     confirmButton:false,
     hintCheckBox:false
}



export const UI_HintReducer=(state = UI_HintStore, action) => {
    switch (action.type) {

    case actionType.CONFIRM_HINT_READ_BUTTON:
        return { ...state,confirmButton:action.payload }


         case actionType.DONTSHOWMORE_CHECKBOX_ACTION:
        return { ...state,hintCheckBox:action.payload }


    default:
        return state
    }
}
