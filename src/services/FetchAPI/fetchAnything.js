import { API_KEY } from './../../API/APIKEY';



class TestAPI{

constructor(body){
this.key=API_KEY;
this.body=body;
}

anyRequest(http){

    fetch(`${http}`).then(res=>res.json()).then(res=>console.log(res)).catch(res=>console.log(res));
}

requestWithKey(){
    fetch(`${this.body}?api_key=${this.key}&sol=1000&camera=fhaz`).then(res=>res.json()).then(res=>console.log(res)).catch(res=>console.log(res));


}

}

class RequestQuery{

constructor(query){
    this.body=query.body;
    this.key=query.key;
    this.camera=query.camera;
    this.sol=query.sol;
    this.fullQuery=this.setfullQuery();
}


  setfullQuery(){

    return this.body+this.key+this.sol+this.camera;

}

 

  setcamera(abr){
    this.camera=abr;
    if(abr=="PANCAM"){
        this.body='https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos';
    }
    this.fullQuery=this.setfullQuery();

}
 

  key(key){
    this.key=key;
}

 
  setsol(sol){
    this.sol='&sol='+sol.toString();
    this.fullQuery=this.setfullQuery();

}
}

export const query=new RequestQuery({body:"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos",
                                     key:`?api_key=${API_KEY}`,
                                     sol:'&sol=1000',
                                     camera:'&camera=fhaz'});

 export const testApi=new TestAPI("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos");