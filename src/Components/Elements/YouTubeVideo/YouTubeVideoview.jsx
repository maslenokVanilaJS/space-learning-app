export const YouTubeVideoview=({data})=>{
    console.log(data);
    return(
        <iframe defer  onClick={data.props.click} onLoadedData={()=>{data.setLoad(true)}} width={data.props.width} height={data.props.height} style={ {width:`${data.props.width}`, height:`${data.props.height}`}} src={data.props.url} title="YouTube video player" frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen>
            
         </iframe>
         
    )
}