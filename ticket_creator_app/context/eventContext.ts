import { createContext, useState } from "react";
import eventList from '../utils/eventsInfo'
import { event } from "@/utils/eventType";

/*
let list = eventList;
function setEvent(id:number,x:any){
    let tempList = list.filter(x=>x.eventId!=id);
    tempList.push(x)
    list = tempList;
}
let eventContext = createContext({list,setEvent});
export default eventContext;*/
export interface eventContextValue{
    list:event[],
    setEvent:(a:number,b:event)=>void
}
const EventContext = createContext<eventContextValue|undefined>(undefined);
export {EventContext}
