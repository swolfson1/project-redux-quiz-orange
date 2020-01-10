import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const Options = () => {

  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuesionIndex])
  const dispatch = useDispatch()

  const [hasAnswered, setHasAnswered] = useState(false)
  const [answerIndex, setAnswerIndex] = useState(99)

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

  return (
    <>
      {question.options.map((option, index) => {

        return (
          <button key={index}
            className={classChecker(index)}

            type="button"
            onClick={() => handleButtonPress(index)}>
            {option}
          </button>
        )
      })}
    </>

  )
}
