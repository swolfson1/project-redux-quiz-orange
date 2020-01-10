import React from 'react'

import { NextButton } from './NextButton'
import { Counter } from './Counter'

import Timer from './timer'


export const Footer = () => {
  return (
    <div className="footer-container">
      <Timer />
      <div className="counter-next">
        <Counter />
        <NextButton />
      </div>
    </div>

  )
}