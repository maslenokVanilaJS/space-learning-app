export function cash(arr) {

    if (arguments.length===0) {
        return null;
    }
  let store = [...arr] ;
  if (store) {

       console.log(store);
       return store[store.length-1];
  } 
  if (!store) {
      console.log('flow');
  }
  if (arguments.length==0) {
             console.log(store);

  }
}