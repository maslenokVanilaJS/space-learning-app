import { combineReducers } from "redux";
import { apodReducer } from './APODReducer/apodReducer';
import { marsRoverReducer } from "./MARS_ROVER_Reducer/MarsRoverReducer";
import { UI_HintReducer } from './UI_HintReducer/UI_HintReducer';

export const reducer=combineReducers({
    apodReducer,
    marsRoverReducer,
    UI_HintReducer
})