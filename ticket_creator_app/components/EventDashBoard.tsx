import { View, Text, StyleSheet } from "react-native";
import EventViewer from "./EventViewer";
import EventManager from "./EventManager";

export default function EventDashBoard({ eventInfo }: any) {
    return (
        <>  
            <EventViewer eventInfo={eventInfo}></EventViewer>
            <EventManager eventInfo={eventInfo}></EventManager>
        </>
    );
}
