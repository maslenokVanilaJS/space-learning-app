
import { Option } from './Option/Option.styled';
import { SimpleSelectStyled } from './SimpleSelect.styled';
export  const SimpleSelectView=({props})=>{

    console.log(props)
    return (
        <SimpleSelectStyled onChange={(event)=>{props.onChange(event.target.value)}} defaultValue={props.default} size="3">
            {
                props.options.map((el)=>{
                return <Option props={props.css} value={el.value}>{el.option}</Option>
                })
            }
        </SimpleSelectStyled>
    )
}