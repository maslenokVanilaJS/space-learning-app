import { MarsRoverView } from "./MarsRoverView";
import { MARSROVER_PHOTOS } from './../../../../services/FetchAPI/getMarsRoversPhoto';
import { useEffect } from "react";
import { args } from './../../../../store/MARS_ROVER_Reducer/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { MARSROVER_CPIL_MAP } from './../../../../services/MARS_ROVER_UI_LOGIC/ChoicePreviewIconLogic';
 
 export const MarsRover=()=>{
    //const source ;
    const state = useSelector(state => state.marsRoverReducer);
    const dispatch = useDispatch();
    const h1='Mars Rovers Photo - View Mars photos !';
     const text ="This API is designed to collect image data gathered by NASA's Perseverance, Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists.";
    const logic=MARSROVER_CPIL_MAP;
    useEffect(() => {
        MARSROVER_PHOTOS.fetchLatestPhotosFrom("curiosity",dispatch,args) ;
     }, []);

     useEffect(() => {
         
         console.log(state);

     }, [state]);
    

        if (state.load) {
            return (
            < MarsRoverView props={{
                source: state.lastPhotos,
                logic,
                state,
                h1,
                text
                }}></MarsRoverView>);
        }else{
            return(
            <div>loadering////=</div>
            );
        }
      
    
}