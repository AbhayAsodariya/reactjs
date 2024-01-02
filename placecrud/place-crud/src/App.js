import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import EmpCreate from './EmpCreate';
import EmpListing from './EmpListing';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmpListing/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;