import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function CountdownTimer() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2021-01-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        seconds: Math.floor((difference / 1000) % 40)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}