import React, { useEffect, useState } from 'react'
import './Style.css'
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Shop() {

        const [product,setProduct] = useState("");

	useEffect(()=>{
		fetch("http://localhost:8000/product")
		.then((res)=>{return res.json()})
		.then((data)=>{setProduct(data)})
		.catch((err)=>{console.log(err.message)})
	})


  return (
    <div>
	<Header/>
      	{/* products */}
	<div class="product-section mt-150 mb-150">
		<div class="container">

			<div class="row">
                <div class="col-md-12">
                    <div class="product-filters">
                        <ul>
                            <li class="active">All</li>
                            <li>Monitor</li>
                            <li>Mouse/Keyboard</li>
                            <li>Speaker</li>
                        </ul>
                    </div>
                </div>
            </div>


				<div className="row product-lists">
					{
						product && product.map((item,i)=>(
							<div key={i} className="col-lg-4 col-md-6 text-center strawberry ">
							<div className="single-product-item">
								<div className="product-image image">
								<Link to={`/single-product/${item.id}`}><img src={item.image} alt={item.name}/></Link>
								</div>
								<h3>{item.name}</h3>
								<p className="product-price"><span></span>$ {item.price} </p>
								<Link to='/cart' className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</Link>
							</div>
						</div>
						))
					}
					
				</div>

			<div class="row">
				<div class="col-lg-12 text-center">
					<div class="pagination-wrap">
						<ul>
							<li><a href="#">Prev</a></li>
							<li><a href="#">1</a></li>
							<li><a class="active" href="#">2</a></li>
							<li><a href="#">3</a></li>
							<li><a href="#">Next</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	 {/* end products  */}
	 <Footer/>
    </div>
  )
}

export default Shop
