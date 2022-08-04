
    import { Wrapper } from './../../../../Elements/Boxes/Wrapper';
 
    export const APODPageView = ({ props }) => {
        return (
        <Wrapper css='max-width:80vw;margin:auto;' Display="grid;" gridStyles="grid-template-columns:1fr 1fr ;
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

            
        </Wrapper>
        )
    }