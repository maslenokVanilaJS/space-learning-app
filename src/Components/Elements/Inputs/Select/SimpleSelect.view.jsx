
export  const SimpleSelectView=({props})=>{

    console.log(props)
    return (
        <select onChange={(event)=>{props.onChange(event.target.value)}} defaultValue={props.default} size="3">
            {
                props.options.map((el)=>{
                return <option value={el.value}>{el.option}</option>
                })
            }
        </select>
    )
}