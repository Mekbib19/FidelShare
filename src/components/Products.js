import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Products = () => {
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' }
  ];

  return (
    <div className="products">
      <h1>Our Products</h1>
      <div className="products-layout">
        <div className="products-sidebar">
          <h3>Product List</h3>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <Link to={`/products/${product.id}`}>
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="products-detail">
          {/* This will render the ProductDetail component */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Products;