import React, { useState, useEffect } from "react";

const initialSeconds = 100;

function CountDown() {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  const startCountdown = () => {
    if (!isRunning && seconds > 0) {
      setIsRunning(true);
    }
  };

  useEffect(() => {
    let timerInterval;

    if (isRunning && seconds > 0) {
      timerInterval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            clearInterval(timerInterval);
            setIsRunning(false);
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    } else if (seconds === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timerInterval);
  }, [isRunning, seconds]);

  useEffect(() => {
    startCountdown();
  }, []);

  return (
    <div className="countDown">
      <h1>Countdown</h1>
      <p>
        {String(Math.floor(seconds / 3600)).padStart(2, "0")}:
        {String(Math.floor((seconds % 3600) / 60)).padStart(2, "0")}:
        {String(seconds % 60).padStart(2, "0")}
      </p>
    </div>
  );
}

export default CountDown;
