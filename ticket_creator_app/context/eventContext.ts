import { createContext, useState } from "react";
import eventList from '../utils/eventsInfo'
import { event } from "@/utils/eventType";


export interface eventContextValue{
    list:event[],
    setEvent:(a:number,b:event)=>void
}
const EventContext = createContext<eventContextValue|undefined>(undefined);
export {EventContext}
