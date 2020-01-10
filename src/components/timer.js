import React, { useState } from 'react';
import { useInterval } from './useInterval';
import { useSelector } from 'react-redux'

const TIMEPERQUESTION = 10

export default function Timer() {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const questions = useSelector((state) => state.quiz.questions)
  const timeAllowed = questions.length * TIMEPERQUESTION

  useInterval(() => {
    setElapsedSeconds(elapsedSeconds + 1);
  }, 1000);

  return (
    <div className="timer">
      {elapsedSeconds < timeAllowed && <h1>Time left: {timeAllowed - elapsedSeconds}</h1>}
      {elapsedSeconds > timeAllowed && <h1>Time's up!!!</h1>}
    </div>
  );
}