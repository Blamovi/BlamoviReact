import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import imglike from "../../assets/Images/Facebook Like2.svg";
import imgDeslike from "../../assets/Images/Facebook Like1.svg";
import "./style.css";

function ComentariosFilme() {

    const [comentario, setComentario] = useState<any>(null);
    const { idUsuario, idComentario } = useParams<{ idUsuario: string, idComentario: string }>();

    useEffect(() => {
        api.get(`comentario/${idUsuario}/${idComentario}`)
            .then((response: any) => {
                console.log(response.data);
                setComentario(response.data);
            })
            .catch((error: any) => {
                console.log("Error", error)
            });
    }, [idUsuario, idComentario]);

    return (
        <>
            {comentario && (
                <div>
                    <div className="img_coment">
                        <img
                            className="ricardo"
                            src={"http://localhost:8090/images/" + comentario.id_usuario}
                            alt=""
                        />
                    </div>
                    <div>
                        <p className="usuario2">{comentario.id_usuario}</p>
                        <p className="comentario_texto">
                            {comentario.texto}
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
            )}
        </>
    )
}

export default ComentariosFilme;