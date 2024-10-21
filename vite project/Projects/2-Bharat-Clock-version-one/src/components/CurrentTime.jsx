import { useEffect, useState } from "react";


function CurrentTime() {

  const [date, setDate] = useState(new Date());
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    },1000)

    return () => clearInterval(intervalId);
  }, [])

  return (
    <p className='clock'>
      The current Time: {date.toLocaleDateString()} - 
      {date.toLocaleTimeString()}
    </p>
  );
}

export default CurrentTime
