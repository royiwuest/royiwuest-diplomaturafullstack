import React from "react";
import "../styles/components/pages/HomePage.css";

const HomePage = (props) =>{
    return(
        <div>
            <main class="holder">
        <div>
            <img src="./images/sabores_arg.jpg" alt="portada" />
        </div>
        <div className="bienvenidos">
            <h2>Bienvenidos a Casa</h2>
            <p><strong>¿Eres amante de los productos argentinos?</strong> Aquí podrás encontrar productos argentinos
                de forma rápida y sencilla.
                Prepara tu termo para el mate y elige los productos argentinos que se venden en España que más te
                gusten.</p>
        </div>
        
    </main>
        </div>
    );
}

export default HomePage;