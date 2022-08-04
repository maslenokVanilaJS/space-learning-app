import  styled  from 'styled-components';
import {defaultStyles} from './HeadingDisplayDefaultStyles';
 export const HeadingDisplayStyles=styled.h1`
${defaultStyles}
${({props})=>props.css}

`;
