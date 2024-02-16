//estilização
import "./style.css";

import imgIconesTrofeu from "../../assets/img/elementos/Trophy.png";
import imgIconesComentario from "../../assets/img/elementos/Talk.png";

// import { useEffect, useState } from "react";

// const moviesURL = import.meta.env.VITE_API;
// const apiKey = import.meta.env.VITE_API_KEY;

function Card(props: any) {

    // const [topMovies, setTopMovies] = useState ([]);
    
    // const getTopRatedMovies = async (url: RequestInfo | URL) => {
    //     const res = await fetch(url);
    //     const data = await res.json();

    //     console.log(data);
    // }
    
    // useEffect(() =>{
    //     const topRatedURL = `${moviesURL}top_rated?${apiKey}`;

    //     getTopRatedMovies(topRatedURL);
        
    // })



    // function verificarComentarios() {
    //     if (typeof props.comentarios === "string") {
    //         return JSON.parse(props.comentarios);
    //     } else {
    //         return props.comentarios;
    //     }
    // }

    return (
        <div className="card responsivo" id="teste3" >
            <img src={"http://localhost:8090/images/" + props.poster}/>
            <h3>{props.titulo}</h3>
            <div className="itens">
                <div className="streams">
                    <img src={props.imgStream} alt="" />
                </div>
                <div className="icones">
                    <img src={imgIconesTrofeu} alt="" />
                    <span>{props.nota}</span>
                    <img src={imgIconesComentario} alt="" />
                    <p>{props.coment}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;