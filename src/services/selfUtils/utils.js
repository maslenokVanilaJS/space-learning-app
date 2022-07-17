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

 Number.prototype.randomNumbers=randomNumbers;
Array.prototype.getLastElement=getLastElement;
Array.prototype.getRandomArrayElements=getRandomArrayElements;

String.prototype.getLastElement=getLastElement;


 


