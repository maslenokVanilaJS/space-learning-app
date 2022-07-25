import { Wrapper } from "../../../Elements/Boxes/Wrapper";
import { ChoiceIlustratedPreview } from '../../../Elements/Cards/ChoiceIlustratedPreview/ChoiceIlustratedPreview';
import { ImageDisplay } from '../../../Elements/Image/ImageDisplay/ImageDisplay';
import { Date } from "../../../Elements/Inputs/Date/Date";
import { SimpleSelect } from "../../../Elements/Inputs/Select/SimpleSelect";

export const MarsRoverView=({props})=>{
    console.log(props,'on');

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
                text:props.text,
                componentsTop: [
                    { component: <SimpleSelect props={{ options: props.SelectOptionData, onChange: props.setchoosedRover ,default:props.defaultValues.rover}} ></SimpleSelect>},
                    { component: <SimpleSelect props={{ options: props.SelectOptionData_RequestType, default: props.defaultValues.requestType, onChange: props.setrequestType}} ></SimpleSelect>},
                    { component: <Date props={{visible:props.date,date:props.dateValue,onChange:props.setdateValue}}></Date>}
                ],
                

            }}></ChoiceIlustratedPreview> 

 
             

               

                 {     (props.state.selectedView?.img_src)?
                 <ImageDisplay props={{
                        url:props.state.selectedView.img_src,
                        css: 'width:70vw;'
                }}></ImageDisplay> : <ImageDisplay props={{
                    url:'https://avatars.mds.yandex.net/i?id=05a4d9c4b24a98aba10c7f675525a4d2-5427052-images-thumbs&n=13&exp=1',
                    css: 'width:70vw;'
                }}></ImageDisplay>

                }

            





        </Wrapper>
    );
}