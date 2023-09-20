import "./style.css"

import imgRicardo from "../../assets/Images/image 136.svg";
import imgMarcos from "../../assets/Images/image 140.svg";
import imglike from "../../assets/Images/Facebook Like2.svg";
import imgDeslike from "../../assets/Images/Facebook Like1.svg";

function ComentariosFilme() {
    return(
        <>
                <section>
                    <div className="Comentarios_filmes">
                        <div>
                            <p className="subtitulo3">🗪 Comentários</p>
                        </div>
                    </div>
                    <div className="Comentarios_todos">

  {/* {
                            comentarioFilmes.map((comentarFilme: any) => {
                                return <div key={comentarFilme.id}>
                                    <Comentario
                                        nome={comentarFilme.nome}
                                        foto={comentarFilme.foto}
                                        comentarios={comentarFilme.comentario}
                                    />
                                </div>
                            })
                        } */}
                        


                        <div className="img_coment">
                            <img
                                className="ricardo"
                                src={imgRicardo}
                                alt=""
                            />
                        </div>
                        <div>
                            <p className="usuario2">Ricardo Motta</p>
                            <p className="comentario_texto">
                            APLAUDO de pé essa obra extraordinária. Christopher Nolan surpreende
                            com suas ideias e criatividade de cinema desde essa época, assim como
                            a participação de David Goyer no roteiro. A atuação de Christian Bale
                            é IMPECÁVEL, esse Homem não tem defeitos.
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
                    <div className="Comentarios_todos">
                        <div className="img_coment">
                            <img
                                className="marcos"
                                src={imgMarcos}
                                alt=""
                            />
                        </div>
                        <div>
                            <p className="usuario2">Marcos Felipe</p>
                            <p className="comentario_texto">
                                O maior filme de super herói já feito! Entrega tudo, o que é o Coringa
                                e O Batman sem menosprezar quem é a máscara de Bruce Wayne
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
                            />                        </div>
                    </div>
                </section>
        </>
    )
}

export default ComentariosFilme