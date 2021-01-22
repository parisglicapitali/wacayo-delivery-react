import React from 'react';
import { Link } from 'react-router-dom';

// styles
import './CategoryBox.css';

const CategoryBox = props => {
    return(
        <Link to={ "/category/" + props.text.toLowerCase() }>
            <div className="category-box">
                <div className="icon">
                    { < props.icon /> }
                </div>
                <div className="text">
                    { props.text.toUpperCase() }
                </div>
            </div>
        </Link>
    )
};

export default CategoryBox;