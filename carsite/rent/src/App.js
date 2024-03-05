import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPageWeb from './MainPageWeb';
import Signinpage from './navbar/Signinpage';
import Signup from './navbar/Signup';
import LsitingGrid from './ListingPages/LsitingGrid';
import ListingList from './ListingPages/ListingList';
import ListingDetails from './ListingPages/ListingDetails';
import Scrollbtn from './Scrollbtn';
import {  createContext, useState } from 'react';
import AddCart from './navbar/AddCart';
import {CarsApi} from './Cardata/CarsApi';


 

export const Carsdata = createContext()
export const Userlogin = createContext()
export const Addcar = createContext()




function App() {

 const [loginuser,setloginuser] = useState('')

  const x = (p) =>{
    setloginuser(p)
  }
const [Car,carssetdetailes] = useState('')
 
// console.log(carsdetaile)
// console.log(Carcart)

 const [cartdata,setcartdata] =  useState([])





const Handleaddcart = (product)=>{
  const ProductExist = cartdata.find((item) => item.id === product.id);

  if(ProductExist)
  {
    setcartdata(cartdata.map((item) => item.id === product.id ? {
      ...ProductExist,quantity :ProductExist.slot > ProductExist.quantity  ? ProductExist.quantity +1 : ProductExist.slot ? "Sold out" : '' } : item))
  }
  else{
    setcartdata([...cartdata , {...product , quantity : 1}])
  }
}

const removequantity = (product)=>{
  const ProductExist = cartdata.find((item) => item.id === product.id);
  if(ProductExist.quantity === 1)
  {
    setcartdata(cartdata.filter((item)=> item.id !== product.id))
  }
  else
  {
    setcartdata(cartdata.map((item)=>item.id === product.id ? {...ProductExist , quantity : ProductExist.slot>=ProductExist.quantity ? ProductExist.quantity -1 : ProductExist.slot } : item))
  }
}


const clearquantity = ()=>
{
  setcartdata([])
}

const deletequantity = (product)=>{
  setcartdata(cartdata.filter((item)=>item.id != product.id ))
}



console.log(cartdata)


  return (
    <div className="App">
      

      <BrowserRouter>
      <Userlogin.Provider value={{loginuser,setloginuser}}>
      <Carsdata.Provider value={{Car,carssetdetailes}}>
        <Addcar.Provider value={{cartdata,setcartdata}}>

  
  <Routes>
    <Route path='/' element={<MainPageWeb Handleaddcart={Handleaddcart}/>}></Route>
    <Route path='/signin' element={<Signinpage/>}></Route>
    <Route path='/addcart' element={<AddCart addquantity={Handleaddcart} removequantity={removequantity} clearquantity={clearquantity} deletequantity={deletequantity}/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/listing/listinggrid' element={<LsitingGrid Handleaddcart={Handleaddcart}/>}></Route>
    <Route path='/listing/listinglist' element={<ListingList Handleaddcart={Handleaddcart}/>}></Route>
    <Route path='/listing/listingdetails' element={<ListingDetails Handleaddcart={Handleaddcart}/>}></Route>
  </Routes>
      
  </Addcar.Provider>
  </Carsdata.Provider>
  </Userlogin.Provider>
      </BrowserRouter>
 
      <Scrollbtn/>


    </div>
  );
}

export default App;
