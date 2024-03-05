import React from 'react'

function Footer() {
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

export default Footer

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
