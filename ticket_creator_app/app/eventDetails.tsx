import { useLocalSearchParams} from "expo-router";
import { View, Text } from "react-native";

export default function eventDetails(){
    let eventInfo = useLocalSearchParams();
    console.log('the vaue is ',eventInfo);
    return (
        <View>
            <Text> this is the event detail page, {eventInfo.title} </Text>
        </View>
    );
}