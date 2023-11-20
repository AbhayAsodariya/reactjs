import React, { useEffect, useState } from 'react'

// useEffect(()=>{})
// useEffect(()=>{},[])
// useEffect(()=>{},[values])

function UseEffectHook() {

   const[pos,setPos] =  useState({x:0,y:0})



useEffect(()=>{
    const handleMove = (e)=>{
        setPos({
             x:e.clientX,
             y:e.clientY
        })

        console.log(e)
    }

    window.addEventListener("mousemove",handleMove)
})
 



  return (


    <div style={{
        height:600,
        width:600,
        background:"lightblue",
        transform:`translate(${pos.x-300}px,${pos.y-300}px)`,
        position:"absolute",
        top:-10,
        left:-10,
        border:"3px groove #000",
        borderRadius:"50%",
        transition:"150s",
        
    }}>
     
    </div>
  )
}

export default UseEffectHook