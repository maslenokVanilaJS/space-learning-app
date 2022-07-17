import { ImgPreloaderStyleView } from "./ImgPreloader.styled"

export const ImagePreloader=({src})=>{
 return(
    <ImgPreloaderStyleView onLoad={()=>{let i=0; console.log(i++)}} src={src}></ImgPreloaderStyleView>
 )
}