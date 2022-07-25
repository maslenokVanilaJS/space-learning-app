import { useDispatch } from "react-redux";
import { SELECT_APOD_VIEW } from "../../store/APODReducer/thunk"
import { PreviewIcon } from './../../Components/Elements/Image/PreviewIcon/PreviewIcon';
import { SELECT_MARSROVER_VIEW } from './../../store/MARS_ROVER_Reducer/thunk';
 
export const MARSROVER_CPIL_MAP= function (props,item,dispatch){
    if (item.thumbnail_url) {
        if (props.animation) {
            return <PreviewIcon
                onClick={() => { setView(props.source, item.date,dispatch) }} key={`${item.date}`}
                width="10vw;" height="10vw;" src={`https://icons8.com/preloaders/preloaders/71/Movie%20countdown.gif`} alt="" />
        }
        if (!props.animation) {
            return <PreviewIcon
                onClick={() => { setView(props.source, item.date,dispatch) }} key={`${item.date}`}
                width="10vw;" height="10vw;" src={`${item.thumbnail_url}`} alt="" />
        }

    }

    if (!item.thumbnail_url) {
        if (item.img_src) {
            return <PreviewIcon
            onClick={() => { setView(props.source, item.id,dispatch) }} key={`${item.id}`}
            width="10vw;" height="10vw;" src={`${item.img_src}`} alt="" />
        }
        if (!item.img_src) {
            return <PreviewIcon
            onClick={() => { setView(props.source, item.id,dispatch) }} key={`${item.id}`}
            width="10vw;" height="10vw;" src={`https://avatars.mds.yandex.net/i?id=05a4d9c4b24a98aba10c7f675525a4d2-5427052-images-thumbs&n=13&exp=1`} alt="" />
        }
        
    }
}

function setView(APODArray, date,dispatch){
        console.log(date); 
dispatch(SELECT_MARSROVER_VIEW(APODArray,date));
        

}
