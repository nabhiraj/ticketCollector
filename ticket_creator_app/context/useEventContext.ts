import { useContext } from "react";
import { EventContext } from "./EventContext";

export function useEventContext(){
    let temp = useContext(EventContext);
    if (temp===undefined){
        throw 'context should contain the event list and update method';
    }else{
        let list = temp.list;
        let setEvent = temp.setEvent;
        return {list,setEvent}
    }
}