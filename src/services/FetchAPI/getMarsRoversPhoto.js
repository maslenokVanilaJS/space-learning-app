import { API_KEY } from './../../API/APIKEY';
import { query } from './fetchAnything';

export class TodayDate{
    constructor(){
        this.today = new Date();
    }

  get  todayDate(){
        return  this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();

    }
}

class GET_MARSROVER_PHOTOS{

    constructor (){
        this.key=API_KEY;
        this.queryEarthDate=`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?api_key=${API_KEY}&earth_date=${new TodayDate().todayDate}`;
        this.latest={
            curiosity:`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${API_KEY}`,
            opportunity:`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/latest_photos?api_key=${API_KEY}`,
            spirit:`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/latest_photos?api_key=${API_KEY}`,
            perseverance:`https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=${API_KEY}`

        };
        this.camera={
            curiosity:`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${API_KEY}`,
            opportunity:`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?api_key=${API_KEY}`,
            spirit:`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?api_key=${API_KEY}`
        };
    }

    fetchTodayPhotos(){
        fetch(`${this.queryEarthDate}`).then(res=>res.json()).then(res=>console.log(res,new TodayDate().todayDate));
        
    }

    fetchLatestPhotosFrom(rover,dispatch,args){

        if (rover=="curiosity") {
         fetch(`${this.latest.curiosity}`).then(res=>res.json()).then((res)=>{
             console.log(res,new TodayDate().todayDate);
            dispatch(args.creator.CREATOR(args.type,res.latest_photos.getRandomArrayElements(5)));
            });
   
        }
        if (rover=="opportunity") {
         fetch(`${this.latest.opportunity}`).then(res=>res.json()).then((res)=>{console.log(res,new TodayDate().todayDate)
             dispatch(args.creator.CREATOR(args.type,res.latest_photos.getRandomArrayElements(5)));

        });
   
        }
         if (rover=="spirit") {
         fetch(`${this.latest.spirit}`).then(res=>res.json()).then((res)=>{console.log(res,new TodayDate().todayDate)
                    dispatch(args.creator.CREATOR(args.type,res.latest_photos.getRandomArrayElements(5)));

        });
   
        }

        if (rover=="perseverance") {
         fetch(`${this.latest.perseverance}`).then(res=>res.json()).then((res)=>{console.log(res,new TodayDate().todayDate)
                    dispatch(args.creator.CREATOR(args.type,res.latest_photos.getRandomArrayElements(5)));

        });
   
        }

    }

     fetchPhotosFromCamera(rover,dispatch,args,date,camera){

        if (rover=="curiosity") {
         fetch(`${this.camera.curiosity}&earth_date=${date}&camera=${camera}`).then(res=>res.json()).then((res)=>{
             console.log(`${this.camera.curiosity}&earth_date=${date}&camera=${camera}`);
            dispatch(args.creator.CREATOR(args.type,res.photos.getRandomArrayElements(5)));
            });
   
        }
        if (rover=="opportunity") {
         fetch(`${this.camera.opportunity}&earth_date=${date}&camera=${camera}`).then(res=>res.json()).then((res)=>{console.log(res,new TodayDate().todayDate)
             dispatch(args.creator.CREATOR(args.type,res.photos.getRandomArrayElements(5)));
             console.log(`${this.camera.opportunity}&earth_date=${date}&camera=${camera}`);

        });
   
        }
         if (rover=="spirit") {
         fetch(`${this.camera.spirit}&earth_date=${date}&camera=${camera}`).then(res=>res.json()).then((res)=>{console.log(res,new TodayDate().todayDate)
                    dispatch(args.creator.CREATOR(args.type,res.photos.getRandomArrayElements(5)));
             console.log(`${this.camera.spirit}&earth_date=${date}&camera=${camera}`);

        });
   
        }

    }
}

export const MARSROVER_PHOTOS=new GET_MARSROVER_PHOTOS();