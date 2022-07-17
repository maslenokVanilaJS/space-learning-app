import { useEffect,useState } from "react";
import { APODview } from "./APODview";
import { GET_APOD, translate } from '../../services/FetchAPI/getAPOD';
import { previewIconLogic } from '../../services/previewIconLogic/previewIconLogic';
import { useDispatch,useSelector } from "react-redux";
import { GET_APOD_LASTD, args, args1,TOGGLE_LANG } from '../../store/APODReducer/thunk';
import { testApi, query } from '../../services/FetchAPI/fetchAnything';

 export  const APOD=({props})=>{
const [APOD_Data,Set_APOD_Data]= useState(null);
const [singleTranslated, setSingleTranslated] = useState(null);
const dispatch = useDispatch();
const state = useSelector(state => state.apodReducer);

 
     useEffect(() => {
         query.setcamera("PANCAM");
         query.setsol(4300);
         console.log(query);
         testApi.anyRequest(query.fullQuery);
       

         

         if (props == "rus") {
             GET_APOD.newTranslate(dispatch,args1,4);
            
         }
        if (props == "eng") {
            
                     GET_APOD.reduxfetchlastDays(dispatch,args,4)  ;
                        

              
         }
         console.log(state);

     }, [props]);
/*
useEffect(() => {
    if (state.lang=="eng") {
                           dispatch(TOGGLE_LANG("rus"));
   
             }
             if (state.lang=="rus") {
                        dispatch(TOGGLE_LANG("eng"));
   
                        }
                        console.log(state);
   
}, []);*/

     /*
     useEffect(() => {

    if(props=="eng"){
    GET_APOD.single(Set_APOD_Data);
     }

    if (props == "rus" && singleTranslated == null) {
        GET_APOD.singleTranslated(Set_APOD_Data,setSingleTranslated);
        console.log(props);
    }

    if (props == "rus"&&singleTranslated!=null) {
Set_APOD_Data(singleTranslated);
        console.log(props);
    }
    
}, [props,singleTranslated]);

*/

if (state.load) {
    return (
        <div>
            <h1>{props}</h1>
            <APODview props={{
            apodData: state.selected,
            filter: previewIconLogic.filterAPOD,
            setState: Set_APOD_Data,
            language:props,
            translated:singleTranslated
        }}></APODview></div>
        

    )   
}else{
    console.log(state);

    return(<h1>hui</h1>)
}
    
}