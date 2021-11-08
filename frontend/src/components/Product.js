import React from 'react'
import Rating from './Rating';
import { Link } from 'react-router-dom';

export default function Product(props) {
    const { product } = props;
    return(
      
        <div key = {product._id} className="card">
        <Link to={`/product/${product._id}`}>
          
          <img className="medium" 
          src={product.image}
          alt={product.name} />
        </Link>
        <div className="card-body">
        <Link to={`/product/${product._id}`}>
            <p>{product.name}</p>
          </Link>
          <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
            <div className="row">
          <div className="price"><strong> #{product.price} </strong></div>
          <div>
            <Link to={`/seller/${product.seller._id}`}>
              {product.seller.seller.name}
              </Link>
          </div>
        </div>
        </div>
      </div>
    )
   
}

