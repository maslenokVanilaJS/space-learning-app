
 
 
 import { useDispatch, useSelector } from 'react-redux';
import { GET_APOD, GET_APOD_Content } from '../../../../../services/FetchAPI/getAPOD';
import { APODPageView } from './APODPage.view';
import { useEffect, useState } from 'react';
import { GET_APOD_LASTD, args, args1, TOGGLE_LANG, OPEN_SFS } from '../../../../../store/APODPagesReducer/thunk';
import { Paginate } from './../../../../Elements/Paginate/Paginate';
import { SimpleTextInput } from '../../../../Elements/Inputs/Text/SimpleTextInput/SimpleTextInput';
import { userTextInputContentAmount } from './../../../../../services/APOD-PAGE-LOGIC/userInputHandle';
import { SimpleSelect } from './../../../../Elements/Inputs/Select/SimpleSelect';
import { defaultValue } from '../../../../../ComponentsData/APOD-PAGE-DATA/SimpleSelectData';
import { SelectOptionData_MediaType } from './../../../../../ComponentsData/APOD-PAGE-DATA/SimpleSelectData';
import { APODPageSelectStyles, selectSize } from './APODPAGEStyles';

export const APODPage=({props})=>{
    const source = useSelector(state => state.apodPagesReducer);
    const { defaultContentAmount,defaultContentQuantity,defaultContentPages,language}=props;
    const [userContentAmount, setuserContentAmount] = useState(defaultContentAmount);
    const [userContentAmountByMedia, setuserContentAmountByMedia] = useState(false);
    const [userContentQuantityByMedia, setuserContentQuantityByMedia] = useState(false);
const [paginateOptions, setpaginateOptions] = useState({ctnAmount:userContentAmount,ctnQuantity:userContentQuantity});
    const [userContentQuantity, setuserContentQuantity] = useState(defaultContentQuantity);
    const [userSelectOption,setUserSelectOption]=useState(defaultValue);
    const dispatch=useDispatch();
    const [page, setpage] = useState(null);
    const childrensTop = [<SimpleTextInput props={{ onUserInput: userTextInputContentAmount,setContentAmount:setuserContentAmount,placeholder:'amount',defaultValue:userContentAmount }}></SimpleTextInput>,
        <SimpleTextInput props={{ onUserInput: userTextInputContentAmount, setContentAmount: setuserContentQuantity, placeholder: 'quantity per page',defaultValue:userContentQuantity}}></SimpleTextInput>,
        <SimpleSelect props={{default:defaultValue,onChange:setUserSelectOption,options:SelectOptionData_MediaType,selectSize}}></SimpleSelect>]
     useEffect(() => {
          if(source.load){
              setpage(source.lastDaysEng);
          }
     }, [source.load]);
    
    useEffect(() => {
        if(userSelectOption!=='mixed'){
        setuserContentAmountByMedia(source.lastDaysEng.length)
            console.log('tsis', userContentAmountByMedia,source);

        }else{
            setuserContentAmountByMedia(defaultContentAmount)
        }
    }, [source.lastDaysEng,userSelectOption]);
    useEffect(() => {
        console.log(source);
 
        console.log(page);
        if (language == "rus" & userContentAmount !== 0) {
            GET_APOD_Content.newTranslate(dispatch, args1, userContentAmount);

        }
        if (language == "eng" & userContentAmount !== 0 & userContentAmount !== ''&userSelectOption==='mixed') {

            GET_APOD_Content.reduxfetchlastDays(dispatch, args, userContentAmount, userContentAmount);

        }

        if (language == "eng" & userContentAmount !== 0 & userContentAmount !== '' & userSelectOption !== 'mixed') {

            GET_APOD_Content.reduxfetchlastDaysByMediaType(dispatch, args, userContentAmount, userContentAmount,userSelectOption);

        }

    }, [language,userContentAmount,userSelectOption,source.load]);
    console.log(userContentAmount);
    
    return(
        (source.load&page!=null) ?
            <Paginate props={{
                childrensTop,
                    
                    paginateOptions,
                setuserContentQuantity,
                userSelectOption,
                setuserContentAmount,
                 source:source.lastDaysEng,
                setpage,
                page,
                contentView: page.map((article) => { return <APODPageView key={article.date} props={{ apodData: article, }}></APODPageView>}) 
            }}>
            </Paginate> : null
    ) 
     
}