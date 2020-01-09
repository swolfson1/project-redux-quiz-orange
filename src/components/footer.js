import React from 'react'

import { NextButton } from './NextButton'
import { Counter } from './Counter'

import Timer from './timer'


export const Footer = () => {
  return (
    <div className="container">
      <NextButton />
      <Counter />
      <Timer />
    </div>

  )
}