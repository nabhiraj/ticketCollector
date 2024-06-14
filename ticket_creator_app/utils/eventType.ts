interface question{
    type:string,
    id:number,
    ques:string,
    option?:string[]

};
interface event{
    eventId:number,
    status:string,
    title:string,
    date:string,
    time:string,
    subTitle: string,
    Address: string,
    exactAddress: string,
    ticketMessage: string,
    ticketSecMessage: string,
    costRange: string,
    aboutEvent: string,
    locationOnMap: number,
    questions:question[]
}
export {event,question};