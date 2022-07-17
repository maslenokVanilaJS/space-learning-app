
export const SimpleCheckBoxView=({props})=>{
    console.log(props.checkBox)
    return(
        <div>
        <label htmlFor="simple">
        Больше не спрашивать 
        </label>
        <input onChange={()=>{
            props.setcheckBox(!props.checkBox);
                 props.dispatch(props.action(!props.checkBox));
        }} type="checkbox" name="" id="simple"/>
        </div>
    )
}