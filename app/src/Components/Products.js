import React from 'react';
import Product from './Product';
import '../styles/components/Products.scss';

const Products = () => {
  return (
    <div className="products">
      <Product
        productImg="https://m.media-amazon.com/images/I/61s+TmeXZSL._AC_UL320_.jpg"
        productDesc="Amazon Basics Nylon USB-A to Lightning Cable Cord, MFi Certified Charger for Apple iPhone, iPad, 10,000 Bend..."
        productPrice="$49.50"
        productShipInfo="1258 bids, 359 watchers
        $5.95 for shipping"
      />

      <Product
        productImg="https://m.media-amazon.com/images/I/71UiEEAk0aL._AC_UL320_.jpg"
        productDesc="Amazon Basics Nylon USB-A to Lightning Cable Cord, MFi Certified Charger for Apple iPhone, iPad, 10,000 Bend..."
        productPrice="$49.50"
        productShipInfo="1258 bids, 359 watchers
        $5.95 for shipping"
      />

      <Product
        productImg="https://m.media-amazon.com/images/I/61s+TmeXZSL._AC_UL320_.jpg"
        productDesc="Amazon Basics Nylon USB-A to Lightning Cable Cord, MFi Certified Charger for Apple iPhone, iPad, 10,000 Bend..."
        productPrice="$49.50"
        productShipInfo="1258 bids, 359 watchers
        $5.95 for shipping"
      />
    </div>
  )
}

export default Products
