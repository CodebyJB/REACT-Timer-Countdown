import React, { useState, useEffect } from "react";

function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerInterval;

    if (isRunning) {
      timerInterval = setInterval(() => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
          setIsRunning(false);
          clearInterval(timerInterval);
        } else {
          if (seconds === 0) {
            if (minutes === 0) {
              if (hours === 0) {
                setIsRunning(false);
                clearInterval(timerInterval);
                return;
              }
              setHours(hours - 1);
              setMinutes(59);
            } else {
              setMinutes(minutes - 1);
            }
            setSeconds(59);
          } else {
            setSeconds(seconds - 1);
          }
        }
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }

    return () => clearInterval(timerInterval);
  }, [isRunning, hours, minutes, seconds]);
  

  const handleStart = () => {
    if (hours > 0 || minutes > 0 || seconds > 0) {
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const handleHourChange = (e) => {
    const newHours = parseInt(e.target.value);
    setHours(newHours >= 0 ? newHours : 0);
  };

  const handleMinuteChange = (e) => {
    const newMinutes = parseInt(e.target.value);
    setMinutes(newMinutes >= 0 ? newMinutes : 0);
  };

  const handleSecondChange = (e) => {
    const newSeconds = parseInt(e.target.value);
    setSeconds(newSeconds >= 0 ? newSeconds : 0);
  };

  return (
    <div>
      <h1>Timer</h1>
      <div>
        <input
          type="number"
          value={hours}
          onChange={handleHourChange}
          disabled={isRunning}
        />
        :
        <input
          type="number"
          value={minutes}
          onChange={handleMinuteChange}
          disabled={isRunning}
        />
        :
        <input
          type="number"
          value={seconds}
          onChange={handleSecondChange}
          disabled={isRunning}
        />
      </div>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Timer;
