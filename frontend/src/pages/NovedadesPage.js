import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';
import "../styles/components/pages/NovedadesPage.css";

const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);

            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);

    return (
        <section className="holder">

            <h1>Seguimos sumando productos!</h1>
            <h2>Probalos y deiletate con sabores argentinos. </h2>
            <div className='items'>
                {
                    loading ? (
                        <p>Cargando...</p>
                    ) : (
                        novedades.map(item => <NovedadItem key={item.id} imagen={item.imagen} prod={item.producto} descrip={item.descripcion} />)

                    )};

            </div>

        </section>
    );
};

export default NovedadesPage;