import { Text, View, StyleSheet, ScrollView } from "react-native";
import {EventContext, eventContextValue} from '../context/EventContext'

import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter, useNavigation } from "expo-router";
import { useEventContext } from "@/context/useEventContext";

export default function Index() {
  let {list} = useEventContext();
  let router = useRouter();
  return (
    <View>
      {list.map((eventItem:any) => 
        <ScrollView key={eventItem.eventId} style={style.eventItems}>
          <TouchableOpacity onPress={()=>{
            router.push({pathname:'/eventDetails',params:{Id:eventItem.eventId}});
          }}>
            <Text>{eventItem.title}</Text>
            <Text>{eventItem.subTitle}</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  eventItems:{
    borderWidth:2,
    padding:10,
    marginBottom:20
  }
});