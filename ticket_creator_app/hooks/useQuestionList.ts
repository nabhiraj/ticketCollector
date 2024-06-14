import { useContext } from "react";
import { useEventContext } from "@/context/useEventContext";

export function useQuestionList(eventId:any){
    let {list} = useEventContext();
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