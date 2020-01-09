import React from 'react'
import ReactDOM from 'react-dom'
import './footer.css'
import { useSelector } from 'react-redux'

export const Counter = () => {

  const amountOfQuestions = useSelector((state) => state.quiz.questions.length)

  const currentQuestion = useSelector((state) => state.quiz.currentQuesionIndex)

  const questionsLeft = amountOfQuestions - currentQuestion



  return (
    <div className="containerCounter">
      {questionsLeft}/5
    </div>

  )
}