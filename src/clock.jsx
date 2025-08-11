import { useEffect, useState } from "react";

function Clock({ color }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup the interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h1 style={{ background: "black", color: color }}>{time}</h1>
    </>
  );
}

export default Clock;
