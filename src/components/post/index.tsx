import "./style.css"

// IMPORT DAS IMAGENS
import imgMadrigalPerfil from "../../assets/images/madrigalperfil.svg"
import imgToyStoryPost from "../../assets/images/balanoalvo.svg"
import imgLike from "../../assets/images/like.svg"
import imgComentar from "../../assets/images/comentar.svg"
import imgRecomendar from "../../assets/images/recomendar.svg"
import imgBuzz from "../../assets/images/buzzlightyear.svg"


function Post(props: any) {

    // const postFeed: any[] = [
    //     {
    //         id: 1,
    //         userNome: "Antônio Madrigal",
    //         foto: { imgMadrigalPerfil },
    //         data: "4m atrás",
    //         assistiu: "Assistiu - Toy Story 2",
    //         conteudoPost: "Acabei de assistir Toy Stroy 2 ! ! ! Que filme maravilhoso, para mim fica em primeiro lugar nos filmes Pixar. Assisti pelo YouTube.",
    //         imgPost: { imgToyStoryPost },
    //         comentarios: [
    //             {
    //                 id: 2,
    //                 nome: "Buzz Lightyear",
    //                 foto: { imgBuzz },
    //                 data: "2m atrás",
    //                 comentario: "Que bom que gostou!"
    //             }
    //         ]
    //     }
    // ]

    return (
        <>
            <ul id="posts">
                {/* {
                    postFeed.map((post: any) => {
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

                } */}
                <li className="post">
                    <div className="infoUserPost">
                        <div className="imgUserPost">
                            <img src={imgMadrigalPerfil} alt="" />
                        </div>
                        <div className="nameAndHour">
                            {/* <strong>{props.username}</strong> */}
                            <strong>Antônio Madrigal</strong>
                            <p>4m atrás</p>
                            <p className="colorir_texto_filmes">Assistiu - Toy Story 2</p>
                        </div>
                    </div>
                    <p className="textoPost">
                        Acabei de assistir Toy Story 2 !!!! Que filme maravilhoso, para mim fica em
                        primeiro lugar nos filmes Pixar. Assisti pelo YouTube.{" "}
                    </p>
                    <img className="balanoalvo" src={imgToyStoryPost} alt="" />
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
                        <li className="comentarios">
                            <div className="infoUserComments">
                                <div className="imgUserComments">
                                    <img src={imgBuzz} alt="" />
                                </div>
                                <div className="nameAndHour">
                                    <strong>Buzz Lightyear</strong>
                                    <p>2m atrás</p>
                                </div>
                            </div>
                            <p className="textoComments">Que bom que gostou!</p>
                        </li>
                    </ul>
                </li>
            </ul>

        </>
    )
}

export default Post