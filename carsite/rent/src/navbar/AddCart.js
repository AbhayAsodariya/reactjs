import React, { useContext } from 'react';
import { Addcar } from '../App';
import './Addcart.css'
import {MdAddCircle} from 'react-icons/md'
import {IoMdRemoveCircle} from 'react-icons/io'
import { Userlogin } from '../App';
import { useNavigate } from 'react-router-dom';



const AddCart = ({addquantity,removequantity,clearquantity,deletequantity}) => {

    // console.log(Addcartdata.name)
  const {loginuser} = useContext(Userlogin)
  const {cartdata} = useContext(Addcar)
  const navigate = useNavigate('')

   const totolprice = cartdata.reduce((price,item) => price + item.quantity * item.price ,0)



const ordernow = ()=>
{
 if(loginuser && cartdata.length > 0)
 {
  
  alert("Order Successful");
  navigate('/');
  clearquantity()
 }
 else
 {
  alert("Please Login");
  navigate('/signin')
 }
}








  return (
    <div className='addcart-items'>
      <div className='addcart-items-header'> Cart Items </div>
     {cartdata.length === 0 && <div className='addcart-items-empty'> No Items</div>}
     {cartdata.length > 0 && <button className='addcart-items-clear' onClick={clearquantity}>Clear</button>}




     <div> 
      {

      cartdata.map((item)=>(
        <div key={item.id} className='addcart-item-list'>

        <div className='addcart-img'>  <img src={item.url} alt=""  className='addcart-item-img'/></div>

           
           <div className='addcart-info'>      
          <div className='addcart-item-name'> {item.name}  <br /> Slot : {item.slot ? item.slot : "Sold Out"} </div>
          <div className='addcart-item-function'>
            <button className='addcart-item-add' onClick={()=>{addquantity(item)}}><MdAddCircle/> </button>
            <button className='addcart-item-remove' onClick={()=>{removequantity(item)}}><IoMdRemoveCircle/> </button>
            <button className='addcart-item-delete' onClick={()=>{deletequantity(item)}}> <i className='bx bx-x'></i> </button>
          </div>
           <div className='addcart-item-price'>
           {item.quantity} * ${item.price} =  ${ item.quantity * item.price} 
           </div>
           </div>


        </div>

      ))}
   


     </div>


   


     
     
     {cartdata.length > 0 &&
      <div className='addcart-totalprice'>Total Price : 
            ${totolprice}

            
     </div>
     }


{cartdata.length > 0 &&
  <div className='item-Payment' onClick={ordernow}>Order Now</div>
}




    </div>
  );
}

export default AddCart;
