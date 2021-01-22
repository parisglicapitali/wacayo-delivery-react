import React, { useState } from 'react';
import axios from 'axios';

// styles
import './CreateOrder.css'

const CreateOrder = props => {

    const [order, setOrder] = useState({
        clientName: '',
        clientPhoneNumber: '',
        clientEmail: '',
        clientCountry: '',
        clientAddress: '',
        clientNote: ''
    });
    
    const handleInput = (e) => {
        setOrder({
            ...order,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        document.getElementById('create-order-button').innerHTML = "Cargando..."; // change button text

        const { status } = await axios.post(`https://wacayo-delivery.herokuapp.com/api/order/${ props.match.params.productId }`, order);

        status === 201 ? props.history.push('/successfully') : props.history.push('/error') // redirecting to successfully page
    }

    return(
        <div className="create-order">
            <h2>Creando tu orden...</h2>

            <form onSubmit={ handleSubmit }>
                <input onChange={ handleInput } autoFocus type="text" required id="clientName" name="clientName" placeholder="Nombre" />
                <input onChange={ handleInput } type="tel" required id="clientPhoneNumber" name="clientPhoneNumber" placeholder="Numero de Telefono" />
                <input onChange={ handleInput } type="email" id="clientEmail" name="clientEmail" placeholder="Correo Electronico (Opcional)" />
                <select onChange={ handleInput } required name="clientCountry">
                    <option defaultValue>Escoge tu Municipio</option>
                    <option value="Arroyo Naranjo">Arroyo Naranjo</option>
                    <option value="Boyeros">Boyeros</option>
                    <option value="Centro Habana">Centro Habana</option>
                    <option value="Cerro">Cerro</option>
                    <option value="Cotorro">Cotorro</option>
                    <option value="Diez de Octubre">Diez de Octubre</option>
                    <option value="Guanabacoa">Guanabacoa</option>
                    <option value="Habana del Este">Habana del Este</option>
                    <option value="Habana Vieja">Habana Vieja</option>
                    <option value="La Lisa">La Lisa</option>
                    <option value="Marianao">Marianao</option>
                    <option value="Playa">Playa</option>
                    <option value="Plaza">Plaza</option>
                    <option value="Regla">Regla</option>
                    <option value="San Miguel del Padron">San Miguel del Padron</option>
                </select>
                <input onChange={ handleInput } type="text" required id="clientAddress" name="clientAddress" placeholder="Direccion de Envio" />
                <textarea onChange={ handleInput } id="clientNote" name="clientNote" placeholder="Algo que quieras aclarar sobre el envio ?" />

                <button type="reset">Cancelar Orden</button>
                <button id="create-order-button" type="submit">Crear Orden Ahora!</button>
            </form>
        </div>
    );
};

export default CreateOrder;