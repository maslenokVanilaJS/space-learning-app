
import   styled   from 'styled-components';
import { defaultStyles } from './DateDefaultStyles';
 export const DateStyled=styled.input`
${props=>props.css||defaultStyles}
`;