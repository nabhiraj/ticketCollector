import { View,Image,Text, StyleSheet  } from "react-native";

export default function EventInfoItem({icon,primaryText,secondaryText,secTextStyle}:any){
    let  secondaryTextStyle= secTextStyle?secTextStyle:{fontSize:12,lineHeight:20,color:'#A5A5A5'}
    let style = StyleSheet.create({
        iconSize:{
            height:25,
            width:25
        },
        primaryTextStyle:{
            fontSize:16,
            lineHeight:20,
            color:'#2F2E41'
        },
        secondaryTextStyle,
        mainViewStyle:{
            display:'flex',
            flexDirection:'row',
            marginTop:24
        }
    });
    return (<View style={style.mainViewStyle}>
        <Image source={icon} style={style.iconSize}></Image>
        <View>
            <Text style={style.primaryTextStyle}> {primaryText} </Text>
            <Text style={style.secondaryTextStyle}> {secondaryText} </Text>
        </View>
    </View>);
}