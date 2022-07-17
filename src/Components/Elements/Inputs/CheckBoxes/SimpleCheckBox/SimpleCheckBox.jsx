import { useState } from "react";
import { SimpleCheckBoxView } from "./SimpleCheckBox.view"
 export const SimpleCheckBox=({props})=>{
    const [checkBox, setcheckBox] = useState(false);

    Object.defineProperties(props,
        {
          checkBox:{value:checkBox,writable:true},
          setcheckBox:{value:setcheckBox,writable:true}  
        })
    return(
        <SimpleCheckBoxView props={
            props
        }></SimpleCheckBoxView>
     )
}