import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import {Options} from './Options'

export const Answers = () => {
  
  // const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuesionIndex])
  // const dispatch = useDispatch()
  // dispatch(quiz.actions.submitAnswer({ questionId: 1, answerIndex: 3 }))

  return(  

  <> 
  <Options />
    {/* {question.options.map((option) => (
      <button>{option}</button>
    ))} */}
  </> 

  )
}
