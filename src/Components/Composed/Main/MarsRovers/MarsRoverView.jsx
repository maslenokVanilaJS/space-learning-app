import { Wrapper } from "../../../Elements/Boxes/Wrapper";
import { ChoiceIlustratedPreview } from '../../../Elements/Cards/ChoiceIlustratedPreview/ChoiceIlustratedPreview';
import { ImageDisplay } from '../../../Elements/Image/ImageDisplay/ImageDisplay';

export const MarsRoverView=({props})=>{
    console.log(props);

    return(
        <Wrapper css='max-width:100vw;' Display="grid;" gridStyles="grid-template-columns:1fr 1fr ;
grid-gap:10px;">

            <ChoiceIlustratedPreview props={{
                Display: 'flex;',
                gridElement: 'grid-column:1/4;',
                flexStyles: `flex-wrap:wrap;
                justify-content:space-evenly;
                margin-bottom:40px;`,
                textAlign: 'left;',
                logic:props.logic,
                source:props.source,
                h1:props.h1,
                text:props.text
                
            }}></ChoiceIlustratedPreview>

           
             

               

                      <ImageDisplay props={{
                        url:props.state.selectedView.img_src,
                        css: 'width:70vw;'
                    }}></ImageDisplay>

                    

            





        </Wrapper>
    );
}