import React, { useRef } from 'react'

function Useref() {

        const test = useRef();

        function aaa(){
        console.log(test);
        console.log(test.current);
        }
  return (
    <div>
      <button ref={test} onClick={aaa}>Test</button>
    </div>
  )
}

export default Useref;
