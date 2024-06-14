import { Stack } from "expo-router";
import eventContext from './../context/eventContext'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { TouchableOpacity,View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{ headerBackTitleVisible: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="question"/>
        <Stack.Screen name="eventDetails" options={
          {
            headerStyle:{
              backgroundColor: '#000000'
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            title: 'Event',
            headerTitleStyle: {
              fontSize: 16
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => alert('More options')}>
                <View style={{
                  borderRadius: 20, 
                  padding: 5, 
                  marginRight: 15
                }}>
                  <MaterialIcons 
                  name="more-vert" 
                  size={24} 
                  color="white" // Set the color to white
                  style={{ marginRight: 15 }} 
                />
                </View>
              </TouchableOpacity>
            )
          }
        }/>
      </Stack>
    </GestureHandlerRootView>
  );
}
