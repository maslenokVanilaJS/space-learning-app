import { Wrapper } from "../../Boxes/Wrapper"
 import { AuthorDate } from "../../Text/AuthorDate/AuthorDate"
import { HeadingDisplay } from "../../Text/HeadingDisplay/HeadingDisplay"
import { TextBox } from "../../Text/TextBox/TextBox"

export const TextCardWithAuthor =({props})=>{
    return (<Wrapper className={props.className} onClick={props.click} css={props.css} textAlign={props.textAlign} gridElement={props.gridElement}>
        <HeadingDisplay props={props.title}></HeadingDisplay>
        <TextBox props={props.content}></TextBox>
        <AuthorDate props={{
            date: props.date,
            author: props.author
        }}></AuthorDate>
    </Wrapper>)
   
}