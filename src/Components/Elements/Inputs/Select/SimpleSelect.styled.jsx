
import   styled  from 'styled-components';
import {defaultStyles} from './SimpleSelectDefaultStyles';

export const SimpleSelectStyled=styled.select`
${props=>props.css||defaultStyles}
${props=>props.extraStyles}
`