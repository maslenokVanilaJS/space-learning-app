


import styled from "styled-components";

export const ModalBox = styled.div`
display:${props => props.Display || 'block'};
${props => props.gridStyles}
${props => props.flexStyles}
${props => props.gridElement}
height:${props => props.height || 'auto'};
width:${props => props.width || 'auto'};
top:${props => props.top || 'auto'};
left:${props => props.left || 'auto'};
right:${props => props.right || 'auto'};
bottom:${props => props.bottom || 'auto'};
${props => props.css}
text-align: ${props => props.textAlign || 'center'};`