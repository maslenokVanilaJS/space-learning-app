import { AuthorDate } from "../../../Elements/Text/AuthorDate/AuthorDate"
import { HeadingDisplay } from "../../../Elements/Text/HeadingDisplay/HeadingDisplay"
import { ImageDisplay } from "../../../Elements/Image/ImageDisplay/ImageDisplay"
import { TextBox } from "../../../Elements/Text/TextBox/TextBox"
import { APODWrapper } from "./APOD.styled"
import { TextCardWithAuthor } from "../../../Elements/Cards/TextCardWithAuthor/TextCardWithAuthor"
import { Wrapper } from "../../../Elements/Boxes/Wrapper"
import { ChoiceIlustratedPreview } from "../../../Elements/Cards/ChoiceIlustratedPreview/ChoiceIlustratedPreview"
import { YouTubeVideo } from "../../../Elements/YouTubeVideo/YouTubeVideo"


export const APODview=({props})=>{
    console.log(props);
return(
    <div>
        <Wrapper css='max-width:100vw;' Display="grid;" gridStyles="grid-template-columns:1fr 1fr ;
grid-gap:10px;">

                
            <ChoiceIlustratedPreview props={{
                Display:'flex;',
               gridElement:'grid-column:1/4;',
                flexStyles:`flex-wrap:wrap;
                justify-content:space-evenly;
                margin-bottom:40px;`,
                textAlign:'left;',
                filter:props.filter,
                set:props.setState,
                language:props.language,
                translated:props.translated
            }}></ChoiceIlustratedPreview>

                <TextCardWithAuthor props={{
                author: props.apodData.copyright,
                date: props.apodData.date,
                title: props.apodData.title,
                content: props.apodData.explanation
                }}></TextCardWithAuthor>

                {
                    
                (props.apodData.media_type==='image')
               
                ?<ImageDisplay props={{
                url: props.apodData.url,
                css: 'width:70vw;'
            }}></ImageDisplay>

               : <YouTubeVideo props={{
                        height: '100%',
                        width: '100%',
                        url: props.apodData.url
                    }}> </YouTubeVideo>  

                }
           
           
            

         
        </Wrapper>
    </div>
)
}