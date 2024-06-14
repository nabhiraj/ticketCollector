import EventDashBoard from "@/components/EventDashBoard";
import { useLocalSearchParams} from "expo-router";
import { View, Text,Image, ImageBackground } from "react-native";
import backGroundImage from './../assets/images/EventImage.png';
import coinIcon from './../assets/images/coinIcon.png'

export default function eventDetails(){
    let eventInfo = useLocalSearchParams();
    return (
        <View>
            <View style={{position:'absolute',top:0}}>
                <Image source={backGroundImage} style={{width:400,height:400,resizeMode:"contain"}} ></Image>
            </View>
            <EventDashBoard eventInfo={eventInfo}></EventDashBoard>
        </View>
    );
}