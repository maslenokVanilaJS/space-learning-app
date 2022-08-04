
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles=createGlobalStyle`
body{
    {
  scrollbar-width: thin;
  scrollbar-color: blue white;
}

 
 ::-webkit-scrollbar {
  height: 12px;
  width: 12px;
}
 ::-webkit-scrollbar-track {
  background: white;
}
 ::-webkit-scrollbar-thumb {
  background-color: blue;
  border-radius: 5px;
  border: 3px solid white;
}
}
`