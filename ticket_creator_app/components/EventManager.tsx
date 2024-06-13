import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import ticketIcon from './../assets/images/ticketIcon.png'
import shareIcon from './../assets/images/shareIcon.png';
import { Shadow } from 'react-native-shadow-2';
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function EventManager({ eventInfo }: any) {
    let inset = useSafeAreaInsets();
    console.log('the inset value is ',inset);
    let eventButtonPanelStyle = StyleSheet.create({
        bottomBar: {
            position: 'absolute',
            bottom: inset.bottom,
            backgroundColor: '000000',
            width: '100%',
        },
    });
    let buyTicket = () => {
        console.log('logic to buy the ticket');
    }
    let notifyAboutWait = () => {
        console.log('this should generate the toast');
    }
    let openTicket = () => {
        console.log('go to the ticket');
    }
    let shareEvent = () => {
        console.log('share the ticket');
    }
    return (
        <View style={[eventButtonPanelStyle.bottomBar]}>
            <Shadow style={{width:'100%'}} sides ={{ start: false, end: false, top: true,bottom: false }} >
                <View style={[style.bottomBarPadding]}>
                    {
                        eventInfo.status == 'not_applied' &&
                        <TouchableOpacity onPress={buyTicket} style={style.buyButton}>
                            <Text style={style.buttonText}> Buy tickets </Text>
                        </TouchableOpacity>
                    }
                    {
                        eventInfo.status == 'wait' &&
                        <TouchableOpacity onPress={notifyAboutWait} style={style.waitButton}>
                            <Text style={style.buttonText}>Waiting for approval</Text>
                        </TouchableOpacity>
                    }
                    {
                        eventInfo.status == 'approved' &&
                        <View style={style.approvedView}>
                            <TouchableOpacity onPress={openTicket} style={style.ticketInfoButton}>
                                <Image style={{ width: 24, height: 24 }} source={ticketIcon}></Image>
                                <Text style={style.buttonText} >My tickets</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={shareEvent} style={style.shareEventButton}>
                                <Image style={{ width: 24, height: 24 }} source={shareIcon}></Image>
                                <Text style={{ color: '#6C63FF' }}>Share event</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
            </Shadow>
        </View>
    );
}

const style = StyleSheet.create({
    bottomBarPadding: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 30,
        paddingBottom: 30,
    },
    buyButton: {
        borderRadius: 50,
        backgroundColor: '#6C63FF',
        height: 43,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
    waitButton: {
        borderRadius: 50,
        backgroundColor: '#F5AC40',
        height: 43,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    approvedView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    ticketInfoButton: {
        borderRadius: 50,
        backgroundColor: '#6C63FF',
        height: 43,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexGrow: 2,
        marginRight: 2.5,
        flexDirection: 'row'
    },
    shareEventButton: {
        borderRadius: 50,
        backgroundColor: '#ffffff',
        height: 43,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexGrow: 2,
        borderColor: '#6C63FF',
        borderWidth: 1.5,
        marginLeft: 2.5,
        flexDirection: 'row'
    }

});