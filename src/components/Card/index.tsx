//estilização
import "./style.css";

//rotas
import { Link } from "react-router-dom";

import imgIconesTrofeu from "../../assets//img/elementos/Trophy.png";

import imgStreamerHbo from "../../assets/img/streams/HBO-MAX.png";

function Card(props: any) {


    function verificarComentarios() {
        if (typeof props.comentarios === "string") {
            return JSON.parse(props.comentarios);
        } else {
            return props.comentarios;
        }
    }

    return (
        <div className="card responsivo" id="teste3">
            <img src={""} alt="" />
            <h3>{props.titulo}</h3>
            <div className="itens">
                <div className="streams">
                    <img src={props} alt="" />
                </div>
                <div className="icones">

                {/* {
                    verificarComentarios().map((tech: string, indice: number, ) => {
                        return <span key={indice}>{tech}</span>
                    })
                } */}

                    <img src={imgIconesTrofeu} alt="" />
                    <span>{props.nota().length}</span>
                    <img src={""} alt="" />
                    <span>{verificarComentarios().length}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;