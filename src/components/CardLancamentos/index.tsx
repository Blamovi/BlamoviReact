//estilização
import { Link } from "react-router-dom";
import "./style.css";

// import { Link } from "react-router-dom";

function CardLancamentos(props: any) {


    return (
        <div className="card " id="teste4" >
            <h2>{props.titulo}</h2>
            <img src={props.img} alt="" />
            <h3>{props.titulo2}</h3>
            <Link to={props.link}>Assistir ao Trailer</Link>
        </div>
    )
}

export default CardLancamentos;