import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import { CurrentQuestion } from 'components/CurrentQuestion'
import { Footer } from 'components/footer.js'
import { Summary } from 'components/Summary'
const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {

  return (
    <Provider className="container" store={store}>


      <div className="header">
        <h1>Quiz Name</h1>
      </div>
      <CurrentQuestion />
      <Footer />
      <Summary />

    </Provider>

  )
}
