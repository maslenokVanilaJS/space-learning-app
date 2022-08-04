
import { APODPageView } from './APODPage.view';
export const APODPage=({props})=>{
    const state = useSelector(state => state.apodReducer);


    return(
        <APODPageView props={{ apodData: state.selected,}}></APODPageView>
     )
}