const log=console.log;
function getLastElement() {
 return this[this.length-1];   
}
function getRandomArrayElements(count,strict){
let randomEls=[];
for (const i of count.randomNumbers()) {
    if (this[i]!=undefined) {
         randomEls.push(this[i]);
   
    }
}
log(randomEls.length);
if (randomEls.length<count&strict) {
    throw "Array length is too short";
    return;
}
return randomEls;
 }

 function randomNumbers() {
     let numbersSet=new Set();
   
log(this);
     while (numbersSet.size<this) {
         numbersSet.add( Math.floor(Math.random()*this));
     }
     return numbersSet;
 }

function divideArrayInto(quantity) {
 //   log(this)
 
    let divideRatio;
    let dividedArray=[];
    let buffer=[];
    let rest=this.length%quantity;
    let restElements=null;

    if (this.length===1) {
     return this
 }

    for (let index = 0; index < this.length; index++) {
       
        divideRatio=Math.floor(this.length/quantity);
         if (buffer.length<=quantity) {
        
           buffer.push(this[index]);
         }
        if (buffer.length>=quantity) {
            dividedArray.push(buffer);
                   // log('some',dividedArray);

         buffer=[];
        }
        
        
         
        if (dividedArray.length===divideRatio) {
             if (rest>0) {
                 console.log(rest);
            restElements=this.slice(this.length-rest);
       //     log((this.length-1)-rest);
         //   log('rest',restElements);
             dividedArray[dividedArray.length-1].push(...restElements);
        }
      //  log(dividedArray);
            return dividedArray;
        }
        
    }

}

 Number.prototype.randomNumbers=randomNumbers;
Array.prototype.getLastElement=getLastElement;
Array.prototype.getRandomArrayElements=getRandomArrayElements;
Array.prototype.inverseFlat=divideArrayInto;
String.prototype.getLastElement=getLastElement;

 

