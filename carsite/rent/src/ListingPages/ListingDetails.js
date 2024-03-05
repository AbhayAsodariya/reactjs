import React, { useContext } from 'react';
import ListingcomonCom from './ListingcomonCom';
import NavBarPart from '../navbar/NavBarPart';
import { Carsdata } from '../App';
import { Link } from 'react-router-dom';
import './ListingDetails.css'
import {FaCar} from 'react-icons/fa'

function ListingDetails({Handleaddcart}) {

 const {Car} = useContext(Carsdata)



  return (
    <div>
        <NavBarPart/>
        <h1 style={{marginTop:"80px"}}></h1>
            
<div className='car-card'>
        <div className='Listingdetails_card'>

<div className='Listingdetails_img'>
    <img src={Car.url} alt="" />
</div>

<div className='ListingList_details'>
     
     <div className='Listinglist_name_review'>
       <div>
           <p>{Car.name}</p>
           <p>Category : {Car.modelname}</p>
       </div>
       <div>
           <p className='car_review'><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i> (5.0)</p>
           <p className='Listing_carrent'> {Car.price} <span>/ Day</span> </p>
       </div>
     </div>


<div className='Listinglist_car_info'>
   <div>{Car.gear}</div>
   <div>{Car.Speed}</div>
   <div>{Car.engine}</div>
   <div>{Car.stearing}</div>
   <div>{Car.model}</div>
   <div>{Car.sit}</div>
</div>


   <div className='Listinglist_Rent_country'>
       <div>
           <p> <FaCar/>{Car.carcompany}</p>
           <p> <i className='bx bx-location-plus'></i>{Car.country}</p>
       </div>

       <div>
           <div className='Listinglist_Rent'> <Link  to={'/addcart'}  className='Link_tag' onClick={()=>{Handleaddcart(Car) }}>  <i className='bx bxs-calendar-alt'></i>Rent Now </Link></div>
       </div>

   </div>



</div>

</div>
</div>


    </div>
  );
}

export default ListingDetails;
