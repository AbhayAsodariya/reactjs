import React, { Suspense } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css'

const Home = React.lazy(()=>import('./Home'))
const Admin = React.lazy(()=>import('./Admin'))
const User = React.lazy(()=>import('./User'))

const App = () => {
  return (
   <div className='App'>
   <BrowserRouter>
   <Link to="/home">Home</Link>
      <Routes>
       
        <Route path='/home' element={
          <React.Suspense fallback={<>Loding...</>}>
            <Home/>
          </React.Suspense>
        }>
            
              <Route path='/home/admin' element={
                <React.Suspense fallback={<>Loding...</>}>
                  <Admin/>
                </React.Suspense>
              }></Route>
          
            
              <Route path='/home/user' element={
                <React.Suspense fallback={<>Loding...</>}>
                  <User/>
                </React.Suspense>
              }></Route>
            
        </Route>
      </Routes>
   
   </BrowserRouter>
   </div>
  );
};

export default App;
