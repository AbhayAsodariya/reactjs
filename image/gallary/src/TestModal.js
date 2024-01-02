import React from 'react';
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { useRef } from "react";
import { useEffect } from "react";

function TestModal() {
    const [show, setShow] = useState(false);

  return (
    <div className="App">
      {/* <button onClick={()=>{setShow(true)}}>
        Open Modal
      </button> */}
      <div className='container'>
      <div className='row gap-3'>
        <div className='row'>

          <div className='col-4 row gap-4'>
            <div>
              <img onClick={()=>{setShow(true)}} width="100%" height="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />
            </div>
            <div>
              <img onClick={()=>{setShow(true)}} width="100%" height="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />
            </div>
          </div>

          <div className='col-8'>
            <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />
          </div>

        </div>

        <div className='row'>
          <div className='col-2'>
            <img onClick={()=>{setShow(true)}} width="100%" height="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />
          </div>
          <div className='col-2'>
            <img onClick={()=>{setShow(true)}} width="100%" height="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />
          </div>
          <div className='col-2'>
            <img onClick={()=>{setShow(true)}} width="100%" height="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />
          </div>
          <div className='col-2'>
            <img onClick={()=>{setShow(true)}} width="100%" height="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />
          </div>
          <div className='col-2'>
            <img onClick={()=>{setShow(true)}} width="100%" height="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />
          </div>
          <div className='col-2'>
            <img onClick={()=>{setShow(true)}} width="100%" height="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />
          </div>
        </div>
      </div>
    </div>

      <PopModal  isOpen={show}>
      <button onClick={()=>{setShow(false)}}>Close</button>
        
        <div className='d-flex gap-4'>
          <div className='row gap-4'>
          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />
          </div>

          <div className='row gap-4'>
          <img onClick={()=>{setShow(true)}} width="100%" height="250px" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />
          </div>

          <div className='row gap-4'>
          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />
          </div>

          <div className='row gap-4'>
          <img onClick={()=>{setShow(true)}} width="100%" height="400px" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />

          <img onClick={()=>{setShow(true)}} width="100%" src="https://cf.bstatic.com/xdata/images/hotel/max500/442796560.jpg?k=8d015e07a28acd23e27c64959856176eda82851711f83396f55c7cfd8a0dd30b&o=&hp=1" alt="" />
          </div>
        </div>
        
      </PopModal>
    </div>
  )
}

export default TestModal


function PopModal({ isOpen, children }) {

    const dRef = useRef();
    console.log(dRef);
  
  useEffect(()=>{
  
  if(!isOpen)
  {
    return;
  }
    const dialog = dRef.current;
    dialog.showModal();
  
    return()=>{
      dialog.close();
    }
  
  },[isOpen])
  
    return (
      <>
        <dialog ref={dRef}>
          {children}
        </dialog>
      </>
    );
  }
  
