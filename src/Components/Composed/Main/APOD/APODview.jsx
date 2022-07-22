import { AuthorDate } from "../../../Elements/Text/AuthorDate/AuthorDate"
import { HeadingDisplay } from "../../../Elements/Text/HeadingDisplay/HeadingDisplay"
import { ImageDisplay } from "../../../Elements/Image/ImageDisplay/ImageDisplay"
import { TextBox } from "../../../Elements/Text/TextBox/TextBox"
import { APODWrapper } from "./APOD.styled"
import { TextCardWithAuthor } from "../../../Elements/Cards/TextCardWithAuthor/TextCardWithAuthor"
import { Wrapper } from "../../../Elements/Boxes/Wrapper"
import { ChoiceIlustratedPreview } from "../../../Elements/Cards/ChoiceIlustratedPreview/ChoiceIlustratedPreview"
import { YouTubeVideo } from "../../../Elements/YouTubeVideo/YouTubeVideo"
import { SliderFromSource } from './../SliderFromSource/SliderFromSource';
import { ImagePreloader } from './../../../Preloaders/ImgPreloader/ImgPreloader';
import { ModalHint } from "../../../Elements/Boxes/ModalHint/ModalHint"
import { OPEN_SFS } from "../../../../store/APODReducer/thunk"


export const APODview=({props})=>{
    console.log(props.apodData);
return(

    (props)?
    <div>
        <ModalHint props={{
            hintTitle:'Interface Hint',
            hint:'Click on main Image to toggle View!',
            scroll:true,
            target:".HintTarget",
            hide:true
        }}></ModalHint>
        <Wrapper css='max-width:80vw;margin:auto;' Display="grid;" gridStyles="grid-template-columns:1fr 1fr ;
grid-gap:10px;">

                
            <ChoiceIlustratedPreview props={{
                Display:'flex;',
               gridElement:'grid-column:1/4;',
                flexStyles:`flex-wrap:wrap;
                justify-content:space-evenly;
                margin-bottom:40px;`,
                textAlign:'left;',
                source:props.source,
                logic:props.logic,
                h1:props.h1,
                text:props.text
            }}></ChoiceIlustratedPreview>

                <TextCardWithAuthor props={{
                author: props.apodData.copyright,
                date: props.apodData.date,
                title: props.apodData.title,
                content: props.apodData.explanation,
                css: 'min-width:25vw;',
                gridElement: "align-self:center;",
                textAlign: "center",
                className:"HintTarget"
                }}
                ></TextCardWithAuthor>

                {
                    
                (props.apodData.media_type==='image')
               
                    ? <ImageDisplay  props={{
                url: props.apodData.url,
                css: `width:50vw;
                margin-top:auto;
                margin-bottom:auto;
                :hover{
                 box-shadow:-1px 2px 17px 1px;
 
                  }
                `,
                            className:"HintTarget",
                title:'Click to Slider',

                            click: () => { props.handleClick(true); props.dispatch(props.OPEN_SFS());
                                props.dispatch(props.TOGGLE_HINTVIEW_GLOBAL(false));
                                console.log("props.slider"); }
            }}></ImageDisplay>

               : <YouTubeVideo props={{
                        height:'100%',
                        width: '100%',
                        url: props.apodData.url,
                        click: () => { props.handleClick(true);props.setIframeSize({...props.iframeSize,height:'50vh',width:'50vw'}); console.log("props.slider"); }

                    }}> </YouTubeVideo>  

                }
           
            

         
        </Wrapper>
        {
            (props.slider)?<SliderFromSource props={{handleClick:props.handleClick}}></SliderFromSource>:<div></div>
        }
        
        {
            props.source.map((element)=>{

                return <ImagePreloader key={`${element.hdurl}`} src={element.hdurl} ></ImagePreloader>
            })
        }

    </div>:
    <div>load error</div>
)
}