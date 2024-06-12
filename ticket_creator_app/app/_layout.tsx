import { Stack } from "expo-router";
import eventContext from './../context/eventContext'
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="eventDetails"/>
      </Stack>
    </GestureHandlerRootView>
  );
}
