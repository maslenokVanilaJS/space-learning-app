
 
 
 import { useDispatch, useSelector } from 'react-redux';
import { GET_APOD } from '../../../../../services/FetchAPI/getAPOD';
import { APODPageView } from './APODPage.view';
import { useEffect } from 'react';
import { GET_APOD_LASTD, args, args1, TOGGLE_LANG, OPEN_SFS } from '../../../../../store/APODPagesReducer/thunk';
import { Paginate } from './../../../../Elements/Paginate/Paginate';

export const APODPage=({props})=>{
    const state = useSelector(state => state.apodPagesReducer);
    const dispatch=useDispatch();

    useEffect(() => {
        console.log(state);


        if (props == "rus") {
            GET_APOD.newTranslate(dispatch, args1, 10);

        }
        if (props == "eng") {

            GET_APOD.reduxfetchlastDays(dispatch, args, 10);

        }
        console.log(state);

    }, [props]);

    
    return(
        (state.load) ?
            <Paginate props={{
                ctnAmount:state.lastDaysEng.length,
                ctnQuantity:4,
                contentView: state.lastDaysEng.map((article) => { return <APODPageView props={{ apodData: article, }}></APODPageView>}) 
            }}></Paginate>:
        null
    ) 
     
}