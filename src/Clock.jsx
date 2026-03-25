import { useEffect } from "react";
import { useState } from "react";

function Clock(){
    const [time, setTime] = useState(new Date());
     useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []); 
  return (
    <div>
      <h2>Ora curentă:</h2>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
};
export default Clock;