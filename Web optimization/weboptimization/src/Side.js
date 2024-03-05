import React from 'react'

function Side() {
  return (
    
    <div className='left-side rounded-4'>
    <div className='text-center'>
        <img src="/img/Logo(4).png" height={"30px"} alt="" />
    </div>
    <div className='py-3'>Today</div>
    <div className='pb-3'>Requests</div>
    <div className='pb-3'>Calander</div>
    <div className='pb-3'>Inbox</div>
    <div>Menu</div>
    <div className='position-absolute bottom-0 text-center bg-success start-0 w-100'>Logout</div>
    </div>
  
  )
}

export default Side
