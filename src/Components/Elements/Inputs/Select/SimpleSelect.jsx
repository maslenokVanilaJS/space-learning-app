import { SimpleSelectView } from "./SimpleSelect.view"

export const SimpleSelect=({props})=>{
    console.log(props)
    return (
        <SimpleSelectView props={{
            onChange:props.onChange,
            options:props.options,
            default:props.default,
            extraStyles:props.extraStyles,
            css:props.css,
            selectSize:props.selectSize
        }} ></SimpleSelectView>
    )
}