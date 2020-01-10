import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import { Quiz } from './components/quiz.js'


const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  //const questions = useSelector((state) => state.quiz.questions)

  return (
    <Provider store={store}>
      <Quiz />
    </Provider>
  )
}
