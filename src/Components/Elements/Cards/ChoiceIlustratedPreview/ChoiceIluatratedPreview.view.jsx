import { Wrapper } from "../../Boxes/Wrapper"
import { PreviewIcon } from "../../Image/PreviewIcon/PreviewIcon"
import { HeadingDisplay } from "../../Text/HeadingDisplay/HeadingDisplay"
import { TextBox } from "../../Text/TextBox/TextBox"
import { BlockText } from '../../Text/BlockText/BlockText';

export const ChoiceIlustratedPreviewView = ({ props }) => {
    console.log(props);
    return (
        <Wrapper textAlign={props.props.textAlign} 
         Display={props.props.Display} 
         flexStyles={props.props.flexStyles}
         gridElement={props.props.gridElement}>
         
          <Wrapper width='100vw;'>
            <HeadingDisplay props={props.h1}></HeadingDisplay>
            </Wrapper>
            {props.source.map((item)=>{
                
            return   props.logic(props,item,props.dispatch);
               
            })}
           <BlockText props={{
                text:props.text,
                width:'20vw;',
                height:'10vw;'
              }}></BlockText>       
</Wrapper>
    )

}