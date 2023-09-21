import "./style.css"

import imglike from "../../assets/Images/Facebook Like2.svg";
import imgDeslike from "../../assets/Images/Facebook Like1.svg";

function ComentariosFilme(props: any) {
    return (
        <>
            <div className="img_coment">
                <img
                    className="ricardo"
                    src={props.fotoUsuario}
                    alt=""
                />
            </div>
            <div>
                <p className="usuario2">{props.nomeUsuario}</p>
                <p className="comentario_texto">
                    {props.comentario}
                </p>
                <img
                    className="like"
                    src={imglike}
                    alt=""
                />
                <img
                    className="like"
                    src={imgDeslike}
                    alt=""
                />
            </div>
        </>
    )
}

export default ComentariosFilme