import "./style.css"


//import imagens
import imgHome from "../../assets/Home.svg"
import imgHearth from "../../assets/Heart.svg"
import imgUser from "../../assets/User.svg"
import imgMufasaPerfil from "../../assets/mufasaperfil.svg"
import imgIconImg from "../../assets/iconImg.svg"
import imgIconLocal from "../../assets/iconLocal.svg"
import imgIconAnexo from "../../assets/iconAnexo.svg"
import imgIconSend from "../../assets/iconSend.svg"
import imgMadrigalPerfil from "../../assets/madrigalperfil.svg"
import imgBalaNoAlvo from "../../assets/balanoalvo.svg"
import imgLike from "../../assets/like.svg"
import imgComentar from "../../assets/comentar.svg"
import imgRecomendar from "../../assets/recomendar.svg"
import imgBuzz from "../../assets/buzzlightyear.svg"
import imgRoz from "../../assets/rozperfil.svg"
import imgProvaFogo from "../../assets/a-prova-de-fogo-1.jpg"
import imgFeedInfinito from "../../assets/feedinfinito.svg"

function Feed() {


     const postFeed: any[] = [
        {
            id: 1,
            userNome: "Antônio Madrigal",
            foto: { imgMadrigalPerfil },
            data: "4m atrás",
            assistiu: "Assistiu - Toy Story 2",
            conteudoPost: "Acabei de assistir Toy Stroy 2 ! ! ! Que filme maravilhoso, para mim fica em primeiro lugar nos filmes Pixar. Assisti pelo YouTube.",
            imgPost: { imgToyStoryPost },
            comentarios: [
                {
                    id: 2,
                    nome: "Buzz Lightyear",
                    foto: { imgBuzz },
                    data: "2m atrás",
                    comentario: "Que bom que gostou!"
                }
            ]
        }
    ]
    
    return (
        <>
            <>
                {/* <aside className="sidebar">
                    <nav className="navSidebar">
                        <button>
                            <span>
                                <a href="../Home/home.html">
                                    <img src={imgHome} alt="" />
                                    <span className="textomenu">Home</span>
                                </a>
                            </span>
                        </button>
                        <button>
                            <span>
                                <a href="../Favoritos/favoritos.html">
                                    <img src={imgHearth} alt="" />
                                    <span className="textomenu">Favoritos</span>
                                </a>
                            </span>
                        </button>
                        <button>
                            <span>
                                <a href="../perfilUsuarios/perfil.html">
                                    <img src={imgUser} alt="" />
                                    <span className="textomenu">Perfil</span>
                                </a>
                            </span>
                        </button>
                    </nav>
                </aside> */}
                <main>
                    {/*Formulário de envio*/}
                    <div className="newPost">
                        <div className="infoUser">
                            <img src={imgMufasaPerfil} alt="" />
                        </div>
                        <form action="" className="formPost">
                            <textarea
                                name="textarea"
                                placeholder="O que você assistiu recentemente?"
                                defaultValue={""}
                            />
                            <div className="iconsUser">
                                <div className="icons">
                                    <button className="btnFileForm">
                                        <img src={imgIconImg} alt="Adicione uma imagem" />
                                    </button>
                                    <button className="btnFileForm">
                                        <img src={imgIconLocal} alt="Adicione um local" />
                                    </button>
                                    <button className="btnFileForm">
                                        <img src={imgIconAnexo} alt="Anexe um arquivo" />
                                    </button>
                                </div>
                                <button className="btnFileForm">
                                    <img src={imgIconSend} alt="Publicar" />
                                </button>
                            </div>
                        </form>
                    </div>
                    <ul className="posts">
                        <li className="post">
                            <div className="infoUserPost">
                                <div className="imgUserPost">
                                    <img src={imgMadrigalPerfil} alt="" />
                                </div>
                                <div className="nameAndHour">
                                    <strong>Antônio Madrigal</strong>
                                    <p>4m atrás</p>
                                    <p className="colorir_texto_filmes">Assistiu - Toy Story 2</p>
                                </div>
                            </div>
                        </li>
                        <p className="textoPost">
                            Acabei de assistir Toy Story 2 !!!! Que filme maravilhoso, para mim fica
                            em primeiro lugar nos filmes Pixar. Assisti pelo YouTube.{" "}
                        </p>
                        <img className="balanoalvo" src={imgBalaNoAlvo} alt="" />
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
                        </li>
                        <p className="textoComments">Que bom que gostou!</p>
                        <div className="actionBtnComments">
                            <button type="button" className="filesPostComment">
                                <img src={imgLike} alt="Curtir" />
                            </button>
                            <button type="button" className="filesPostComment">
                                <img src={imgComentar} alt="Comentar" />
                            </button>
                            <button type="button" className="filesPostComment">
                                <img src={imgRecomendar} alt="Recomendar" />
                            </button>
                        </div>
                    </ul>
                    <ul className="posts">
                        <li className="post">
                            <div className="infoUserPost">
                                <div className="imgUserPost">
                                    <img src={imgRoz} alt="" />
                                </div>
                                <div className="nameAndHour">
                                    <strong>Roz</strong>
                                    <p>Ontem</p>
                                    <p className="colorir_texto_filmes">Assistiu - À Prova de Fogo</p>
                                </div>
                            </div>
                        </li>
                        <p className="textoPost">
                            Muita gente criticando, mas não vê o contexto todo da história, ela foi
                            maltrata por ele por 7 anos aguentando calada, até que ela começou a se
                            posicionar e não servir de empregada, pois até mulher ele procurava na internet, deixando ela de lado. A parte que ela ficou com ele somente pq ele ajudou a mãe dela
                            com a quantidade de $, é somente um ponto do filme que poderia ser
                            colocado outra história parecida, ele poderia ter pedido doação,
                            vendido carro etc… O fato q ela não ficou com quem tinha mais
                            condições financeiras, pq ele não tinha, ele apenas tinha um trocado
                            que ajuntou para o barco dele, era as economias, mas quem era mais
                            rico era o médico. Então não falem q foi por dinheiro, pq ela poderia
                            nem ter voltado com ele, mesmo depois dele comprar a cadeira e a cama
                            p mãe dela. Achei excelente o filme, só quem passa por isso sabe, as
                            mulheres principalmente! Esse filme muito abençoado.
                            

                        </p>
                        {/* <button onclick="leiaMais()" id="btnLeiaMais">
                        Ver mais
                        </button> */}
                        <img className="balanoalvo" src={imgProvaFogo} alt="" />
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
                                <img src={imgComentar} alt="Recomendar" />
                                <span>Recomendar</span>
                            </button>
                        </div>
                    </ul>
                    <div className="carregamento">
                        <img src={imgFeedInfinito} alt="" />
                    </div>
                </main>
            </>

        </>
    )
}

export default Feed