import EventDashBoard from "@/components/EventDashBoard";
import { useLocalSearchParams } from "expo-router";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import backGroundImage from './../assets/images/EventImageMobile.png';
import { useEventContext } from "@/context/useEventContext";


export default function eventDetails() {
    let eventIdParam = useLocalSearchParams();
    let eventId = parseInt(eventIdParam.Id as string);
    let { list } = useEventContext();
    let eventInfo = list.filter(x => x.eventId == eventId)[0];

    return (
        <>

            <ImageBackground
                source={backGroundImage}
                style={style.backGroundStyle}>
                <View>
                    
                    <EventDashBoard eventInfo={eventInfo}></EventDashBoard>
                </View>
            </ImageBackground></>
    );
}
const style = StyleSheet.create({
    backGroundStyle: {
        flex: 1,
        width:'100%'
    }
});