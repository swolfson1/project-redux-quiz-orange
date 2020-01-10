import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import { CurrentQuestion } from 'components/CurrentQuestion'
import { Footer } from 'components/footer.js'
import { Summary } from 'components/Summary'
import { useSelector } from 'react-redux'

const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  //const questions = useSelector((state) => state.quiz.questions)

  return (
    <div className="app-container">
      <Provider store={store}>


        <div className="header">
          <h1>Quiz Name</h1>
        </div>
        <CurrentQuestion />
        <Footer />
        <Summary />

      </Provider>
    </div >

  )
}
