import { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";

export default function SingleChoiceQuestion({ question, submitAnswer, currentIndex, totalCount }: any) {
    let [answer, setAnswer] = useState('');
    return (
        <View style={style.flexView}>
            <View style={style.questionView}>
                <Text style={style.text1tyle}>{`QUESTION ${currentIndex} of ${totalCount}`}</Text>
                <Text style={style.text2Style}>{question.ques}</Text>
                <View>
                    {
                        question.options.map((x:string,index:number)=>{
                            return (
                                <TouchableOpacity style={style.optionStyle} key={index} onPress={()=>{submitAnswer(x)}}>
                                    <Text style={style.optionText}>{x}</Text>
                                </TouchableOpacity>
                            );
                    })}
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    flexView:{
        display:'flex',
        flexDirection:'column',
        justifyContent: 'flex-start',
        alignItems:'center',
        height:'100%'
    },
    questionView:{
        display:'flex',
        flexDirection:'column',
        width:'75%',
        marginTop:'34%'
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
   
    optionStyle:{
        backgroundColor: '#FFFFFF59',
        height: 43,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        marginTop:20
    },
    optionText:{
        fontSize:20,
        lineHeight:24,
        color:'#8D86FE'
    }
    
});