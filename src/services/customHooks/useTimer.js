import React, { useEffect, useState } from "react";

export default function useTimer(expTime) {
  const [time, setTime] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const myTime = Math.floor((expTime - new Date()) / 1000);

      if (myTime <= 0) {
        clearInterval(interval);
      }
      console.log("myTime", myTime);

      let minutes = Math.floor((myTime % 3600) / 60);
      let seconds = (myTime % 3600) % 60;

      setTime({ minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [expTime]);

  return time;
}
