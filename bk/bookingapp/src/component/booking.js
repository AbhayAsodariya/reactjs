import '../css/booking.css';


function Booking(){
        return(
                <>
                <div className="header">

                        <div className='container px-5'>
                                <div className="reg d-flex justify-content-between align-items-center">
                                        <h1>Booking.com</h1>
                                        <div className='social d-xl-flex d-lg-flex d-none align-items-center gap-4'>
                                                <span className='mx-3'>INR</span>
                                                <img className="rounded-circle" src="https://t-cf.bstatic.com/design-assets/assets/v3.96.0/images-flags/In@3x.png" alt="" width={"30px"}/>
                                                <span className='mx-3 fs-3'><i class="fa fa-question-circle-o" aria-hidden="true"></i></span>
                                                <span><b>List your property</b></span>
                                                <span >
                                                        <button className='rg-sn rounded'>Register</button>
                                                        <button className='rg-sn rounded'>Sign in</button>
                                                </span>
                                        </div>
                                </div>

                                <div className="nav">
                                        <ul className='navbar list-unstyled'>
                                                <li className='nav-item'><a className='nav-link text-white ps-0 pe-5' href=""><i class="fa fa-bed" aria-hidden="true"></i> Stays</a></li>
                                                <li className='nav-item'><a className='nav-link text-white ps-0 pe-5' href=""><i class="fa fa-fighter-jet" aria-hidden="true"></i> Flight</a></li>
                                                <li className='nav-item'><a className='nav-link text-white ps-0 pe-5' href=""><i class="fa fa-globe" aria-hidden="true"></i> Flight + Hotel</a></li>
                                                <li className='nav-item'><a className='nav-link text-white ps-0 pe-5' href=""><i class="fa fa-car" aria-hidden="true"></i> Car rentals</a></li>
                                                <li className='nav-item'><a className='nav-link text-white ps-0 pe-5' href=""><i class="fa fa-meetup" aria-hidden="true"></i> Attractions</a></li>
                                                <li className='nav-item'><a className='nav-link text-white ps-0 pe-5' href=""><i class="fa fa-taxi" aria-hidden="true"></i> Airport taxis</a></li>
                                        </ul>
                                </div>
                        </div>
                        
                </div>
                <div className="section py-5 position-relative">
                        <div className='container p-5'>

                                <h1 className='fs-1 fw-bold my-2'>Howzat for a perfect stay</h1>
                                <p className='fs-4 mb-4'>Search hotels, homes and much more</p>
                                <button className='dis rounded-1 text-white fw-bold'>Discover more</button>

                                <div className='footbar row text-black position-absolute w-100'>
                                        <div className='border col-xl-3 col-lg-3 border-3 bg-white p-0 border-warning'>
                                                <input type="text" className='p-2 border-0' placeholder='Where are you doing?'/>
                                        </div>
                                        <div className='border border-3 col-xl-3 col-lg-3 bg-white border-warning p-2'>
                                                <i class="fa fa-calendar" aria-hidden="true"></i> Check-in Date -- Check-out Date
                                        </div>
                                        <div className='border border-3 col-xl-3 col-lg-3 bg-white border-warning p-2'>
                                                <i class="fa fa-user-o" aria-hidden="true"></i> 2 adults &#46; 0 children &#46; 1 room
                                        </div>
                                        <div className='border border-3 col-xl-1 col-lg-1 p-0 border-warning'>
                                                <button className='btn rounded fs-5 text-white px-4 search w-100'>Search</button>
                                        </div>
                                </div>

                        </div>
                </div>
        </>
        )
}
export default Booking;