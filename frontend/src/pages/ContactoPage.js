import React from "react";
import {useState} from 'react';
import axios from 'axios'; 
import "../styles/components/pages/ContactoPage.css";

const ContactoPage = (props) => {

    const initialForm = {
        nombre:'',
        email:'',
        telefono:'',
        mensaje:''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
        axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false){
            setFormData(initialForm)
        }
    }

    return (
        <div>
            <main className="holder">
                <div className="contacto">
                    <div className="datos">
                        <h2>Algunas de nuestras vías de comunicación</h2>
                        <ul>
                            <li>Telénono: 222-22222222</li>
                            <li>Email: saboresdelsur@gmail.com</li>
                            <li>Facebook:</li>
                            <li>Instagram:</li>
                            <li>Twitter:</li>
                        </ul>
                    </div>
                    <div >
                        <h2>Contáctanos</h2>
                        <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                            <label for="nombre">Nombre:</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />

                            <label for="telefono">Teléfono:</label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>

                            <label for="email">Correo electrónico:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} />

                            <label for="mensaje">Mensaje:</label>
                            <br />
                            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                            <input type="submit" value="Enviar" />
                        </form>
                        {sending ? <p>Enviando...</p> : null}
                        {msg ? <p>{msg}</p> : null}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ContactoPage;