
export function formatSpaceAndStrings(input) {
  let formatedInput; 
  let inputToArray= input.split('');

  let formatedArray=  inputToArray.filter((element)=>{

        if (isNaN(element)!==true&element!==' ') {
            return element;
        };

    });

    formatedInput=formatedArray.join('');
    
    return parseInt(formatedInput);
    
}

