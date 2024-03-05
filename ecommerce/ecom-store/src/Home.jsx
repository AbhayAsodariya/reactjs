// import React from 'react'
import React, { useRef, useState } from 'react';
import './Style.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import './Slider1.css';
import Header from './Header';
import Footer from './Footer';

function Home() {
  return (
    <>
    <header className="header">
      
        <Header/>

        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper container"
          >
            <SwiperSlide>
              <div className="d-xl-flex d-lg-flex justify-content-center px-3 ">
                <div className="py-xl-5 py-lg-5">
                  <h6 className="mt-5 pt-5 text-danger">
                    Hot Deal In This Week
                  </h6>
                  <h1 className="display-3 fw-bold w-75">
                    Roco Wireless Headphone
                  </h1>
                  <div className="pt-5">
                    <div>
                      <button className="btn bg-white py-3 px-5 fw-bold ">
                        Shop Now
                      </button>
                    </div>
                    <div>
                      <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
                <div className="pt-xl-5 pt-lg-5 text-center">
                  <img
                    className="mt-xl-5 mt-lg-5 object-fit-contain "
                    src="/image/product-38.png"
                    width="80%"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-xl-flex d-lg-flex justify-content-center px-3 ">
                <div className="py-xl-5 py-lg-5">
                  <h6 className="mt-5 pt-5 text-danger">
                    Hot Deal In This Week
                  </h6>
                  <h1 className="display-3 fw-bold w-75">
                    Roco Wireless Headphone
                  </h1>
                  <div className="pt-5">
                    <div>
                      <button className="btn bg-white py-3 px-5 fw-bold ">
                        Shop Now
                      </button>
                    </div>
                    <div>
                      <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
                <div className="pt-xl-5 pt-lg-5 text-center">
                  <img
                    className="mt-xl-5 mt-lg-5 object-fit-contain "
                    src="/image/product-39.png"
                    width="80%"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

    </header>
        <section className='container overflow-x-hidden mt-5 pt-5 '>
          <div>
            <h6 className='text-danger'>Categories</h6>
            <h1>Browse by Category</h1>
          </div>
          {Categories()}
        </section>

        <section>
          {shopping()}
        </section>

        <section className='container overflow-x-hidden  mt-5 pt-5 '>
          <div>
            <h6 className='text-danger'>Our Products</h6>
            <h1>Explore our Products</h1>
          </div>
          {Product()}
        </section>





        <section className='container overflow-x-hidden  mt-5 pt-5 '>
          <div>
            <h6 className='text-danger'>This Week's</h6>
            <h1>New Arrivals</h1>
          </div>
          {Arrivals()}
        </section>

        <section className='mt-5'>
          {Newsletter()}
        </section>
    </>
  )
}

export default Home

