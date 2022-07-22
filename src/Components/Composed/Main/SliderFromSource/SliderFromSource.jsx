
import { useDispatch, useSelector } from 'react-redux';
import { css } from './css';
import { SliderFromSourceView } from './SliderFromSourceView';
import { SFS_Logic } from './../../../../services/SliderFromSourceLogic/logic';
import { args3, SLIDER_NEXT } from './../../../../store/APODReducer/thunk';
import useBlockScroll from './../../../../hooks/useBlockScroll';

 export const SliderFromSource =({props})=>{

const source=useSelector(state => state.apodReducer.selected);
const arr= useSelector(state=>state.apodReducer.selectedLangAPOD);
const index = useSelector(state => state.apodReducer.index);
const thunk=SLIDER_NEXT;
const logic=SFS_Logic;
const dispatch = useDispatch();
const args=args3;
const sliderState=props.handleClick;
const styles={

    image:css.cssImage
}

   useBlockScroll();

    return (
        <div>
            <SliderFromSourceView props={{styles,source,logic,dispatch,arr,index,thunk,args,sliderState}}></SliderFromSourceView>
        </div>
    )

}