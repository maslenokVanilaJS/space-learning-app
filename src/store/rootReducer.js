import { combineReducers } from "redux";
import { apodReducer } from './APODReducer/apodReducer';
import { marsRoverReducer } from "./MARS_ROVER_Reducer/MarsRoverReducer";
import { UI_HintReducer } from './UI_HintReducer/UI_HintReducer';
import { apodPagesReducer } from './APODPagesReducer/apodPagesReducer';

export const reducer=combineReducers({
    apodReducer,
    apodPagesReducer,
    marsRoverReducer,
    UI_HintReducer
})