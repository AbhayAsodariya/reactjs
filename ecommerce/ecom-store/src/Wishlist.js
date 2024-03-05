import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

function Wishlist() {
  return (
    <>
        <Header/>  
        {Wishlistmenu()}  
    </>
  )
}

function Wishlistmenu()
{
    return(
        <>
        <div className="container">

            <h4 className='p-3'>My Wish List on eTrade </h4>
        <table className='table'>
            <thead className='table-secondary'>
                    <tr>
                        <td></td>
                        <td>Product</td>
                        <td>Unit Price</td>
                        <td>Stock Status</td>
                        <td></td>
                    </tr>
            </thead>
            <tbody>
                <tr className='p-3'>
                    <td><button className='btn border'><i className="fa fa-times" aria-hidden="true"></i></button></td>
                    <td>Wireless PS Handler</td>
                    <td>	$124.00</td>
                    <td>In Stock</td>
                    <td><button className='btn border'>Add to Cart</button></td>
                </tr>
                <tr className='p-3'>
                    <td><button className='btn border'><i className="fa fa-times" aria-hidden="true"></i></button></td>
                    <td>	Gradient Light Keyboard</td>
                    <td>	$124.00</td>
                    <td>In Stock</td>
                    <td><button className='btn border'>Add to Cart</button></td>
                </tr>
                <tr >
                    <td><button className='btn border'><i className="fa fa-times" aria-hidden="true"></i></button></td>
                    <td>HD CC Camera</td>
                    <td>	$124.00</td>
                    <td>In Stock</td>
                    <td><button className='btn border'>Add to Cart</button></td>
                </tr>

            </tbody>
        </table>   
        </div>
     
        



        {data()}
        </>
    )
}



function data()
{
    return(
        <>
        <div className="container-fluid pt-5 border border-0 pb-2 border-bottom">
<div className="container py-4">
    <div className='row justify-content-center gap-3 gap-xl-0 '>
    <div className='d-flex col-8 col-md-6 col-lg-3 '>
            <div> 
            <img src="/img/service1.png" alt="" />  
            </div>
             <div>
             <p className='m-0 ms-3  fw-bold'>Fast & Secure Delivery
</p>
            <p className='ms-3'>Tell about your service.</p>
             </div>
            
        </div>
        
        <div className='d-flex col-8 col-md-6 col-lg-3'>
            <div>
            <img src="/img/service2.png" alt="" />  
            </div>
             <div>
             <p className='m-0 ms-3  fw-bold'>Money Back Guarantee</p>
            <p className='ms-3'>Within 10 days.</p>
             </div>
            
        </div>
        
        <div className='d-flex col-8  col-md-6 col-lg-3'>
            <div>
            <img src="/img/service3.png" alt="" />  
            </div>
             <div>
             <p className='m-0 ms-3  fw-bold'>24 Hour Return Policy</p>
            <p className='ms-3'>No question ask.</p>
             </div>
            
        </div>
        
        <div className='d-flex col-8 col-sm-6 col-md-6 col-lg-3'>
            <div>
            <img src="/img/service4.png" alt="" />  
            </div>
             <div>
             <p className='m-0 ms-3  fw-bold'>Pro Quality Support</p>
            <p className='ms-3'>24/7 Live support.</p>
             </div>
            
        </div>
        
    </div>
</div>
</div>
    {footer()}



        </>
    )
}

function footer()
{
    return(
        <>
       <div className="container-fluid border border-0 border-bottom py-5">
        <div className="container">
            <div className='row'>
            <div className='col-4 col-md-3'>
                <h5 className='my-3'>Support</h5>
                <p>685 Market Street,
                    Las Vegas, LA 95820,
                    United States.</p>
                    <div className='my-3'>
                    <i  className="fa fa-envelope-open-o me-2" aria-hidden="true"></i>example@domain.com
                    </div>
                    <div> <i className="me-2 fa fa-phone" aria-hidden="true"></i>
                    (+01) 850-315-5862
                    </div>
            </div>
            <div  className='col-4 col-md-3'>
            <h5 className='my-3'>Account</h5>
            <ul className=' list-unstyled'>
                <li className='my-3'>My Account</li>
                <li className='my-3'>Login / Register</li>
                <li className='my-3'>Cart</li>
                <li className='my-3'>Wishlist</li>
                <li className='my-3'>Shop</li>
            </ul>
            </div>
            <div  className='col-4 col-md-3'>
            <h5 className='my-3'>Quick Link</h5>
            <ul className='list-unstyled'>  
                <li className='my-3'>Privacy Policy</li>
                <li className='my-3'>Terms Of Use</li>
                <li className='my-3'>FAQ</li>
                <li className='my-3'>Contact</li>
                <li className='my-3'>Contact</li>
            </ul>

            </div>
            <div  className='col-6 col-md-3'>
            <h5 className='my-3'>Download App</h5>

            <p>Save $3 With App & New User only</p>
            <div className='d-flex gap-3'>
                <div><img src="/img/qr.png" alt="" /></div>
                <div className=''>
                    <div><img src="/img/app-store.png" alt="" /></div>
                    <div className='mt-3'><img src="/img/play-store.png" alt="" /></div>
                </div>
            </div>
            </div>


            </div>
                   </div>
       </div>

       {end()}
       </>
    )
}




function end()
{
    return(
        <>
        <div className="container-fluid py-4">
            <div className="container">
            <div className='row justify-content-between'>
            <div className='col-4'>
            <i className="fa fa-facebook mx-2" aria-hidden="true"></i>
            <i className="fa fa-instagram mx-2" aria-hidden="true"></i>
            <i className="fa fa-twitter mx-2" aria-hidden="true"></i>
            <i className="fa fa-linkedin mx-2" aria-hidden="true"></i>
</div>
            <div className='col-4'>
© 2023. All rights reserved by Axilthemes.</div>
            <div className='col-4'>Accept For</div>
        </div>
            </div>
        
        </div>
       
        </>

    )
}

export default Wishlist