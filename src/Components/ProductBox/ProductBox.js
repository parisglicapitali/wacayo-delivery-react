import React from 'react';
import { Link } from 'react-router-dom';

// styles
import './ProductBox.css';

const ProductBox = props => {
    return(
        <Link to={ `/product/${ props.product._id }` }>
            <div className="product-box">
                <p>{ props.product.name }</p>
            </div>
        </Link>
    );
};

export default ProductBox;