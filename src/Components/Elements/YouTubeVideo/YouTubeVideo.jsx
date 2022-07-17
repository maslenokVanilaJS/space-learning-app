import { useState } from 'react';
import { YouTubeVideoview } from './YouTubeVideoview';
export const YouTubeVideo=({props})=>{
    const [load, setLoad] = useState(false);

    return(
        <div> {(!load) ? <img src="https://icons8.com/preloaders/preloaders/1494/Spinner-2.gif" alt="" />  :<div></div>
            
} 
            <YouTubeVideoview  loadState={setLoad} data={{ props, setLoad }}></YouTubeVideoview>
           </div>
       
    )
}