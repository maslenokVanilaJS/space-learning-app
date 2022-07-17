
 
export class OnScrollShow{

    constructor(target,setState ){
        this.target=document.querySelector(target);
        this.setState=setState;
    }

     

    isInViewport() {
    const rect = this.target.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    }
     
    showOnScroll(cancelCondition) {
      
      
            
              
        
         if (cancelCondition!=true) {
             window.addEventListener('scroll',
               function handleScroll(){
  console.log(cancelCondition);
                if(cancelCondition==true){
            window.removeEventListener('scroll',handleScroll,false);
            console.log('removed')
        }

    if (this.isInViewport()) {
                this.setState(false);

            }

             
               }.bind(this)
               
    );
        }
       
       
    }

}

