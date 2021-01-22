import React from 'react';

// styles
import './NotFound.css';

// icons
import {ReactComponent as NotFoundIcon} from '../../Assets/Icons/NotFound.svg'

const NotFound = () => {
    return(
        <div className="not-found">
            <NotFoundIcon />
            <h3>No hay productos disponibles en esta categoria</h3>
        </div>
    );
};

export default NotFound;