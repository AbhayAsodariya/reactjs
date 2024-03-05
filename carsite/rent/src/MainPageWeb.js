import React from 'react';
import Navbarmain from './navbar/Navbarmain';
import Carsmodel from './Cardata/Carsmodel';
import LsitingGrid from './ListingPages/LsitingGrid';
import ListingList from './ListingPages/ListingList';
import ListingDetails from './ListingPages/ListingDetails';
import Logout from './navbar/Logout';

function MainPageWeb({Handleaddcart}) {

  // const carsalldetails = (intialcardetail)=>{
  //    console.log(intialcardetail)
  // }

  return (
    <div>
      <Navbarmain/>
      <Logout/>
      <Carsmodel Handleaddcart={Handleaddcart}/>
      {/* <LsitingGrid/> */}
      {/* <ListingList/> */}
      {/* <ListingDetails/> */}
    </div>
  );
}

export default MainPageWeb;
