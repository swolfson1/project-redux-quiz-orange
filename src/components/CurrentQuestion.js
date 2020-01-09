import React from 'react'
import { useSelector } from 'react-redux'
import './CurrentQuestion.css';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuesionIndex])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div className="container">
      <div className="question">
        <h1>Question:</h1>
        <h2>{question.questionText}</h2>
      </div>
    </div>

  )
}
