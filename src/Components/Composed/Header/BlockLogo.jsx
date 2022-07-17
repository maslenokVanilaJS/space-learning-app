import { Wrapper } from "../../Elements/Boxes/Wrapper"
import { HeadingDisplay } from "../../Elements/Text/HeadingDisplay/HeadingDisplay"
import { ImageDisplay } from './../../Elements/Image/ImageDisplay/ImageDisplay';
export const BlockLogo=({props})=>{
    console.log(props.name);

return(
    <Wrapper css={props.css}>
        <HeadingDisplay props={ props.name }></HeadingDisplay>
        <ImageDisplay  props={{
                               url: props.url,
                               css: props.imgCss
                             }}></ImageDisplay>   
                             <img src={require('../../../static/logo.png')} alt=""/>                                  
    </Wrapper>
)
}