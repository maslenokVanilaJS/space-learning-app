
        import { cash } from '../Cash/cash';
import { API_KEY } from './../../API/APIKEY';

        function fetchEng(key,callback,count) {
        if (count) {
                fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&count=${count}`)
                .then((res) => {res.json()
                
                
                }
                
                )
                .then((res) => { callback(res)
                
                })
                .catch(err => callback(err));    
        }
        if(!count){
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
                .then(res =>             
        res.json()
        )
                .then((res) => { callback(res)

                })
                .catch(err => callback(err));      
        }    
        }

        function fetchEngDays(callback,count,key) {
                let today = new Date();
                let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                let referent=new Date();
                referent.setDate(referent.getDate() - count);
                let start_date=referent.getFullYear()+'-'+(referent.getMonth()+1)+'-'+referent.getDate()
                fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${start_date}`)
                .then(res => res.json())
                .then((res) => { 
                        callback(res)
                
                })
                .catch(err => callback(err));
        }

        function fetchRuDays(callback,count,key,settranslated) {
                let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let referent=new Date();
        referent.setDate(referent.getDate() - count);
        let start_date=referent.getFullYear()+'-'+(referent.getMonth()+1)+'-'+referent.getDate()
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${start_date}`)
                .then(res => res.json())
                .then((res) => { 
                        
                        new Translate().worker(res,callback,settranslated);
                
                })
                .catch(err => callback(err)); 
        }




        class APOD{
        constructor(key){
                this.key=key;
        }
        single(callback){


        fetchEng(this.key,callback);
        }
        count(callback,count){
        fetchEng(this.key,callback,count);


        }
        lastDays(callback,count){
        
        fetchEngDays(callback,count,this.key);
        }

        lastDaysTranslated(callback,count,settranslated){

                fetchRuDays(callback,count,this.key,settranslated);

        }

        singleTranslated(callback,setTranslated){

        let title=null;
        let explanation=null;
        let content=null;
        if (content!==null) {
                callback(content);
                console.log(content);

        }if(content===null){

        console.log(content);

        fetch(`https://api.nasa.gov/planetary/apod?api_key=${this.key}`)
                .then(res => res.json())
                .then((res) => {  
                fetch("http://gosredirector.ea.com:5000/translate", {
                method: "POST",
                body: JSON.stringify({
                        q: res.title,
                        source: "en",
                        target: "ru"
                }),
                headers: { "Content-Type": "application/json" }
        }).then(resp=>resp.json())
        .then((resp1)=>{title= resp1.translatedText;
        console.log(title);
        fetch("http://gosredirector.ea.com:5000/translate", {
                method: "POST",
                body: JSON.stringify({
                        q: res.explanation,
                        source: "en",
                        target: "ru"
                }),
                headers: { "Content-Type": "application/json" }
        }).then(resps=>resps.json())
        .then((resps1)=>{
                
                explanation=resps1.translatedText;
                console.log(explanation);
                        console.log(res);
        [res].filter((item)=>{item.title=title;
                item.explanation=explanation;
        })
        content=res;
        console.log(content)
        callback(res);
        setTranslated(res);
                        console.log(res);

        });
        });
                })
                .catch(err => callback(err)); 

        }
        }


       reduxfetchlastDays(dispatch,args,count,maxLength) {
                 let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let referent=new Date();
        referent.setDate(referent.getDate() - count);
        let start_date=referent.getFullYear()+'-'+(referent.getMonth()+1)+'-'+referent.getDate()
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${this.key}&start_date=${start_date}&thumbs=true`)
                .then(res => res.json())
                .then((res) => { 
                        console.log(dispatch(args.creator.CREATOR(args.type,res)));
                        if (maxLength) {
                                res.reverse();
                               res.length=maxLength; 
                        }
                       dispatch(args.creator.CREATOR(args.type,res));
                
                }).catch(err => console.log(err)); 
        }


        
       reduxfetchlastDaysVideo(dispatch,args,count) {
                 let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let referent=new Date();
        referent.setDate(referent.getDate() - count);
        let videoArr=[];
        let start_date=referent.getFullYear()+'-'+(referent.getMonth()+1)+'-'+referent.getDate()
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${this.key}&start_date=${start_date}&thumbs=true`)
                .then(res => res.json())
                .then((res) => { 

     res.filter((item)=>{

        if (item.media_type=='video') {
                     videoArr.push(item);
     
        }
    });
                        console.log(videoArr);
                        dispatch(args.creator.CREATOR(args.type,videoArr));
                
                })
                .catch(err => console.log(err)); 
        }


