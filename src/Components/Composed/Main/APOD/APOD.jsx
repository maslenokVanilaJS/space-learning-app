import { useEffect,useState } from "react";
import { APODview } from "./APODview";
import { GET_APOD, translate } from '../../../../services/FetchAPI/getAPOD';
import { previewIconLogic } from '../../../../services/previewIconLogic/previewIconLogic';
import { useDispatch,useSelector } from "react-redux";
import { GET_APOD_LASTD, args, args1,TOGGLE_LANG, OPEN_SFS } from '../../../../store/APODReducer/thunk';
import { testApi, query } from '../../../../services/FetchAPI/fetchAnything';
import { APOD_CPIL_MAP } from '../../../../services/APODLOGIC/ChoicePreviewIconLogic';
import { CONFIRM_HINT_READ_BUTTON, DONTSHOWMORE_CHECKBOX_ACTION } from './../../../../store/UI_HintReducer/thunk';
 
export  const APOD=({props})=>{
const [APOD_Data,Set_APOD_Data]= useState(null);
const [singleTranslated, setSingleTranslated] = useState(null);
const dispatch = useDispatch();
const state = useSelector(state => state.apodReducer);
const UI_HintReducer = useSelector(state => state.UI_HintReducer);
const [slider, setslider] = useState(false);
const [ iframeSize,setIframeSize]=useState({height:'100%',width:'100%'});
function handleClick(arg){
    setslider(arg);
}
 
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
useEffect(() => {
   console.log(state);
}, [state]);
if (state.load) {
    return (
        <div>
            <h1>{props}</h1>
            <APODview props={{
                h1:'APOD- Astronomic Picture of the day',
                text:'Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.',
            apodData: state.selected,
                source: state.selectedLangAPOD,
            language:props,
            logic:APOD_CPIL_MAP,
            slider,
            handleClick,
            iframeSize,
            setIframeSize,
            dispatch,
            OPEN_SFS,
            UI_HintReducer,
            DONTSHOWMORE_CHECKBOX_ACTION,
            CONFIRM_HINT_READ_BUTTON
        }}></APODview></div>
        

    )   
}else{
    console.log(state);

    return(<h1>loading...</h1>)
}
    
}