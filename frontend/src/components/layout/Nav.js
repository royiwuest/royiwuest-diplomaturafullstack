import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/components/layout/Nav.css";

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul class="holder">
                    <li><NavLink className={({isActive}) => isActive ? "activo" : undefined} to = "/">Home</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "activo" : undefined} to = "/novedades">Novedades</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "activo" : undefined} to = "/nuestrosproductos">Nuestros Productos</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "activo" : undefined} to = "/nosotros">Nosotros</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "activo" : undefined} to = "/contacto">Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;