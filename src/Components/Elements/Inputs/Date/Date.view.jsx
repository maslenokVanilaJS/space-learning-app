
export const DateView=({props})=>{
    return (

        <input onLoad={(event) => { props.onChange(event.target.value) }} onChange={(event)=>{props.onChange(event.target.value)}} type="date" name="date" id="date"/>
     
        )

}