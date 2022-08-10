import styled from 'styled-components';
import { defaultStyles } from './SimpleTextInputDefaultStyles';
 
export const SimpleTextInputStyled=styled.input`
${defaultStyles}
 ${props => props.css}
`;