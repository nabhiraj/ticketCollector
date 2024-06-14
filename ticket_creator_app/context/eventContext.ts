import { createContext } from "react";
import eventList from './../utils/eventsInfo'
let list = eventList;
function setEvent(id:number,x:any){
    let tempList = list.filter(x=>x.eventId!=id);
    tempList.push(x)
    list = tempList;
}
let eventContext = createContext({list,setEvent});
export default eventContext;