import styled  from 'styled-components';
import {defaultStyles} from './optionDefaultStyles';
 export const Option=styled.option`
${props=>props.css||defaultStyles}
`
