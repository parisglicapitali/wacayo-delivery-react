import React from 'react';
import { Link } from 'react-router-dom';

// styles
import './Error.css';

const ErrorPage = () => {
    return(
        <div className="error-page">
            <h4>
                Se Ha Encontrado algun error <br/> por favor intente otra vez
            </h4>
            <Link to="/">
                <button>
                    Ir a Inicio
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;