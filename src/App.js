import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'

import exampleApi from './example-api.json' /* VD - Example api data to use, will use real API in app but not relevant for development purposes */

import { CurrentQuestion } from 'components/CurrentQuestion'

const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  
  const [questions, setQuestions] = useState([])

  /* API loader */
  useEffect(() => {
    console.log(exampleApi)
  }, [])
  return (
    <Provider store={store}>
      <CurrentQuestion />
    </Provider>
  )
}
