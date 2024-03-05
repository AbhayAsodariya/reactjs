import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Singleproduct() {

        const [product,setProduct] = useState("");
	const { productId } = useParams();
	console.log(product)

	useEffect(()=>{
		fetch(`http://localhost:8000/product/${productId}`)
		.then((res)=>{return res.json()})
		.then((data)=>{setProduct(data)})
		.catch((err)=>{console.log(err.message)})
	})


  return (
    <div>
	<Header/>
      		{/* single product  */}
		<div className="single-product mt-150 mb-150 text-start">
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<div className="single-product-img">
							<img src={product.image} alt=""/>
						</div>
					</div>
					<div className="col-md-7">
						<div className="single-product-content">
							<h3>{product.name}</h3>
							<p className="single-product-pricing">$ {product.price}</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint dignissimos, rem commodi cum voluptatem quae reprehenderit repudiandae ea tempora incidunt ipsa, quisquam animi perferendis eos eum modi! Tempora, earum.</p>
							<div className="single-product-form">
								<Link to='/cart' className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</Link>
								
							</div>
							
							
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* end single product  */}
		<Footer/>
    </div>
  )
}

export default Singleproduct
