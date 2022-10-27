import {useState} from "react";
import "./Item.css";
import {Link} from "react-router-dom";

const Card = ({id,brand,model,image,price,cat}) => {

    const [numberCount, setNumberCount] = useState(0);
  
    function sumarNumero() {
      setNumberCount(numberCount + 1);
    }
  
    function restarNumero() {
      setNumberCount(numberCount - 1);
    }
  
    return(
        <div className="box">
        <h1>{brand}</h1>
        <h2>{cat}</h2>
        <h4 class="model">{model}</h4>
        <img alt={`Marca: ${brand},"Modelo: ${model}`} src={`/images/${image}`}/>
        <h4 className="price">${price}</h4>
        <div className="card-sumar-restar">
          <Link to={`/item/${id}`}>
          <span className="card-detail">
            <b className="detail">DETALLE</b>
          </span>
          </Link>
          <button className="card-button restar" onClick={() => restarNumero()}>
            -
          </button>
          <span>
            <b>{numberCount}</b>
          </span>
          <button className="card-button sumar" onClick={() => sumarNumero()}>
            +
          </button>
        </div>
      </div>
        
    )
}

export default Card;