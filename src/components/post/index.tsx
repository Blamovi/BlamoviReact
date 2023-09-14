import "./style.css"

// IMPORT DAS IMAGENS
import imgMadrigalPerfil from "../../assets/images/madrigalperfil.svg"
import imgToyStoryPost from "../../assets/images/balanoalvo.svg"
import imgLike from "../../assets/images/like.svg"
import imgComentar from "../../assets/images/comentar.svg"
import imgRecomendar from "../../assets/images/recomendar.svg"
import imgBuzz from "../../assets/images/buzzlightyear.svg"
import Comentario from "../Comentario"


function Post(props: any) {



    return (
        <>
            <ul id="posts">
                <li className="post">
                    {
                        props.postFeed.map((post: any) => {
                            return <div key={post.id}>
                                <Post
                                    userNome={post.nome}
                                    foto={post.foto}
                                    data={post.data}
                                    assistiu={post.assistiu}
                                    conteudoPost={post.conteudoPost}
                                    img={post.img}
                                />
                            </div>
                        })

                    }
                    <div className="actionBtnPost">
                        <button type="button" className="filesPost">
                            <img src={imgLike} alt="Curtir" />
                            <span>Curtir</span>
                        </button>
                        <button type="button" className="filesPost">
                            <img src={imgComentar} alt="Comentar" />
                            <span>Comentar</span>
                        </button>
                        <button type="button" className="filesPost">
                            <img src={imgRecomendar} alt="Recomendar" />
                            <span>Recomendar</span>
                        </button>
                    </div>
                    <ul>
                        {
                            props.comentarios.map((cadaComentario: any) => {
                                return <li className="comentarios">
                                    <Comentario
                                        img={cadaComentario.img}
                                        nome={cadaComentario.nome}
                                        data={cadaComentario.data}
                                        comentario={cadaComentario.comentario}
                                    />
                                </li>
                            })
                        }
                    </ul>
                </li>
            </ul>

        </>
    )
}

export default Post