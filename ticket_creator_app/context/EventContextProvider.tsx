import {  useState,ReactNode } from "react";
import { EventContext } from "./EventContext";
import eventList from './../utils/eventsInfo'
import { event } from "@/utils/eventType";
type Props = {
children: ReactNode;
};
export function EventContextProvider({children}:Props){
        let [list,setEventList] = useState<event[]>(eventList);
        let setEvent = (id:number,eventInfo:event)=>{
                let tempList = list.filter(x=>x.eventId!=id);
                tempList.push(eventInfo);
                setEventList(tempList);
        }
        return (
                <EventContext.Provider value={{list,setEvent}}>
                        {children}
                </EventContext.Provider>
        )
}