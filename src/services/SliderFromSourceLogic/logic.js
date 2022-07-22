class SliderFromSourceLogic{
    constructor(){
        this.center=window.innerWidth/2;
    }
    getInner(ref){
          let rect ={
              width:window.innerWidth,
              height:window.innerHeight
        };
    console.log( rect);
return rect;
    }
 
getMouseCoords(event,args,dispatch,obj){
let mouseRect={
    x:event.clientX,
    y:event.clientY

}
console.log(mouseRect,obj);

if (mouseRect.x>this.center) {
    console.log('next');
    if(obj.index<obj.arr.length){
    obj.index++;
}
    if (obj.index==obj.arr.length) {
    obj.index=0;
}

        console.log(obj.index,obj.arr);


    dispatch(args.creator.CREATOR(args.type,obj));

}else{
    console.log('back');
    if(obj.index>=0){
    obj.index--;
}
    if (obj.index<0) {
    obj.index=obj.arr.length-1;
}
 dispatch(args.creator.CREATOR(args.type,obj));
}
 
}

blockScroll(){
    
}

}

export const SFS_Logic=new SliderFromSourceLogic();