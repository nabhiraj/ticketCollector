import { Text, View, StyleSheet, ScrollView } from "react-native";
import eventContext from './../context/eventContext'
import { useContext } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter, useNavigation } from "expo-router";

export default function Index() {
  let {list} = useContext(eventContext);
  let router = useRouter();
  return (
    <View>
      {list.map((eventItem:any) => 
        <ScrollView key={eventItem.eventId} style={style.eventItems}>
          <TouchableOpacity onPress={()=>{
            router.push({pathname:'/eventDetails',params:eventItem});
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