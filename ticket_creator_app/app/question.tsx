import TextQuestion from "@/components/TextQuestion";
import { useQuestionList } from "@/hooks/useQuestionList";
import { useLocalSearchParams } from "expo-router";
import { useContext, useState } from "react";
import { View,Text } from "react-native";


export default function question(){

    let params = useLocalSearchParams();
    let eventId = params.id;

    let questionList = useQuestionList(eventId);
    let [currQuesIndex,setCurrQuesIndex] = useState(0);
    let [answers,setAnswer] = useState<any[]>([]);
    let currQues = questionList[currQuesIndex];
    let processAnswer = (ans:any)=>{
        if(currQuesIndex == questionList.length-1){
           console.log('logic to submit the ansesr');
        }else{
            setAnswer([...answers,{questionId:currQues.id,userAnswer:ans}])
            setCurrQuesIndex(currQuesIndex+1);
        }
    }
    return (
      
            <View>
               {
                currQues.type==='text' && 
                <TextQuestion 
                    question={currQues}
                    submitAnswer={processAnswer}
                    answerPlaceHolder={'write your answer here'}
                    ButtonText={ currQuesIndex == questionList.length - 1?'Claim ticket':'Next question'}
                    currentIndex={currQuesIndex+1}
                    totalCount = {questionList.length}
                    >
                </TextQuestion>}
            </View>
       
    );
}