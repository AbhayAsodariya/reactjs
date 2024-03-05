import React, { useContext } from 'react';
import "./ListingGrid.css"
import NavBarPart from '../navbar/NavBarPart';
import ListingcomonCom from './ListingcomonCom';
import { Link, useNavigate } from 'react-router-dom';
import {CarsApi} from '../Cardata/CarsApi';
import { Carsdata } from '../App';


function LsitingGrid({Handleaddcart}) {
  const {carssetdetailes} = useContext(Carsdata)
const Navigate = useNavigate()
  return (
    <div>
      <NavBarPart/>
    <div className='Listinggrid_container'>
 
 <ListingcomonCom/>
    

     
     

 <div className='cards'>
{ CarsApi &&
CarsApi.map((cars)=>(

   <div className='card'>
   <div className='Car_img'>
    <div onClick={()=>{carssetdetailes(cars) ; Navigate('/listing/listingdetails')}}> <img src={cars.url} alt="" /> </div>
     <div className='Img_icons'><i className='bx bxs-star'></i></div>
     <div className='model_name'>{cars.modelname}</div>
   </div>
   <div>
     <h3 className='car_name'>{cars.name}</h3>
     <div className='car_review'><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i> (5.0)</div>
     <div className='car_info'>
       <div>{cars.gear}</div>
       <div>{cars.Speed}</div>
       <div><i className='bx bx-gas-pump'></i>{cars.engine}</div>
       <div>{cars.stearing}</div>
       <div>{cars.model}</div>
       <div>{cars.sit}</div>
     </div>
     <div className='country_rent'>
       <div className='country'> <i className='bx bx-location-plus'></i>{cars.country}</div>
       <div> <span style={{color : 'red',fontWeight:"700",fontSize:"22px"}}>{cars.price}</span> /Day  </div>
     </div>
     <button className='Rent_btn'> <Link to={'/addcart'} className='Link_tag'  onClick={()=>{Handleaddcart(cars) }}> <i className='bx bxs-calendar-alt'></i>Rent Now </Link></button>
     {/* <a onClick={(e)=>{carssetdetailes(Car) }} className='Listinglist_Rent' target='_blank' href='/listing/listingdetails'>Rent Now</a> */}
   </div>
</div>
 ))
}
</div>









    </div>
    </div>
  );
}

export default LsitingGrid;
