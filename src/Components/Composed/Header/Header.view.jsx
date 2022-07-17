import { Wrapper } from "../../Elements/Boxes/Wrapper"
import { Nav } from "../../Elements/url/nav/nav";
import { BlockLogo } from './BlockLogo';
import { BasicBtn } from './../../Elements/Buttons/BasicBtn/BasicBtn';
export const HeaderView=({props})=>{
    return (
    <Wrapper css="
        display:flex;
        justify-content:space-evenly;
        border:1px dashed gray;
        ">
        <Nav css="align-self:center;" href='#'>APOD</Nav>
        <BlockLogo props={{
            css: `
                          display:flex;
                          `,
            url: '/src/static.logo.png',
            imgCss: `
                          width:50px;`,
            name: `SpaceLearning`
        }}></BlockLogo>
        <Nav css="align-self:center;" href='#'>Mars Photo</Nav>
 
        <BasicBtn onClick={() => { props('eng'); }}>Eng</BasicBtn>
        <BasicBtn onClick={()=>{props('rus');}} >Rus</BasicBtn>



    </Wrapper>
    )
}