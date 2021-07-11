import React from 'react';
import '../styles/components/Product.scss'

const Product = ({  productImg, productDesc, productPrice, productShipInfo }) => {
  return (
    <div className="product">
      <img src={productImg} className="product__img" alt="" />
      <h3 className="product__desc">
        {productDesc}
      </h3>
      <p className="product__price">
        {productPrice}
      </p>
      <p className="product__shipInfo">
        {productShipInfo}
      </p>
      <button className="product__shopBtn btn btn-secondary">Shop Now</button>
    </div>
  )
}

export default Product
