import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
export default function EventManager({ eventInfo }: any){
    let buyTicket = ()=>{
        console.log('logic to buy the ticket');
    }
    let notifyAboutWait = ()=>{
        console.log('this should generate the toast');
    }
    let openTicket = ()=>{
        console.log('go to the ticket');
    }
    let shareEvent = ()=>{
        console.log('share the ticket');
    }
    return (
        <View style={[style.bottomBar]}>
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
                        <Text style={style.buttonText} >My tickets</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={shareEvent} style={style.shareEventButton}>
                        <Text style={{color:'#6C63FF'}}>Share event</Text>
                    </TouchableOpacity>
                </View> 
            }
        </View>
    );
}

const style = StyleSheet.create({
    bottomBar:{
        position:'absolute',
        bottom:0,
        backgroundColor:'000000',
        width:'100%',
        paddingLeft:15,
        paddingRight:15,
        paddingTop:30,
        paddingBottom:30,
        borderTopWidth:0.3
    
      },
      buyButton:{
        borderRadius:50,
        backgroundColor:'#6C63FF',
        height: 43,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText:{
        color:'white',
      },
      waitButton:{
        borderRadius:50,
        backgroundColor:'#F5AC40',
        height: 43,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      approvedView:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      },
      ticketInfoButton:{
        borderRadius:50,
        backgroundColor:'#6C63FF',
        height: 43,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow:2,
        marginRight:2.5
      },
      shareEventButton:{
        borderRadius:50,
        backgroundColor:'#ffffff',
        height: 43,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow:2,
        borderColor:'#6C63FF',
        borderWidth:1.5,
        marginLeft:2.5
      }
      
});