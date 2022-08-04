
    import { Wrapper } from './../../../../Elements/Boxes/Wrapper';
    import { TextCardWithAuthor } from './../../../../Elements/Cards/TextCardWithAuthor/TextCardWithAuthor';
    import { ImageDisplay } from './../../../../Elements/Image/ImageDisplay/ImageDisplay';
    import { YouTubeVideo } from './../../../../Elements/YouTubeVideo/YouTubeVideo';

      export const APODPageView = ({ props }) => {
        return (
            
            <Wrapper css='max-width:80vw;margin:auto;margin-top:50px;' Display="grid;" gridStyles="grid-template-columns:1fr 1fr ;
        grid-gap:10px;">

                <TextCardWithAuthor props={{
                    author: props.apodData.copyright,
                    date: props.apodData.date,
                    title: props.apodData.title,
                    content: props.apodData.explanation,
                    css: 'min-width:25vw;',
                    gridElement: "align-self:center;",
                    textAlign: "center",
                 }}
                ></TextCardWithAuthor>

            {
                 (props.apodData.media_type==='image')

                    ? <ImageDisplay props={{
                    url: props.apodData.url,
                    css: `width:50vw;
                margin-top:auto;
                margin-bottom:auto;
                :hover{
                 box-shadow:-1px 2px 17px 1px;
 
                  }
                `,
 
                     
                }}></ImageDisplay>

               : <YouTubeVideo props={{
                    height: '100%',
                    width: '100%',
                    url: props.apodData.url,
 
                }}> </YouTubeVideo>  

                }
            
              </Wrapper>
              
        )
    }