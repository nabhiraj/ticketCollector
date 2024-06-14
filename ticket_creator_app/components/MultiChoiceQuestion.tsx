import { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from "react-native";
import checkIcon from './../assets/images/check.png'

export default function MultiChoiceQuestion({ question, submitAnswer, currentIndex, totalCount,ButtonText }: any) {
    let [answer, setAnswer] = useState<any[]>([]);
    useEffect(()=>{
        setAnswer([]);
    },[question])
    return (
        <View style={style.flexView}>
            <View style={style.questionView}>
                <Text style={style.text1tyle}>{`QUESTION ${currentIndex} of ${totalCount}`}</Text>
                <Text style={style.text2Style}>{question.ques}</Text>
                <View>
                    {
                        question.options.map((x:any,index:number)=>{
                            return (
                                <TouchableOpacity style={style.optionStyle} key={index} onPress={
                                        ()=>{
                                           if(answer.includes(x)){
                                            setAnswer(answer.filter(y=>y!=x));
                                           }else{
                                            setAnswer([...answer,x])
                                           }
                                        }
                                    }>  
                                        <View style={{flexGrow:1,display:'flex',justifyContent:"center",flexDirection:'row'}}>
                                            <Text style={style.optionText}>{x}</Text>
                                        </View>
                                            
                                      
                                    
                                    {answer.includes(x) && 
                                            <View style={{display:'flex',justifyContent:'flex-end', flexDirection:'row'}}>
                                                <Image source={checkIcon} style={{height:18,width:18}}></Image>
                                            </View>
                                    }
                                </TouchableOpacity>
                            );
                    })}
                </View>
            </View>
            <TouchableOpacity style={style.buttonStyle} onPress={() => { 
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
        width:'75%',
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        marginTop:20,
    },
    optionText:{
        fontSize:20,
        lineHeight:24,
        color:'#8D86FE',
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
    buttonTextStyle:{
        fontSize:16,
        lineHeight:19,
        color:'#FFFFFF'
    }
});