newTranslate(dispatch,args,count){


 let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let referent=new Date();
        referent.setDate(referent.getDate() - count);
        let start_date=referent.getFullYear()+'-'+(referent.getMonth()+1)+'-'+referent.getDate();
        let entry =[];
        let entryMedia=[];
        let buffer=[];
        let output=[];
        let translatedAPOD=[];
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${this.key}&start_date=${start_date}&thumbs=true`)
                .then(res => res.json())
                .then((res) => { 
                       
                        res.forEach((el)=>{
                                entry.push(`${el.title} 54321 ${el.explanation} 54321 `);
                                entryMedia.push({url:el.url,copyright:el?.copyright,media_type:el.media_type,date:el.date})
                        })
                          console.log(entryMedia);
                        fetch("http://gosredirector.ea.com:5000/translate", {
                method: "POST",
                body: JSON.stringify({
                        q:entry.join(" "),
                        source: "en",
                        target: "ru"
                }),
                headers: { "Content-Type": "application/json" }
        }).then((resp)=>{
                        

               return resp.json();
        })
        .then((res)=>{
                console.log(res.translatedText.split("54321"));
               
              const  stringsArray=res.translatedText.split("54321") ; 
                for (let i = 0; i < stringsArray.length-2; i++) {

                        if (Number.isInteger(i/2)) {

                                buffer.push(stringsArray[i]);
                               buffer.push(stringsArray[i+1]);
                               buffer.push(entryMedia[i/2]);
                               
                                output.push(new TranslatedAPOD(buffer));
                                
                        }

                        
                               buffer=[];
                        
                }

               console.log(output);
              dispatch(args.creator.CREATOR(args.type,output));



                
             

                console.log(translatedAPOD);
                

        })
                
                })
                .catch(err => console.log(err)); 

}

        }



        class Translate {
        constructor(){
        this.key=API_KEY;
        }

        worker(arr,callback,translated){
           
            
            

        arr.forEach(element => {
                let title=null;
                let explanation=null;
                
        fetch("http://gosredirector.ea.com:5000/translate", {
                method: "POST",
                body: JSON.stringify({
                        q: element.title,
                        source: "en",
                        target: "ru"
                }),
                headers: { "Content-Type": "application/json" }
        }).then(resp=>resp.json())
        .then((resp1)=>{title= resp1.translatedText;
        console.log(title);
        fetch("http://gosredirector.ea.com:5000/translate", {
                method: "POST",
                body: JSON.stringify({
                        q: element.explanation,
                        source: "en",
                        target: "ru"
                }),
                headers: { "Content-Type": "application/json" }
                }).then(resps=>resps.json())
                .then((resps1)=>{explanation=resps1.translatedText;
                        console.log(explanation);
                [element].filter((item)=>{item.title=title;
                        item.explanation=explanation;
                })
                callback(arr);
                translated(arr);
                 });
                });
                        })
        
                

        }

        test (arr){
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let referent=new Date();
        referent.setDate(referent.getDate() - 4);
        let start_date=referent.getFullYear()+'-'+(referent.getMonth()+1)+'-'+referent.getDate()
                        let APODArray=[];

        fetch(`https://api.nasa.gov/planetary/apod?api_key=${this.key}&start_date=${start_date}`)
                .then(res => res.json())
                .then((res) => { 

        res.forEach(element => {
                APODArray.push([element.title]);
                APODArray.push([element.explanation]);

        

        });
        fetch("http://gosredirector.ea.com:5000/translate", {
                method: "POST",
                body: JSON.stringify({
                        q: JSON.stringify(APODArray),
                        source: "en",
                        target: "ru"
                }),
                headers: { "Content-Type": "application/json" }
        }).then(resps=>resps.json())
        .then((resps1)=>{APODArray=resps1.translatedText;
                console.log(APODArray);


        
        });
                })
                .catch(err => console.log(err)); 




        }

        }

        class TranslatedAPOD{
                constructor(arr){
                        this.title=arr[0];
                        this.explanation=arr[1];
                        this.url=arr[2].url;
                        this.copyright=arr[2].copyright;
                        this.media_type=arr[2].media_type;
                        this.date=arr[2].date;
                }
        }

        export const translate=new  Translate();

        export const GET_APOD = new APOD(API_KEY);
        export const GET_APOD_Content = new APOD(API_KEY);