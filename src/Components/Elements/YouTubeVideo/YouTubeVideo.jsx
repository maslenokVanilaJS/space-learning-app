import { useEffect } from 'react';
import { useState } from 'react';
import { YouTubeVideoview } from './YouTubeVideoview';

export const YouTubeVideo=({props})=>{
    const [load, setLoad] = useState(false);    
    const [ref,setref]=useState(null);

    const opts = {
        height: props.height,
        width: props.width,
         
    };

    
    return(
        <div> {(!load) ? <img  src="https://icons8.com/preloaders/preloaders/1494/Spinner-2.gif" alt="" />  :<div></div>
            
} 
            <YouTubeVideoview  loadState={setLoad} data={{ props, setLoad,ref,setref,opts }}></YouTubeVideoview>
           </div>
       
    )
}