import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();

  return (
    <div className="product-detail">
      <h2>Product Details</h2>
      <p>Viewing details for product ID: {productId}</p>
      <Link to="/products">← Back to Products</Link>
    </div>
  );
};

export default ProductDetail;