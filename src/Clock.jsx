import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState('');

  const showTime = () => {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = 'AM';

    if (hour >= 12) {
      if (hour > 12) hour -= 12;
      am_pm = 'PM';
    } else if (hour === 0) {
      hour = 12;
      am_pm = 'AM';
    }

    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    let currentTime = hour + ':' + min + ':' + sec + ' ' + am_pm;
    setCurrentTime(currentTime);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showTime();
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return <div id="clock">{currentTime}</div>;
};

export default Clock;
