import '../css/booking.css'

function Booking(){
        return(
        <>
        <div className="container-fluid head">
       
                <div className=" p-2  d-flex  justify-content-center  justify-content-md-between ">
                <div className="p-3 ms-5 fw-bold fs-2"> 
                        BOOKING.COM 
                </div>
            
                <ul className=' d-flex justify-content-center  d-none d-lg-block p-3'>

                        <li  className=' m-2 d-inline'>inr</li>
                        <li  className=' m-2 d-inline'><img height={'30px'} className=' rounded-circle' alt='hi' src='https://t-cf.bstatic.com/design-assets/assets/v3.96.0/images-flags/In@3x.png'/></li> 
                        <li  className=' m-2 d-inline'>   <i class="fa fa-question-circle-o" aria-hidden="true"></i></li> 
                        <li className=' m-2 d-inline'>list of your property</li>
                        <li  className=' m-2 d-inline'><button className=' bg-white  ps-3  pe-4 rounded text-primary'>Regesiter</button></li>  
                        <li  className=' m-2 d-inline'> <button className=' bg-white ps-3 pe-4  rounded text-primary'>Sign in</button></li>
                </ul>
                </div>
                <div  className='ms-5 d-flex justify-content-center  d-block d-md-none p-2'>
                        <i class="fa fa-bars" aria-hidden="true"></i>
                </div>
                <ul className='ms-5 d-flex justify-content-center  d-none d-lg-block p-2'>
                        <li  className=' m-2 d-inline rounded-pill bound pt-2 pb-2 pe-4 ps-4'> <i class="fa fa-user" aria-hidden="true"></i> Stays</li>
                        <li  className=' m-2 d-inline rounded-pill bound pt-2 pb-2 pe-4 ps-4 '> <i class="fa fa-user" aria-hidden="true"></i> Flight</li>
                        <li  className=' m-2 d-inline rounded-pill bound pt-2 pb-2 pe-4 ps-4'> <i class="fa fa-user" aria-hidden="true"></i> Hotels</li>
                        <li  className=' m-2 d-inline rounded-pill bound pt-2 pb-2 pe-4 ps-4'> <i class="fa fa-user" aria-hidden="true"></i> Cars rentals</li>
                        <li  className=' m-2 d-inline rounded-pill bound pt-2 pb-2 pe-4 ps-4'> <i class="fa fa-user" aria-hidden="true"></i> Attraction</li>
                        <li  className=' m-2 d-inline rounded-pill bound pt-2 pb-2 pe-4 ps-4'> <i class="fa fa-user" aria-hidden="true"></i> Aitport taxis</li>
                </ul>
       </div>
       <div className='mycontent p-5 '>
                <div className=' m-5'>
                        <h1>Howzat for a perfect stay</h1>
                        <h3>Search hotels,homes and much more...</h3>
                        <button className='corner bg-primary mt-5 p-2'>Discover more</button>
                </div>
                <div className='d-flex footer flex-wrap  flex-lg-nowrap'>
                        <div className='border border-warning bg-white text-dark p-2'> <i class="fa fa-bed" aria-hidden="true"></i>
                        Where are you going? </div>
                        <div className='border border-warning bg-white text-dark p-2'> <i class="fa fa-calendar" aria-hidden="true"></i>
                        check in date -- check out date </div>
                        <div className='border border-warning bg-white text-dark p-2'> <i class="fa fa-user" aria-hidden="true"></i>
                        adult- child - room</div>
                        <button className='border border-warning bg-primary p-2 corner'>Search</button>
                </div>
    </div>

</>
)
}




export default Booking;
