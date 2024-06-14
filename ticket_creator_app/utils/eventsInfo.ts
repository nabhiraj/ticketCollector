let event1 = {
    eventId:101,
    status:'not_applied',
    title:'football match 🚀',
    date:'Monday, Nov 13 2023',
    time:'6:00 PM - 10:00 PM',
    subTitle: 'semi-final',
    Address: 'hyderabad',
    exactAddress: 'visible after buying the ticket',
    ticketMessage: '78/100 tickets left',
    ticketSecMessage: '100+ invited',
    costRange: '$10.00 - $50.00',
    aboutEvent: 'random infomration about the event random infomration about the event random infomration about the event random infomration about the event',
    locationOnMap: 33,
    questions:[
        {
            type:'text',
            id:0,
            ques:'which city are you from?'
        },
        {
            type:'text',
            id:10,
            ques:'another random question?'
        },
        {
            type:'single choice',
            id:1,
            ques:'are you a player',
            options:[
                'Yes',
                'No'
            ]
        },
        {
            type:'multi choice',
            id:2,
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
    eventId:121,
    status:'not_applied',
    title:'football match 🚀',
    date:'Monday, Nov 16 2023',
    time:'6:00 PM - 10:00 PM',
    subTitle: 'final',
    Address: 'hyderabad',
    exactAddress: 'visible after buying the ticket',
    ticketMessage: '78/200 tickets left',
    ticketSecMessage: '200+ invited',
    costRange: '$100.00 - $150.00',
    aboutEvent: 'random infomration about the event random infomration about the event random infomration about the event random infomration about the event',
    locationOnMap: 33,
    questions:[
        {
            type:'text',
            id:0,
            ques:'which city are you from?'
        },
        {
            type:'single choice',
            id:1,
            ques:'are you a player',
            options:[
                'Yes',
                'No'
            ]
        },
        {
            type:'multi choice',
            id:2,
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
    eventId:123,
    status:'approved',
    title:'Movie',
    date:'Monday, Nov 13 2023',
    time:'6:00 PM - 10:00 PM',
    subTitle: 'spiderman far from home',
    Address: 'hyderabad',
    exactAddress: 'visible after buying the ticket',
    ticketMessage: '78/100 tickets left',
    ticketSecMessage: '100+ invited',
    costRange: '$10.00 - $50.00',
    aboutEvent: 'random infomration about the event random infomration about the event random infomration about the event random infomration about the event',
    locationOnMap: 33,
    questions:[
        {
            type:'text',
            id:0,
            ques:'which seat you want?'
        },
        
        {
            type:'single choice',
            id:1,
            ques:'will you bring food',
            options:[
                'Yes',
                'No'
            ]
        },
        {
            type:'multi choice',
            id:2,
            ques:'what food will you bring',
            options:[
                'pop corn',
                'chetos',
                'chips'
            ]
        }
    ]
};
let eventList = [event1,event2,event3];
export default eventList;