function Categories(){
  const cat=[
    {
      id:1,
      "url":"/image/elec-1.png",
      "title":"SmartWatches"
    },
    {
      id:2,
      "url":"/image/elec-2.png",
      "title":"SmartWatches"
    },
    {
      id:3,
      "url":"/image/elec-4.png",
      "title":"SmartWatches"
    },
    {
      id:4,
      "url":"/image/elec-5.png",
      "title":"SmartWatches"
    },
    {
      id:5,
      "url":"/image/elec-6.png",
      "title":"SmartWatches"
    },
    {
      id:6,
      "url":"/image/elec-7.png",
      "title":"SmartWatches"
    },
    {
      id:7,
      "url":"/image/elec-8.png",
      "title":"SmartWatches"
    },
    {
      id:8,
      "url":"/image/elec-9.png",
      "title":"SmartWatches"
    },
    {
      id:9,
      "url":"/image/elec-10.png",
      "title":"SmartWatches"
    },
    {
      id:10,
      "url":"/image/elec-11.png",
      "title":"SmartWatches"
    }
]
return(
  <div>
   <Swiper
            slidesPerView={2}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            loop={true}
            autoplay={{
                delay:1000,
                disableOnInteraction:false
            }}
            breakpoints={{
              500: {
                    slidesPerView: 3,
                    spaceBetween: 20,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 50,
              },
              1200:{
                slidesPerView: 7,
                spaceBetween: 50,
              }
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper sld mt-5"
          >
            {
              cat.map((item)=>(
                <SwiperSlide key={item.id} className='border rounded pt-3  text-center '>
                  <div>
                    <img src={item.url} alt="" />
                  </div>
                  <p className='mt-2'>{item.title}</p>
                </SwiperSlide>
              ))
            }
            
            
          </Swiper>
  </div>
)
}





function shopping()
{
    return(
        <>
            <div className="container-fluid mt-5 p-xl-2 p-lg-2 p-md-2 p-sm-2 p-1 py-5 p-md-5">
                <div className="container text-md-center mt-5 shopping rounded ">
                    <div className="row justify-content-center gap-5 gap-lg-0">
                        <div className='col-12 col-md-6 p-xl-5 p-lg-5 p-md-5 p-sm-5 p-0 '>
                            <div className='dont mt-5 text-danger fw-bold '><span className='p-2  rounded-circle miss text-white '><i className="fa fa-shopping-basket bg-danger " aria-hidden="true"></i></span>Don't Miss!!</div>
                            <div className='fs-1 mt-4 fw-bold'>Let's Shopping Today</div>
                            <div className='d-flex justify-content-md-center mt-4 gap-2'>
                                <div className='text-center bg-white p-2 px-4 rounded-circle'><span className='fs-4'>0</span><br /><span>Days</span></div>
                                <div className='text-center bg-white p-2 px-4 rounded-circle'><span className='fs-4'>0</span><br /><span>Days</span></div>
                                <div className='text-center bg-white p-2 px-4 rounded-circle'><span className='fs-4'>0</span><br /><span>Days</span></div>
                                <div className='text-center bg-white p-2 px-4 rounded-circle'><span className='fs-4'>0</span><br /><span>Days</span></div>
                            </div>
                            <button className=' btn btn-primary p-3 mt-4 px-5 fw-bold'>Check it Out!</button>
                            </div>
                        <div className='col-12 col-md-6 watchmain'> <img className='watch w-100' src="/image/poster-03.png" alt=""/></div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Product() {

  const product=[
    {
      id:1,
      "url":"/image/product-01.png",
      "title":"Yantiti Leather & Canvas Bags",
      "price":"$29.99",
      "strike":"$49.99",

      "url2":"/image/product-09.png",
      "title2":"Yantiti Leather & Canvas Bags",
      "price2":"$29.99",
      "strike2":"$49.99"
    },
    {
      id:2,
      "url":"/image/product-02.png",
      "title":"Yantiti Leather & Canvas Bags",
      "price":"$29.99",
      "strike":"$49.99",

      "url2":"/image/product-10.png",
      "title2":"Yantiti Leather & Canvas Bags",
      "price2":"$29.99",
      "strike2":"$49.99"
    },
    {
      id:3,
      "url":"/image/product-03.png",
      "title":"Yantiti Leather & Canvas Bags",
      "price":"$29.99",
      "strike":"$49.99",

      "url2":"/image/product-11.png",
      "title2":"Yantiti Leather & Canvas Bags",
      "price2":"$29.99",
      "strike2":"$49.99"
    },
    {
      id:4,
      "url":"/image/product-04.png",
      "title":"Yantiti Leather & Canvas Bags",
      "price":"$29.99",
      "strike":"$49.99",

      "url2":"/image/product-12.png",
      "title2":"Yantiti Leather & Canvas Bags",
      "price2":"$29.99",
      "strike2":"$49.99"
    },
    {
      id:5,
      "url":"/image/product-05.png",
      "title":"Yantiti Leather & Canvas Bags",
      "price":"$29.99",
      "strike":"$49.99",

      "url2":"/image/product-13.png",
      "title2":"Yantiti Leather & Canvas Bags",
      "price2":"$29.99",
      "strike2":"$49.99"
    },
    {
      id:6,
      "url":"/image/product-06.png",
      "title":"Yantiti Leather & Canvas Bags",
      "price":"$29.99",
      "strike":"$49.99",

      "url2":"/image/product-14.png",
      "title2":"Yantiti Leather & Canvas Bags",
      "price2":"$29.99",
      "strike2":"$49.99"
    },
    {
      id:7,
      "url":"/image/product-07.png",
      "title":"Yantiti Leather & Canvas Bags",
      "price":"$29.99",
      "strike":"$49.99",

      "url2":"/image/product-15.png",
      "title2":"Yantiti Leather & Canvas Bags",
      "price2":"$29.99",
      "strike2":"$49.99"
    },
    {
      id:8,
      "url":"/image/product-08.png",
      "title":"Yantiti Leather & Canvas Bags",
      "price":"$29.99",
      "strike":"$49.99",

      "url2":"/image/product-16.png",
      "title2":"Yantiti Leather & Canvas Bags",
      "price2":"$29.99",
      "strike2":"$49.99"
    },
  ]



  return (
    <div className='mt-5'>
      <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            loop={true}
            // autoplay={{
            //     delay:1000,
            //     disableOnInteraction:false
            // }}
            breakpoints={{
              500: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1200:{
                slidesPerView: 4,
                spaceBetween: 50,
              }
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper sld mt-5"
          >
            {
              product.map((item)=>(
                <SwiperSlide className='' key={item.id}>
                <div className='pct-main'>
                  <div className='prodct rounded'>
                    <img className='w-100' src={item.url} alt="" />
                    <div className='pct-add pb-3 d-flex justify-content-center gap-2 w-100 '>
                      <div>
                      <button className='btn bg-white '><i className="fa fa-eye" aria-hidden="true"></i></button>
                      </div>
                      <div>
                      <button className='btn text-white add-cart-btn fw-bold '>Add to Cart</button>
                      </div>
                      <div>
                      <button className='btn bg-white '><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                      </div>
                    </div>
                  </div>
                  <div className='pt-3'>
                    <p className='fw-bold text-secondary'>{item.title}</p>
                    <h5 className='fw-bold'>{item.price} <strike className="text-secondary">{item.strike}</strike></h5>
                  </div>
                </div>

                <div className='mt-5 pct-main'>
                  <div className='prodct rounded'>
                    <img className='w-100' src={item.url2} alt="" />
                    
                    <div className='pct-add pb-3 d-flex justify-content-center gap-2 w-100'>
                      <div>
                      <button className='btn bg-white '><i className="fa fa-eye" aria-hidden="true"></i></button>
                      </div>
                      <div>
                      <button className='btn text-white add-cart-btn fw-bold '>Add to Cart</button>
                      </div>
                      <div>
                      <button className='btn bg-white '><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                      </div>
                    </div>

                  </div>
                  <div className='pt-3'>
                    <p className='fw-bold text-secondary'>{item.title2}</p>
                    <h5 className='fw-bold'>{item.price2} <strike className="text-secondary">{item.strike2}</strike></h5>
                    
                    
                  </div>
                </div>
              </SwiperSlide>
              ))
            }
            
            
      </Swiper>
    </div>
  );
}













function Arrivals() {

  const product=[
    {
      id:1,
      "url":"/image/product-01.png",
      "title":"Yantiti Leather & Canvas Bags",
      "price":"$29.99",
      "strike":"$49.99"
    },
    {
      id:2,
      "url":"/image/product-02.png",
      "title":"Yantiti Leather & Canvas Bags",
      "price":"$29.99",
      "strike":"$49.99"
    },
    {
      id:3,
      "url":"/image/product-03.png",
      "title":"Yantiti Leather & Canvas Bags",
      "price":"$29.99",
      "strike":"$49.99"
    },
    {
      id:4,
      "url":"/image/product-04.png",
      "title":"Yantiti Leather & Canvas Bags",
      "price":"$29.99",
      "strike":"$49.99"
    },
    {
      id:5,
      "url":"/image/product-05.png",
      "title":"Yantiti Leather & Canvas Bags",
      "price":"$29.99",
      "strike":"$49.99"
    },
    {
      id:6,
      "url":"/image/product-06.png",
      "title":"Yantiti Leather & Canvas Bags",
      "price":"$29.99",
      "strike":"$49.99"
    },
    {
      id:7,
      "url":"/image/product-07.png",
      "title":"Yantiti Leather & Canvas Bags",
      "price":"$29.99",
      "strike":"$49.99"
    },
    {
      id:8,
      "url":"/image/product-08.png",
      "title":"Yantiti Leather & Canvas Bags",
      "price":"$29.99",
      "strike":"$49.99"
    },
  ]



  return (
    <div className='mt-5'>
      <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            loop={true}
            // autoplay={{
            //     delay:1000,
            //     disableOnInteraction:false
            // }}
            breakpoints={{
              500: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1200:{
                slidesPerView: 4,
                spaceBetween: 50,
              }
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper sld mt-5"
          >
            {
              product.map((item)=>(
                <SwiperSlide key={item.id} className='text-center'>
                <div className='prdct'>
                  <div className='prodct rounded-circle overflow-hidden '>
                    <img className='w-100 rounded-circle prodct-img' src={item.url} alt="" />
                  </div>
                  <div>
                    <p>{item.title}</p>
                    <h5 className='fw-bold'><strike className="text-secondary">{item.strike}</strike> {item.price}</h5>
                    <div className='add-cart py-3 d-flex justify-content-center gap-2 w-100'>
                      <div>
                      <button className='btn bg-white '><i className="fa fa-eye" aria-hidden="true"></i></button>
                      </div>
                      <div>
                      <button className='btn text-white add-cart-btn fw-bold '>Add to Cart</button>
                      </div>
                      <div>
                      <button className='btn bg-white '><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              ))
            }
            
            
      </Swiper>
    </div>
  );
}





function Newsletter()
{
    return(
        <>
            {/* Newsletter */}
    <div className='container-fluid'>
        <div className="container back-img p-xl-5 p-lg-5 p-md-5 p-sm-5 p-1  border border-0 rounded">
            <div className='p-2'>
            <div className='get fw-bold my-3'><span className='mail p-2 me-2'><i className="fa fa-envelope-open" aria-hidden="true"></i></span>Newsletter</div>
            <div className='fs-2 fw-bold my-2'>Get weekly update</div>

            <div className='d-flex gap-4 my-5'>
            <div className='bg-white p-3 border border-0 rounded col-6'><span className='mx-3'><i className="fa fa-envelope" aria-hidden="true"></i></span><input type="text" placeholder='example@gmail.com' className='border border-0 w-75' /></div>
            <button className='btn btn-dark p-3 px-xl-5 px-lg-5 px-md-5px-sm-5 p-4 fw-bold'>subscribe</button>
            </div>
            </div>
            
           
        </div>
    </div>

{service()}
        </>
        
    )
}


function service()
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
    <Footer/>
        </>
    )
}





