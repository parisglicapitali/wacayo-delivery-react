import React from 'react';

// styles
import './Home.css';

// components
import CategoryBox from '../../Components/CategoryBox/CategoryBox';

// category list
import CategoryList from '../../Assets/CategoryList.js';

const Home = () => {
    return(
        <div className="category-box-container">
            {
                CategoryList.map(category => {
                    return(
                        <CategoryBox text={ category.text } icon={ category.icon }  key={ category.text } />
                    );
                })
            }
        </div>
    )
};

export default Home;