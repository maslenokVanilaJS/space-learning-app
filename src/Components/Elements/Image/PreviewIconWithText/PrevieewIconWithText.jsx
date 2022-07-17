
import { PreviewIcon } from './../PreviewIcon/PreviewIcon';
import { Wrapper } from './../../Boxes/Wrapper';
import { TextBox } from './../../Text/TextBox/TextBox';
    export const PreviewIconWithText=({props})=>{
        console.log(props);
    return(
    <div>
<PreviewIcon width={props.width} height={props.height} src={props.src}></PreviewIcon>
<Wrapper css={`position:absolute;left:35%;top:35%;`}>
                <TextBox props='Video'></TextBox>
</Wrapper>
    </div>
    )
}