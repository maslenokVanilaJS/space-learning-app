class ActionCreator{

    constructor(){

    }

    CREATOR(actionType,payload){
        return{
        type:actionType,
        payload
        }
    }

}
export const actionCreator=new ActionCreator();