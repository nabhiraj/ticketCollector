import EventDashBoard from "@/components/EventDashBoard";
import { useLocalSearchParams} from "expo-router";
import { View, Text } from "react-native";

export default function eventDetails(){
    let eventInfo = useLocalSearchParams();
    console.log('the vaue is ',eventInfo);
    return (
        <EventDashBoard eventInfo={eventInfo}></EventDashBoard>
    );
}