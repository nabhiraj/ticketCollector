import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { EventContextProvider } from "@/context/EventContextProvider";
export default function RootLayout() {
  return (
    <EventContextProvider>
      <GestureHandlerRootView>
        <Stack screenOptions={{ headerBackTitleVisible: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="question" options={{ headerShown: false }}/>
          <Stack.Screen name="eventDetails" options={
            {   headerTransparent: true,
                
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                title: 'Event',
                headerTitleStyle: {
                  fontSize: 16
                },
                headerRight: () => (
                  <TouchableOpacity onPress={() => alert('sample alert :)')}>
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
          } />
        </Stack>
      </GestureHandlerRootView>
    </EventContextProvider>

  );
}

