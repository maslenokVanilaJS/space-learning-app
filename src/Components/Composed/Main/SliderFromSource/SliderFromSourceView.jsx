
import { ImageDisplay } from './../../../Elements/Image/ImageDisplay/ImageDisplay';
import { ModalBox } from './../../../Elements/Boxes/ModalBox/ModalBox';
import { cssModalBox } from '../../../Elements/Boxes/ModalBox/css';
import { TextCardWithAuthor } from './../../../Elements/Cards/TextCardWithAuthor/TextCardWithAuthor';
import { YouTubeVideo } from './../../../Elements/YouTubeVideo/YouTubeVideo';
import { ModalHint } from './../../../Elements/Boxes/ModalHint/ModalHint';

 export const SliderFromSourceView =({props})=>{
const logic=props.logic;

console.log(logic);

    return (
        <div>
            <ModalHint props={{
                hintTitle:'Interface Hint',
                hint:'Next - click on right side , back -click the oposit side. To exit click on gray textbox'
                , 
                scroll: false,
                target: ".HintTarget",
                hide:false
            }}></ModalHint>
            <ModalBox onClick={(event) => { logic.getMouseCoords(event,props.args,props.dispatch,{index:props.index,arr:props.arr})}} onLoad={()=>{logic.getInner(); }}   top="0"left="0" width="100vw" height="100vh" css={cssModalBox}>
         
                {/*<ImageDisplay props={{css:props.styles.image,
                                url:props.source.hdurl}} ></ImageDisplay>*/} 

                {

                    (props.source.media_type === 'image')

                        ? <ImageDisplay props={{
                            css: props.styles.image,
                            url: props.source.hdurl,
                             
                        }}></ImageDisplay>

                        : <YouTubeVideo props={{
                            height: '80vh',
                            width: '80vw',
                            url: props.source.url
                        }}> </YouTubeVideo>

                }              

                <TextCardWithAuthor onClick={()=>{props.sliderState(false);console.log('SFS')}} props={{
                    author: props.source.copyright,
                    date: props.source.date,
                    title: props.source.title,
                    content: props.source.explanation,
                    css:`
                    position:fixed;
                    bottom:0;
                    left:20vw;
                    right:auto;
                    width:60vw;
                    background:gray;
                    opacity:0.035;
                    transition:all 1s;
                    color:white;
                    :hover{opacity:1}
                    `,
                    click: () => { props.sliderState(false); console.log('SFS') }
                }}></TextCardWithAuthor>
            </ModalBox>
        </div>
    )

}