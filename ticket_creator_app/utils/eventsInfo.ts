let event1 = {
    eventId:101,
    status:'not_applied',
    title:'football match',
    subTitle: 'semi-final',
    Address: 'hyderabad',
    exactAddress: 'Gochiboli, iiit hyderabad',
    ticketCount: [67,200],
    costRange: [100,34],
    aboutEvent: 'random infomration about the event',
    locationOnMap: 33,
    question:[
        {
            type:'text',
            ques:'which city are you from?'
        },
        {
            type:'single choice',
            ques:'are you a player',
            options:[
                'Yes',
                'No'
            ]
        },
        {
            type:'multi choice',
            ques:'where did you hear abou the event',
            options:[
                'twitter',
                'news paper',
                'radio'
            ]
        }
    ]
};
let event2 = {
    eventId:221,
    status:'wait',
    title:'Movie plan',
    subTitle: 'Spiderman, no way home',
    Address: 'hyderabad',
    exactAddress: 'Gochiboli, INOX',
    ticketCount: [67,232],
    costRange: [10,60],
    aboutEvent: 'random infomration about the event',
    locationOnMap: 33,
    question:[
        {
            type:'single choice',
            ques:'are you coming to inox for first time?',
            options:[
                'Yes',
                'No'
            ]
        },
        {
            type:'multi choice',
            ques:'where did you hear abou the event',
            options:[
                'twitter',
                'news paper',
                'radio',
                'skip'
            ]
        }
    ]
};
let event3 = {
    eventId:621,
    status:'approved',
    title:'circus',
    subTitle: 'amber circus',
    Address: 'mumbai',
    exactAddress: 'navi',
    ticketCount: [67,232],
    costRange: [10,60],
    aboutEvent: 'random infomration about the event',
    locationOnMap: 33,
    question:[
        {
            type:'single choice',
            ques:'are you coming to inox for first time?',
            options:[
                'Yes',
                'No'
            ]
        },
        {
            type:'multi choice',
            ques:'where did you hear abou the event',
            options:[
                'twitter',
                'news paper',
                'radio',
                'skip'
            ]
        }
    ]
};
let eventList = [event1,event2,event3];
export default eventList;