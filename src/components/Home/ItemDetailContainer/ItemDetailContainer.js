import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {getObjectById} from "../../../APIrest/galeryApi";
import "./ItemDetailContainer.css";

const ItemDetail = () =>{

    const {idCar} = useParams();


    const [car, setCar] = useState({});
  
    useEffect(() => {
      setCar(getObjectById(idCar));

      }, []); 


    return( 
        <>
        <body>
        <h1>{car.brand}</h1>
        <h2>Presentamos el {car.brand} {car.model}</h2>
        <div className="Muestrario">
        <img src={`../images/${car.image}`}/>
        <p className="specs">Con muchisima mas potencia que antes, y mas confort para cualquiera que lo use.</p>
        </div>
        </body>
        </>
    )
}

export default ItemDetail;