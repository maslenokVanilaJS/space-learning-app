import { useEffect, useState } from "react";

export function useShowOnScrollTarget (target,setVisibility,cancelCondition,state){

    
 function isInViewport() {
      

    const rect = document.querySelector(`${target}`).getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    }

  function  showOnScroll(cancelCondition) {
      
      
            
                
    if (cancelCondition!=true) {
             window.addEventListener('scroll',

               function handleScroll(){
             console.log(cancelCondition);
                if(cancelCondition==true){
            window.removeEventListener('scroll',handleScroll,false);
            console.log('removed')
             setVisibility(false);
                         console.log(cancelCondition);

        }
console.log(target)
    if (isInViewport()) {
             console.log(target)

                setVisibility(false);

            }

             
               }
               
    );
        }
       

            
              
        
        
       
    }

    useEffect(() => {
        if (!cancelCondition) {
        return
    }
        if(state.hintCheckBox==true){
            window.removeEventListener('scroll',handleScroll,false);
            console.log('removed')
                         console.log(state.hintCheckBox);

        }
        let states=state.hintCheckBox;
        function handleScroll(){
             console.log(state.hintCheckBox);
              
console.log(target)
    if (isInViewport()) {
             console.log(target)

                setVisibility(false);

            }

             
               }
if (state.hintCheckBox!=true) {
             window.addEventListener('scroll',
handleScroll
               
               
    );
        }

          


console.log(state.hintCheckBox);
 return () => { window.removeEventListener('scroll', handleScroll) }
    }, [state.hintCheckBox])

}