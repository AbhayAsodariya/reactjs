import React from 'react'

function Home() {
  return (
    <div>
        <div className='container-fluid'>
        <div className="row  border border-2 header">
            <div className="col-md-3 logo">
                <img src="https://www.clipartbest.com/cliparts/9cp/Lbg/9cpLbg7Ri.jpg" style={{height:80 , width:120}} alt="Logo"/>
                <span className='bar'><i className="fa-solid fa-bars"></i></span>
            </div>
            
            <div className="col-md-5 text-center pt-4 category ">
                <div className="input-group input-group-md mb-2 fs-5">
                <span style={{marginTop:5,marginRight:10}}>All categories </span><input type="text" className="form-control" placeholder="Search"/>
                <button className="btn btn-outline-secondary" type="button">
                    <i className="fa fa-search"></i>
                </button>
                </div>
            </div>
            <div className="col-md-4 pt-4 acoount-detail">
                <div className="d-flex justify-content-center align-items-center"  style={{fontSize:18}}>
                <select className='me-3 fs-6' style={{padding:5}}>
                    <option>Amreli</option>
                    <option>Ahmedabad</option>
                    <option>Rajkot</option>
                </select>
                <div className="me-3">
                    <i className="fa-solid fa-heart" style={{paddingRight:8}}></i>Wishlist
                </div>
                <div className="me-3">
                    <i className="fa-solid fa-cart-shopping" style={{paddingRight:8}}></i>Cart
                </div>
                <div >
                    <i className="fa-solid fa-user" style={{paddingRight:8}}></i>Account
                </div>
                </div>
            </div>
        </div>
        <div className="row  border border-2 navbar">
            <div className="col-md-3 p-2">
                <select style={{backgroundColor:'#AFEEEE',fontSize:18 }}>
                    <option>Browse All Categories</option>
                    <option>Red Apple</option>
                    <option>Snack</option>
                    <option>Vegetable</option>
                    <option>Strawberry</option>
                    <option>plum</option>
                    <option>Dragen</option>
                    <option>Coffee & Tea</option>
                    <option>Headphone</option>
                    <option>Cake & Milk</option>
                    <option>Cauliflower</option>
                    <option>Pineapple</option>
                    
                </select>
            </div>

            <div className="col-md-6">
                <ul className="nav justify-content-center" style={{fontSize:18}}>
                    <li className="nav-item">
                        <a className="nav-link" href="#"   style={{color:'green'}}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Shop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Pages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Contact</a>
                    </li>
                </ul>
            </div>

            <div className="col-md-3 p-2">
            <i className="fa-solid fa-headphones" style={{fontSize:25,marginRight:10}}></i><span class="fw-bold" style={{fontSize:20,color:'green'}}>1900 - 888</span>
            </div>
        </div>

        </div>

        <div className="container rounded-5 border border-3 custom-container my-4  ">
            <h1>Don't miss our amazing <br/>grocery deals</h1>
            <h5 className='my-3'>Sign up for the daily newsletter</h5>
            <input type="email" className=" rounded-pill p-2 px-5 my-3 ps-1" placeholder="Your email address"/>
            <button className="p-2 px-3 btn btn-success rounded-pill btn1" type="button">Subscribe</button>
        </div>
        

        <div className="container">
            <div className="row">
                    <div className="col d-flex">
                        <h3>Featured Categories</h3>
                        <ul className='d-flex nav'>
                            <li className="nav-item"><a className="nav-link text-dark" href="#">Pet Foods</a></li>
                            <li className="nav-item"><a className="nav-link text-dark" href="#">Vegetables</a></li>
                        </ul>
                    </div>
                </div>
            <div className="row">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 mb-2">
                    <img src="https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg" alt="Apple-img" className="img-fluid"/>
                    <h5>Apple</h5>
                    <p>56 items</p>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 mb-2">
                    <img src="https://eatanytime.in/cdn/shop/products/JalapenoMock1.png?v=1694095391&width=1946" alt="Snack-img" className="img-fluid"/>
                    <h5>Snack</h5>
                    <p>24 items</p>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 mb-2">
                    <img src="https://www.hi5mart.com/image/cache/catalog/Vegetables/Cabbage-750x750.jpeg" alt="Vegetable-img" className="img-fluid"/>
                    <h5>Vegetables</h5>
                    <p>30 items</p>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 mb-2">
                    <img src="https://s30386.pcdn.co/wp-content/uploads/2019/08/Strawberries_HNL1306_ts104880701.jpg" alt="Strawberry-img" className="img-fluid"/>
                    <h5>Strawberry</h5>
                    <p>42 items</p>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 mb-2">
                    <img src="https://www.cartly.ca/cdn/shop/products/Black-Jamun.jpg?v=1636479513" alt="Plum-img" className="img-fluid"/>
                    <h5>Plum</h5>
                    <p>50 items</p>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 mb-2">
                    <img src="https://im.pluckk.in/unsafe/1200x0/uploads/4637-dragon.jpg" alt="Dragon-img" className="img-fluid"/>
                    <h5>dragon</h5>
                    <p>35 items</p>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 mb-2">
                    <img src="https://images-eu.ssl-images-amazon.com/images/I/71GpdOeLnDL._AC_UL600_SR600,600_.jpg" alt="Cofee-img" className="img-fluid"/>
                    <h5>Coffee</h5>
                    <p>24 items</p>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 mb-2">
                    <img src="https://images-cdn.ubuy.co.in/64c95665f1c03a37e40a268d-beats-by-dr-dre-solo3-noise-canceling.jpg" alt="Headphone-img" className="img-fluid"/>
                    <h5>Headphone</h5>
                    <p>60 items</p>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 mb-2">
                    <img src="https://thebakeryexpress.ae/wp-content/uploads/2020/10/CAKE-BLACK-FOREST.jpg" alt="Cake-img" className="img-fluid"/>
                    <h5>Cake</h5>
                    <p>55 items</p>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 mb-2">
                    <img src="https://euro-atlantic.com.my/wp-content/uploads/2019/03/white-cauliflower.jpg" alt="Cauliflower-img" className="img-fluid"/>
                    <h5>Cauliflower</h5>
                    <p>40 items</p>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 mb-2">
                    <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71YXLlv3svL._AC_UF1000,1000_QL80_.jpg" alt="Pineapple-img" className="img-fluid"/>
                    <h5>Pineapple</h5>
                    <p>70 items</p>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 mb-2">
                    <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61v8Ra7y+pL.jpg" alt="Snack-img" className="img-fluid"/>
                    <h5>Snack</h5>
                    <p>65 items</p>
                </div>
            </div>
        </div>
</div>




  )
}

export default Home
