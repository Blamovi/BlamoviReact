import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import imglike from "../../assets/Images/Facebook Like2.svg";
import imgDeslike from "../../assets/Images/Facebook Like1.svg";
import "./style.css";

import semFoto from "../../assets/Images/sem_foto.png";

function ComentariosFilme(props: any) {

    //const [comentario, setComentario] = useState<any>(null);
    // const { idUsuario, idComentario } = useParams<{ idUsuario: string, idComentario: string }>();

    useEffect(() => {
        // api.get(`comentario/${idUsuario}/${idComentario}`)
        //     .then((response: any) => {
        //         console.log(response.data);
        //         setComentario(response.data);
        //     })
        //     .catch((error: any) => {
        //         console.log("Error", error)
        //     });
    }, []);

    return (
        <>
            <div>
                <div className="img_coment">
                    <img
                        className="ricardo"
                        src={semFoto}
                        alt=""
                    />
                    <p>{props.nome}</p>
                </div>
                <div>
                    <p className="usuario2">{props.id_usuario}</p>
                    <p className="comentario_texto">
                        {props.texto}
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
            </div>
        </>
    )
}

export default ComentariosFilme;