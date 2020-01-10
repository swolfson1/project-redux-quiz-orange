import React, { useState } from 'react';
import { useInterval } from './useInterval';

export default function Timer() {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useInterval(() => {
    setElapsedSeconds(elapsedSeconds + 1);
  }, 1000);

  return (
    <div className="timer">
      <h1>Elapsed: {elapsedSeconds}</h1>
      {elapsedSeconds < 20 && <h1>Time left: {20 - elapsedSeconds}</h1>}
      {elapsedSeconds > 20 && <h1>Time's up!!!</h1>}
    </div>
  );
}