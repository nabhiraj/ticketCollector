import MultiChoiceQuestion from "@/components/MultiChoiceQuestion";
import SingleChoiceQuestion from "@/components/SingleChoiceQuestion";
import TextQuestion from "@/components/TextQuestion";
import eventContext from "@/context/eventContext";
import { useQuestionList } from "@/hooks/useQuestionList";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useContext, useState } from "react";
import { View,Text } from "react-native";


export default function question(){

    let params = useLocalSearchParams();
    let eventId = parseInt(params.id as string);
    let route = useRouter();
    let questionList = useQuestionList(eventId);
    //this is the testing code
    let {list,setEvent} = useContext(eventContext)
    //this is the testing code.
    let [currQuesIndex,setCurrQuesIndex] = useState(0);
    let [answers,setAnswer] = useState<any[]>([]);
    let currQues = questionList[currQuesIndex];
    let processAnswer = (ans:any)=>{
        if(currQuesIndex == questionList.length-1){
           //--- this is the testing code.
           console.log('logic to submit the ansesr');
           let eventInfo = list.filter(x=> x.eventId == eventId )[0];
           eventInfo.status = 'wait';
           setEvent(eventId,eventInfo);
           //-- this is the testing code
           route.back();
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
                        totalCount = {questionList.length}>
                    </TextQuestion>
                }
                {
                    currQues.type==='single choice' &&
                    <SingleChoiceQuestion question={currQues}
                        submitAnswer={processAnswer}
                        currentIndex={currQuesIndex+1}
                        totalCount={questionList.length}>
                    </SingleChoiceQuestion>
                }
                {
                    currQues.type==='multi choice' && 
                    <MultiChoiceQuestion
                        question={currQues}
                        submitAnswer={processAnswer}
                        ButtonText={ currQuesIndex == questionList.length - 1?'Claim ticket':'Next question'}
                        currentIndex={currQuesIndex+1}
                        totalCount = {questionList.length}>
                    </MultiChoiceQuestion>
                }
            </View>
       
    );
}