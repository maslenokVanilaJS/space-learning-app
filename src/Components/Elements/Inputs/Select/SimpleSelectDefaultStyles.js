export const defaultStyles=`
background:white;
padding:20px;
&:hover{
    box-shadow: 0px -2px 11px 0px rgba(34, 60, 80, 0.2);
}
border-radius:5px;
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
`