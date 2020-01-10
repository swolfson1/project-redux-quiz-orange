
import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { useSelector } from 'react-redux'



export const NextButton = () => {
  const questions = useSelector((state) => state.quiz.questions)
  const currentQuestionIndex = useSelector((state) => state.quiz.currentQuesionIndex)
  const dispatch = useDispatch()

  return (
    <>
      <button className="nextBtn" type="button" value="Next" onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
        {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
      </button>
    </>
  )
}