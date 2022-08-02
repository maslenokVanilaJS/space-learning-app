import { MarsRoverView } from "./MarsRoverView";
import { MARSROVER_PHOTOS, TodayDate } from './../../../../services/FetchAPI/getMarsRoversPhoto';
import { useEffect, useState } from "react";
import { args } from './../../../../store/MARS_ROVER_Reducer/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { MARSROVER_CPIL_MAP } from './../../../../services/MARS_ROVER_UI_LOGIC/ChoicePreviewIconLogic';
import { SelectOptionData, SelectOptionData_RequestType, DefaultValues, defaultValues, SelectOptionData_RequestTypePerseverance, SelectOptionData_RequestType_Curiosity, SelectOptionData_RequestType_Opportunity$Spirit } from './../../../../ComponentsData/MarsRoverData/MarsRoverData';
 
 export const MarsRover=()=>{
    //const source ;
    const state = useSelector(state => state.marsRoverReducer);
    const dispatch = useDispatch();
    const h1='Mars Rovers Photo - View Mars photos !';
    const text ="This API is designed to collect image data gathered by NASA's Perseverance, Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists.";
    const logic=MARSROVER_CPIL_MAP;
    const [choosedRover, setchoosedRover] = useState('curiosity');
    const [requestType, setrequestType] = useState('latest');
    const [date, setDate] = useState(false);
    const [dateValue, setdateValue] = useState(new TodayDate().todayDate);
    const [requestTypeData, setrequestTypeData] = useState(SelectOptionData_RequestType_Curiosity);

    useEffect(() => {
        if (requestType==="latest") {
                        setDate(false);
            console.log('latest');

            MARSROVER_PHOTOS.fetchLatestPhotosFrom(choosedRover, dispatch, args);

        }

        if ( requestType !== "latest"&date===true) {
            setDate(false);

            MARSROVER_PHOTOS.fetchPhotosFromCamera(choosedRover, dispatch, args,dateValue,requestType);
        console.log('!latest');

        }

        if (requestType!=='latest') {
            setDate(true);
        }
        if (choosedRover === 'curiosity') {
            setrequestTypeData(SelectOptionData_RequestType_Curiosity);
            console.log(requestType);

        }
        if (choosedRover === 'spirit' || requestType === 'opportunity') {
            setrequestTypeData(SelectOptionData_RequestType_Opportunity$Spirit);
            console.log(requestType);

        }
        if (choosedRover === 'perseverance') {
            setrequestTypeData(SelectOptionData_RequestTypePerseverance);
            console.log(requestType);

        }
    }, [choosedRover, date, dateValue, requestType]);

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
                text,
                    SelectOptionData,
                    requestTypeData,
                    SelectOptionData_RequestTypePerseverance,
                    setchoosedRover,
                    defaultValues:new DefaultValues(choosedRover,requestType),
                    date,
                    dateValue,
                    setdateValue,
                    setrequestType
                }}></MarsRoverView>);
        }else{
            return(
            <div>loadering////=</div>
            );
        }
      
    
}