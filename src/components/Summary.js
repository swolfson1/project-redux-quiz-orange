import React from 'react'
import ReactDOM from 'react-dom'
import './Summary.css'
import { useSelector } from 'react-redux'



export const Summary = () => {
  const allAnswers = useSelector((state) => state.quiz.answers)
  console.log(allAnswers)
  const amountCorrect = allAnswers.filter((answer) => answer.isCorrect)
  console.log(amountCorrect.length)

  return (
    <>
      {allAnswers.map((answer) => (
        <div className="summaryContainer">
            <h2>{answer.question.questionText}</h2>
            
              
              <div className="resultContainer">
                <h2 className="userAnswer">Your answer was: {answer.question.options[answer.question.correctAnswerIndex]}</h2>
                <span><h2>And it was: {answer.isCorrect ? 'correct' : 'incorrect'}</h2></span>
                </div>
              </div>
      ))}
      <div className="scoreContainer">Your score is: {amountCorrect.length}/5</div>
    </>
  )

}