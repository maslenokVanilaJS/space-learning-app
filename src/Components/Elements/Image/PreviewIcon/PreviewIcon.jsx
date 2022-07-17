import styled from 'styled-components';

export const PreviewIcon = styled.img` 
width:${props=>props.width||'auto'} ;
height:${props => props.height || 'auto'} ;
object-fit:cover;
:hover{
   box-shadow:-1px 2px 17px 1px;
 
}
`