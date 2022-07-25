
import { useEffect, useState } from "react"
import { ChoiceIlustratedPreviewView } from "./ChoiceIluatratedPreview.view"
import { GET_APOD } from '../../../../services/FetchAPI/getAPOD';
import { useDispatch, useSelector } from "react-redux";
import { SELECT_APOD_VIEW } from "../../../../store/APODReducer/thunk";
 
export const ChoiceIlustratedPreview =({props})=>{
    const source = props.source;
    const dispatch = useDispatch();
    const logic=props.logic;
    const [animation, setanimation] = useState(false);
    const h1=props.h1;
    const text=props.text;
    const componentsTop=props.componentsTop
    const composeTop=props.component;
    const composeTop1 = props.component1;

console.log(props.source);


if (source&& source.lenght!=0) {
    return (
        <ChoiceIlustratedPreviewView props={{props,
        source,
        logic,
        animation,
        h1,
        text,
        dispatch,
        composeTop,
        composeTop1,
        componentsTop
        
    }}></ChoiceIlustratedPreviewView>
    )  
} else {
   return(
       <div>loading...</div>
   ) 
}
   
   
}