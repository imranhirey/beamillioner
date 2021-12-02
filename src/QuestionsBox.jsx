import { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import useSound from "use-sound"
import play from './assets/play.wav'
import orrect from './assets/correct.wav'
import rong from './assets/rong.wav'
import wait from './assets/wait.wav'



export default function QuestionsBox({  setquestionnumber,setstop,data,questionnumber }) {
    console.log(data)
  const [question,setquestion]=useState(null)
  const [selectedanswer,setselectedanswer]=useState([])
  const [classname,setclassname]=useState('answer')
  const [letsPlay]=useSound(play)
  const [correct]=useSound(orrect)
   const [wrong]=useSound(rong)
    const [wayt]=useSound(wait)

  useEffect(()=>{
      letsPlay()
      
  },[letsPlay])
 
  const Checkit=(a)=>{
      setstop(false)
         if (a.correct){
             correct()
             setTimeout(() => {
                 setquestionnumber(questionnumber+1)
             setselectedanswer(null)
                 
             }, 1000);
            
            
        }
        else{
            wrong()
            setTimeout(() => {
                 setquestionnumber(questionnumber)
            setselectedanswer(null)
            setstop(true)
                
            }, 3000);
           
        }
  }
  useEffect(()=>{
      setquestion(data[questionnumber-1])
  },[data,questionnumber])
  const Handleclick=(a)=>{
     setselectedanswer(a)
     setclassname('answer active')
     

    
     setTimeout(() => {
       
         setclassname(a.correct?'answer correct':'answer wrong')
         
     }, 3000);
  setTimeout(() => {
      Checkit(a)
    
      
  }, 6000);
    
  }

    return (
        <div className='qbox'>
            <div className="question">{question?.question}</div>
            <div className='answers'>
                {question?.answers.map(b=>(
                     <div    className={selectedanswer===b?classname:'answer'}  onClick={()=>Handleclick(b)}>{b.text}</div>

                ))}
            
            
            </div>
           
            
        </div>
    )
}
