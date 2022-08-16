
import { Option } from './Option/Option.styled';
import { SimpleSelectStyled } from './SimpleSelect.styled';
export  const SimpleSelectView=({props})=>{

    console.log(props)
    return (
        <SimpleSelectStyled onChange={(event)=>{props.onChange(event.target.value)}} defaultValue={props.default} size={props.selectSize||3}>
            {
                props.options.map((el)=>{
                return <Option props={{css:props.css,extraStyles:props.extraStyles}} value={el.value}>{el.option}</Option>
                })
            }
        </SimpleSelectStyled>
    )
}