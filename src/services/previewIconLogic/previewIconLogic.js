 
 




class ApodIconLogic{
    constructor(){

    }

 getSelectedDate(date) {
    return date;
}
    

filterAPOD(APODArray,date,translated){
   
    console.log(date);
        const [selectedAPOD]= APODArray.filter((item)=>{

return item.date==date;
})
return selectedAPOD;
    

}

filterMars(APODArray,date,translated){
   
    console.log(date);
        const [selectedAPOD]= APODArray.filter((item)=>{

return item.id==date;
})
return selectedAPOD;
    

}

filterTranslateAPOD(date,APODArray,setState){
    console.log(APODArray);
const [selectedAPOD]= APODArray.filter((item)=>{

return item.date==date;
})
return selectedAPOD;
}

}

export const previewIconLogic=new ApodIconLogic();

