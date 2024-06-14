import EventDashBoard from "@/components/EventDashBoard";
import { useLocalSearchParams} from "expo-router";
import { View, Text,Image, ImageBackground } from "react-native";
import backGroundImage from './../assets/images/EventImage.png';
import coinIcon from './../assets/images/coinIcon.png'
import { useEventContext } from "@/context/useEventContext";

export default function eventDetails(){
    let eventIdParam = useLocalSearchParams();
    let eventId = parseInt(eventIdParam.Id as string);
    let {list} = useEventContext();
    let eventInfo = list.filter(x => x.eventId == eventId )[0];
    return (
        <View>
            <View style={{position:'absolute',top:0}}>
                <Image source={backGroundImage} style={{width:400,height:400,resizeMode:"contain"}} ></Image>
            </View>
            <EventDashBoard eventInfo={eventInfo}></EventDashBoard>
        </View>
    );
}