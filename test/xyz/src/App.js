import React, { useRef, useState } from 'react'

const data=[
  {id:1,title:1,subtitle:1},
  {id:2,title:2,subtitle:2},
  {id:3,title:3,subtitle:3}
]

const styl=
  {
    color:"green"
  }
  

function App() {
  const h1ref=useRef()
  const [css,setcss]=useState()
  
  function Css(){
    
    setcss(styl)
    h1ref.current.style.color="red"
    
  }
  return (
    <>

    <main ref={h1ref}>
      <h1 onClick={Css}>hello</h1>
    {data.map((t)=>{
       return(
       <div>
        <h1 >title {t.title}</h1>
        <h3  style={css}>subtitle {t.subtitle}</h3>
        </div>
       )
})}
    </main>
    </>
  )
}

export default App