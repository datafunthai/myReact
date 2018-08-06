import React from 'react';

// Functional Component 
const ProductItem = (props) => {
    const {productName, unitPrice} = props;
    return (
        <div>
            <p>{"Product Name : " + productName}</p>
            <p>{"Price : " + unitPrice}</p>
        </div>
    )
}


export default ProductItem;



