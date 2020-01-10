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
        <div>
          <h2>{answer.question.questionText}</h2>
          <h2>{answer.question.options[answer.question.correctAnswerIndex]}</h2>
          <h4>{answer.isCorrect ? 'correct' : 'incorrect'}</h4>
        </div>
      ))}
      <h2>Your score is: {amountCorrect.length}/5</h2>
    </>
  )

}