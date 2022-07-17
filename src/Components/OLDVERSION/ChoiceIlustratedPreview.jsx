
import { useEffect, useState } from "react"
import { ChoiceIlustratedPreviewView } from "./ChoiceIluatratedPreview.view"
import { GET_APOD } from '../../../../services/FetchAPI/getAPOD';
import { useDispatch, useSelector } from "react-redux";
import { SELECT_APOD_VIEW } from "../../../../store/APODReducer/thunk";
 
export const ChoiceIlustratedPreview =({props})=>{
    const APOD = useSelector(state => state.apodReducer.selectedLangAPOD);
    const [translated, setTranslated] = useState(null);
    const dispatch = useDispatch();
    const state = useSelector(state => state.apodReducer.selected);
    const [animation, setanimation] = useState(false);
    
    function setView(APODArray, date){
        console.log(date); 
dispatch(SELECT_APOD_VIEW(APODArray,date));
        

}

    console.log(useSelector(state => state.apodReducer.selected));  

console.log(APOD);

if (APOD&& APOD.lenght!=0) {
    return (
        <ChoiceIlustratedPreviewView props={{props,
        apod:APOD,
        setView,
        animation,
        translated:props.translated}}></ChoiceIlustratedPreviewView>
    )  
} else {
   return(
       <div>loading...</div>
   ) 
}
   
   
}