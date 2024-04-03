import React, { useState } from 'react'
import { QuizData } from '../Data/QuizData'
import QuizeResult from './QuizeResult';

const Quize = () => {
    const  [currentQuestion,  setCurrentQuestion]=useState(0); 
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult]= useState(false)
    const changeQuestion=()=>{
        updateScore();
        if(currentQuestion<QuizData.length-1){
            setCurrentQuestion(currentQuestion+1)
            setClickedOption(0)
        }else{
setShowResult(true)
        }
   
    }
    const updateScore=()=>{
        if(clickedOption===QuizData[currentQuestion].answer){
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0)
    }
    
  return (
    <div>
      <p className='heading-txt'>Quize App</p>

<div className="container">

{showResult ? (
            <QuizeResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
        ):(
            <>
    <div className="question">
        <span id="question-number">{currentQuestion+1}.</span>
        <span  id="question-text">{QuizData[currentQuestion].question}</span>

    </div>
    <div className="option-container">
       
        {QuizData[currentQuestion].options.map((option,i)=>{
            return(
                <button className={`option-btn ${
                    clickedOption===i+1?"checked":null
                }`} key={i} onClick={()=> setClickedOption(i+1)}>
                    {option}
                </button>
            )
        })

        }
    </div>
    <input type="button" value="Next"  id='next-button' onClick={changeQuestion}/>
    </>)}
</div>
    </div>
  )
}

export default Quize
