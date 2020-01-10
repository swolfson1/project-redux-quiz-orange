import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'
import 'components/options.css'


export const Options = () => {

  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuesionIndex])
  const dispatch = useDispatch()

  const [hasAnswered, setHasAnswered] = useState(false)
  const [answerIndex, setAnswerIndex] = useState(99)

  /** Reset hasAnswered and setAnswerIndex for each question */
  useEffect(() => {
    setHasAnswered(false)
    setAnswerIndex(99)
  },[question])

  const handleButtonPress = (index) => {
    setHasAnswered(true)
    setAnswerIndex(index)

    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
    console.log('hej' + index)
  }

  const classChecker = (index) => {
    console.log("answerIndex=", answerIndex)
    if (!hasAnswered) {
      return ''
    }
    console.log('xx-answer')
    console.log(question.correctAnswerIndex)
    if (index === question.correctAnswerIndex) {
      return 'correct-answer'
    }
    else if (index === answerIndex) {
      return 'wrong-answer'
    }
  }

    return(  
    <div className="option-container"> 
      {question.options.map((option, index) => {
          
          return (
        <button key={index}
        className={classChecker(index)}

         type="button" 
         onClick={() => handleButtonPress(index)}>
        {option}</button>
      )})}
    </div> 
  
    )
  }
