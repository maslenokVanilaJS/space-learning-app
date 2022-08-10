
import YouTubeGetID from './../../../services/getYouTubeId/getYouTubeId';
import YouTube from 'react-youtube';
export const YouTubeVideoview=({data})=>{
    console.log(data);
    return(
      /*  <iframe defer  onClick={data.props.click} ref={data.setref}   width={data.props.width} height={data.props.height} style={ {width:`${data.props.width}`, height:`${data.props.height}`}} src={data.props.url} title="YouTube video player" frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen>
            
         </iframe > */
        <YouTube onClick={data.props.click} opts={data.opts} onReady={()=>{data.setLoad(true);}} videoId={YouTubeGetID(data.props.url)}></YouTube>
         
    )
}