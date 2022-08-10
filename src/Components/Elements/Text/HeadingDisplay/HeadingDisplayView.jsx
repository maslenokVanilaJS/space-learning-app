
import { HeadingDisplayStyles } from './HeadingDisplay.styled';
export const HeadingDisplayView=({css,h1})=>{
     return(
        
        <HeadingDisplayStyles props={{css:css}} >{h1}</HeadingDisplayStyles>
    )
}