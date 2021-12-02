import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import QuestionsBox from './QuestionsBox';
import Timer from './Timer';

function App() {

  const data=[
    {
      id:1,
      question:'maxaa english lagu dhahaa dahab',
      answers:[
        {
          text:'phone',
          correct:false
        },
         {
          text:'gold',
          correct:true
        },
         {
          text:'pen',
          correct:false
        },
         {
          text:'mirror',
          correct:false
        },
      ]

    },
     {
     id:4,
      question:'maxaa english lagu dhahaa macalin',
      answers:[
        {
          text:'headmaster',
          correct:false
        },
         {
          text:'black',
          correct:false
        },
         {
          text:'somali',
          correct:false
        },
         {
          text:'teacher',
          correct:true
        },
      ]

    },
      {
      id:2,
      question:'maxaa english lagu dhahaa wiil',
      answers:[
        {
          text:'boy',
          correct:true
        },
         {
          text:'jeack',
          correct:false
        },
         {
          text:'pen',
          correct:false
        },
         {
          text:'terasure',
          correct:false
        },
      ]

    },
      {
      id:3,
      question:'maxaa english lagu dhahaa jaale',
      answers:[
        {
          text:'red',
          correct:false
        },
         {
          text:'yellow',
          correct:true
        },
         {
          text:'head',
          correct:false
        },
         {
          text:'neck',
          correct:false
        },
        
        
       
     
      ]

    },
  ]
  const [questionnumber,setquestionnumber]=useState(1)
  const [stop,setstop]=useState(false)
  const [earned,setearned]=useState(null)
  const moneyitems=[
    {id:1,price:100},
     {id:2,price:200},
      {id:3,price:300},
       {id:4,price:400},
        {id:5,price:700},
         {id:6,price:1000},
          {id:8,price:1500},
          {id:9,price:2000},
          {id:10,price:4000},
          {id:11,price:8000},
          {id:12,price:16000},
          {id:13,price:32000},
          {id:14,price:64000},
          {id:15,price:150000},
          {id:16,price:400000},
          {id:17,price:800000},
          {id:18,price:1000000},
  ].reverse()

  useEffect(()=>{
    questionnumber>1 && setearned(moneyitems.find((m)=>m.id===questionnumber-1).price)
   

  },[moneyitems,questionnumber])
  return (
    
   <div className='app'>
      {stop?<h1 className='finish'>{earned?'woow congrats you earned $'+earned:'HOOYADAA WAY KUUGU QASAARTAY HAL SU AAL XATTAA KAMA JAWAABIN'} </h1>:
      <>
       <div className='main' >
       <div className="top">
        
         <div className="timer"><Timer questionnumber={questionnumber} setstop={setstop} /></div>
       </div>
       <div className="buttom">
        <QuestionsBox data={data} setstop={setstop} setquestionnumber={setquestionnumber} setearned={setearned} questionnumber={questionnumber}/>
       </div>
       
     </div>
      <div className='money' >
        <ul className='moneylist'>
        {moneyitems.map(m=>(
            <li className={questionnumber===m.id?'moneylistitem active ':'moneylistitem '}>
            <span className='moneylistnumber'>{m.id}</span>
             <li className='moneylistammount'>$ {m.price}</li>

         
          </li>
        ))}
         

         
         
        </ul>
      </div>

</>
         
         }
    
   </div>

  );
}

export default App;
