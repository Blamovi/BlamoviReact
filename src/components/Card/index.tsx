//estilização
import "./style.css";

//rotas
// import { Link } from "react-router-dom";


import imgIconesTrofeu from "../../assets/img/elementos/Trophy.png";
import imgIconesComentario from "../../assets/img/elementos/Talk.png";

// import imgStreamAmazon from "../../assets/img/streams/amazon.png";
// import imgStreamDisney from "../../assets/img/streams/DISNEY.png";
// import imgStreamHbo from "../../assets/img/streams/HBO-MAX.png";
// import imgStreamStar from "../../assets/img/streams/star.png";
// import imgStreamYoutube from "../../assets/img/streams/youtube.png";


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
            <img src={props.img} alt="" />
            <h3>{props.titulo}</h3>
            <div className="itens">
                <div className="streams">
                    <img src={""} alt="" />
                </div>
                <div className="icones">

                {/* {
                    verificarComentarios().map((tech: string, indice: number, ) => {
                        return <span key={indice}>{tech}</span>
                    })
                } */}

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