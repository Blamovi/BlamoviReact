//estilização
import "./style.css";

//rotas
import { Link } from "react-router-dom";

function Card(props: any) {


    function verificarListaIcones() {
        if (typeof props.listaTechs === "string") {
            return JSON.parse(props.listaTechs);
        } else {
            return props.listaTechs;
        }
    }

    return (
        <div className="card responsivo" id="teste3">
            <img src={""} alt="" />
            <h3>Joker</h3>
            <div className="itens">
                <div className="streams">
                    <img src={""} alt="" />
                </div>
                <div className="icones">

                {
                    verificarListaIcones().map((tech: string, indice: number, ) => {
                        return <span key={indice}>{tech}</span>
                    })
                }

                    <img src={""} alt="" />
                    {/* <span>8,8</span> */}
                    <img src={""} alt="" />
                    {/* <span>59</span> */}
                </div>
            </div>
        </div>
    )
}

export default Card;