import React from "react";
import "../../styles/components/pages/ItemPage.css";

const NovedadItem = (props) => {
    const { prod, descrip, imagen } = props;
    return (
        // <div className="items">
            <div className="item">
                <img src={imagen}/> 
                <h3>{prod}</h3>
                <p>{descrip}</p>
            </div>
        // </div>
    )
}
export default NovedadItem;