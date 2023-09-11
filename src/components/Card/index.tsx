//estilização
import "./style.css";

import imgIconesTrofeu from "../../assets/img/elementos/Trophy.png";
import imgIconesComentario from "../../assets/img/elementos/Talk.png";

function Card(props: any) {


    function verificarComentarios() {
        if (typeof props.comentarios === "string") {
            return JSON.parse(props.comentarios);
        } else {
            return props.comentarios;
        }
    }

    return (
        <div className="card responsivo" id="teste3" >
            <img src={props.img} alt="src/pages/filmesInfomacoes/index.tsx" />
            <h3>{props.titulo}</h3>
            <div className="itens">
                <div className="streams">
                    <img src={props.imgStream} alt="" />
                </div>
                <div className="icones">
                    <img src={imgIconesTrofeu} alt="" />
                    <span>{props.nota}</span>
                    <img src={imgIconesComentario} alt="" />
                    <span>{verificarComentarios().length}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;


