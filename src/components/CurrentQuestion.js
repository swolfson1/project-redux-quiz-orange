import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Answers } from './Answers'
import './CurrentQuestion.css';
import { quiz } from 'reducers/quiz'
import { useFetchQuestionsfromAPI } from './fetchQuestionsfromAPI.js'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuesionIndex])

  useFetchQuestionsfromAPI(true)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div className="container">
      <div className="question">
        <h1>Question:</h1>
        <h2>{unescape(question.questionText)}</h2>
      </div>
     <Answers/>
    </div>
    

  )
}
