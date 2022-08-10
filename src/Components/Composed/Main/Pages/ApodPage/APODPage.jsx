
 
 
 import { useDispatch, useSelector } from 'react-redux';
import { GET_APOD, GET_APOD_Content } from '../../../../../services/FetchAPI/getAPOD';
import { APODPageView } from './APODPage.view';
import { useEffect, useState } from 'react';
import { GET_APOD_LASTD, args, args1, TOGGLE_LANG, OPEN_SFS } from '../../../../../store/APODPagesReducer/thunk';
import { Paginate } from './../../../../Elements/Paginate/Paginate';
import { SimpleTextInput } from '../../../../Elements/Inputs/Text/SimpleTextInput/SimpleTextInput';
import { userTextInputContentAmount } from './../../../../../services/APOD-PAGE-LOGIC/userInputHandle';

export const APODPage=({props})=>{
    const source = useSelector(state => state.apodPagesReducer);
    const { defaultContentAmount,defaultContentQuantity,defaultContentPages,language}=props;
    const [userContentAmount, setuserContentAmount] = useState(defaultContentAmount);
    const [userContentQuantity, setuserContentQuantity] = useState(defaultContentQuantity);

    const dispatch=useDispatch();
    const [page, setpage] = useState(null);
    const childrensTop = [<SimpleTextInput props={{ onUserInput: userTextInputContentAmount,setContentAmount:setuserContentAmount,placeholder:'amount', }}></SimpleTextInput>,
        <SimpleTextInput props={{ onUserInput: userTextInputContentAmount, setContentAmount: setuserContentQuantity, placeholder: 'quantity per page',}}></SimpleTextInput>]
     useEffect(() => {
          if(source.load){
              setpage(source.lastDaysEng);
          }
     }, [source.load]);
    
     useEffect(() => {
         console.log(page);
     }, [page]);
    useEffect(() => {
        console.log(source);


        if (language == "rus" & userContentAmount !== 0 & userContentQuantity !== 0) {
            GET_APOD_Content.newTranslate(dispatch, args1, userContentAmount);

        }
        if (language == "eng"&userContentAmount!==0&userContentQuantity!==0) {

            GET_APOD_Content.reduxfetchlastDays(dispatch, args, userContentAmount, userContentAmount);

        }
        console.log(userContentAmount);

    }, [language,userContentAmount,userContentQuantity]);
    console.log(userContentAmount);
    
    return(
        (source.load&page!=null) ?
            <Paginate props={{
                childrensTop,
                ctnAmount: userContentAmount,
                setuserContentQuantity,
                ctnQuantity: userContentQuantity,
                source:source.lastDaysEng,
                setpage,
                contentView: page.map((article) => { return <APODPageView key={article.date} props={{ apodData: article, }}></APODPageView>}) 
            }}>
            </Paginate>:
        null
    ) 
     
}