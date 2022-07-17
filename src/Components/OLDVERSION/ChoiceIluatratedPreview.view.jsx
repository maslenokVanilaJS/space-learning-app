import { Wrapper } from "../Elements/Boxes/Wrapper"
import { PreviewIcon } from "../Elements/Image/PreviewIcon/PreviewIcon"
import { HeadingDisplay } from "../Elements/Text/HeadingDisplay/HeadingDisplay"
import { TextBox } from "../Elements/Text/TextBox/TextBox"
import { BlockText } from '../Elements/Text/BlockText/BlockText';

export const ChoiceIlustratedPreviewView = ({ props }) => {
    return (
        <Wrapper textAlign={props.props.textAlign} 
         Display={props.props.Display} 
         flexStyles={props.props.flexStyles}
         gridElement={props.props.gridElement}>
         
          <Wrapper width='100vw;'>
            <HeadingDisplay props='APOD- Astronomic Picture of the day'></HeadingDisplay>
            </Wrapper>
            {props.apod.map((item)=>{
                
               if (item.thumbnail_url) {
                   if (props.animation) {
                       return <PreviewIcon
                           onClick={() => { props.setView(props.apod, item.date) }} key={`${item.date}`}
                           width="10vw;" height="10vw;" src={`https://icons8.com/preloaders/preloaders/71/Movie%20countdown.gif`} alt="" />
                   }
                   if (!props.animation) {
                       return <PreviewIcon
                           onClick={() => { props.setView(props.apod, item.date) }} key={`${item.date}`}
                           width="10vw;" height="10vw;" src={`${item.thumbnail_url}`} alt="" />
                   }
                   
               }

                if (!item.thumbnail_url) {
                    return <PreviewIcon
                        onClick={() => { props.setView(props.apod, item.date) }} key={`${item.date}`}
                        width="10vw;" height="10vw;" src={`${item.url}`} alt="" />
                }
               
            })}
           <BlockText props={{
                text:'Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.',
                width:'20vw;',
                height:'10vw;'
              }}></BlockText>       
</Wrapper>
    )

}