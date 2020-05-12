import React from 'react';

const Product = ({ product }) => (
    <div className="product-container">
        <span>
            <strong>{product.id}</strong>
            <strong>{product.kind_id}</strong>
            <strong>{product.description}</strong>
            <strong>{product.status}</strong>
        </span>
    </div>
)

export default Product