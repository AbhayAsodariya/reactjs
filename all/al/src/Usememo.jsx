import React, { useCallback, useMemo, useState } from 'react'

function Memo() {
    const[myNum,setNum] = useState(0);
    const[show,setShow] = useState(false);

    const getValue = ()=>{
        return setNum(myNum+1)
    }
    const counter = (num)=>{
        for(let i=0; i<1000000000; i++){}
        return num;
    }
    const checkD = ()=>{
        console.log(counter(myNum))
       return counter[myNum];
    }
    const checkC = useCallback(()=>{
        return checkD
    },[checkD])
//     const checkData = counter(myNum);
//    console.log(checkData)
    const checkData = useMemo(()=>{
        console.log(counter(myNum))
       return counter(myNum);
      
    },[myNum])
  return (
    <div>
      <button onClick={getValue}>Counter</button>
      <p onClick={checkC}>kjdfkjf</p>
      <p>{checkData}</p>
      <button onClick={()=>{setShow(!show)}}>{(show)?"Click Me":"You Clicked Me"}</button>
    </div>
  )
}

export default Memo