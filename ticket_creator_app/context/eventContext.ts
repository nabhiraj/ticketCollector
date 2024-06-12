import { createContext } from "react";
import eventList from './../utils/eventsInfo'
let list = eventList;
function setEvents(x:any){
    list = x;
}
let eventContext = createContext({list,setEvents});
export default eventContext;