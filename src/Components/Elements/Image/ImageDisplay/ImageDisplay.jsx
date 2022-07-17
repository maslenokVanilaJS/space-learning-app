import { Img } from "./ImageDisplay.style";

export const ImageDisplay = ({ props }) => {
  console.log(props);
  return (<Img onClick={props.click} title={props.title} css={props.css} className={props.className} src={props.url} alt="" />);
};
