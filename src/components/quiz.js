import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { CurrentQuestion } from 'components/CurrentQuestion'
import { Footer } from 'components/footer.js'
import { Summary } from 'components/Summary'

export const Quiz = () => {
  const quizOver = useSelector((state) => state.quiz.quizOver)

  return (
    <div className="app-container">
      <div className="header">
        <h1>Quiz</h1>
      </div>
      {!quizOver && <CurrentQuestion />}
      {!quizOver && <Footer />}

      {quizOver && <Summary />}
    </div>

  )
}
