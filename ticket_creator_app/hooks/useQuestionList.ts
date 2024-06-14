import { useContext } from "react";
import eventContext from './../context/eventContext'

export function useQuestionList(eventId:any){
    let {list} = useContext(eventContext);
    let getEventFromId = (id:number,list:any)=>{
        let event = list.filter((x:any)=> x.eventId == id);
        if(event.length){
            return event[0].questions;
        }else{
            return undefined;
        }
    }
    return getEventFromId(eventId,list);
}