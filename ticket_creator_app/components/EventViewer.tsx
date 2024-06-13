import { View, Text, StyleSheet, ScrollView } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import EventInfoItem from "./EventInfoItem";
import calendarIcon from './../assets/images/calendar.png'
import locationIcon from './../assets/images/locationIcon.png'
import ticketIcon from './../assets/images/ticketlike.png'
import coinIcon from './../assets/images/coinIcon.png'

export default function EventViewer({ eventInfo }: any) {
    return (
        <View style={{ height: '100%' }}>
            <BottomSheet snapPoints={['40%', '80%']}>
                <BottomSheetView style={[style.bottomSheet]}>
                    <ScrollView style={style.mainMargin}>
                        <View>
                            <Text style={style.eventTitleStyle}>{eventInfo.title}</Text>
                            <Text>{eventInfo.subTitle}</Text>
                        </View>
                        <EventInfoItem icon={calendarIcon} primaryText={eventInfo.date} secondaryText={eventInfo.time}></EventInfoItem>
                        <EventInfoItem icon={locationIcon} 
                            primaryText={eventInfo.Address} 
                            secondaryText={eventInfo.exactAddress}
                            secTextStyle={eventInfo.status != 'approved'?{fontSize:12,lineHeight:20,color:'#6C63FF'}:undefined}>
                        </EventInfoItem>
                        <EventInfoItem icon={ticketIcon} primaryText={eventInfo.ticketMessage} secondaryText={eventInfo.ticketSecMessage}></EventInfoItem>
                        <EventInfoItem icon={coinIcon} primaryText={eventInfo.costRange}></EventInfoItem>
                        <View style={{marginTop:26}}>
                            <Text style={{fontSize:18,lineHeight:20}}>About this event</Text>
                            <Text style={{fontSize:16,lineHeight:24,marginTop:10}}> {eventInfo.aboutEvent}</Text>
                        </View>
                    </ScrollView>
                </BottomSheetView>
            </BottomSheet>
        </View>
    );
}

const style = StyleSheet.create({
    bottomSheet: {
        backgroundColor: '#F8F8F8',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    mainMargin: {
        marginLeft: 33,
        marginTop:40
    },
    eventTitleStyle:{
        fontSize: 26,
        lineHeight: 31.03,
        color:'#2F2E41'
    },
    eventSubtitleStyle:{
        fontSize: 16,
        lineHeight: 19.09,
        color:'#2F2E41'
    }
});