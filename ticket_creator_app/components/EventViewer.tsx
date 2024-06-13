import { View, Text, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
export default function EventViewer({ eventInfo }: any){
    return (
        <View style={{height:'100%'}}>
            <BottomSheet snapPoints={['40%', '80%']}>
                <BottomSheetView style={[style.bottomSheet]}>
                    <Text>this is the EventManager page</Text>
                    <Text>title of the page is {eventInfo.status}</Text>
                </BottomSheetView>
            </BottomSheet>
        </View>
    );
}

const style = StyleSheet.create({
    bottomSheet:{
        backgroundColor:'#F8F8F8',
        height:'100%'
      }
});