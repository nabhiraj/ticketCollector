import { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";

export default function TextQuestion({ question, submitAnswer, answerPlaceHolder, ButtonText, currentIndex, totalCount }: any) {
    let [answer, setAnswer] = useState('');
    useEffect(()=>{
        console.log('use event working');
        setAnswer('');
    },[question])
    return (
        <View style={style.flexView}>
            <View style={style.questionView}>
                <Text style={style.text1tyle}>{`QUESTION ${currentIndex} of ${totalCount}`}</Text>
                <Text style={style.text2Style}>{question.ques}</Text>
                <TextInput  style={style.editTextStyle}
                    placeholder={answerPlaceHolder}
                    placeholderTextColor="#6C63FF4D" 
                    defaultValue={''}
                    value={answer}
                    onChangeText={(ans) => setAnswer(ans)}>
                </TextInput>
            </View>
            <TouchableOpacity style={style.buttonStyle} onPress={() => { 
                    console.log('submitting answer ',answer);
                    submitAnswer(answer) 
                }}>
                <Text style={style.buttonTextStyle}>{ButtonText}</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    flexView:{
        display:'flex',
        flexDirection:'column',
        justifyContent: 'space-around',
        alignItems:'center',
        height:'100%'
    },
    questionView:{
        display:'flex',
        flexDirection:'column',
        width:'75%'
    },
    buttonStyle: {
        borderRadius: 50,
        backgroundColor: '#6C63FF',
        height: 43,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:'75%'
    },
    text1tyle:{
        fontSize:14,
        lineHeight:18,
        color:'#6C63FF'
    },
    text2Style:{
        marginTop:10,
        fontSize:26,
        lineHeight:31,
        color:'#2F2E41'
    },
    editTextStyle:{
        marginTop:30,
        fontSize:26,
        lineHeight:31
    },
    buttonTextStyle:{
        fontSize:16,
        lineHeight:19,
        color:'#FFFFFF'
    }
});