import "./style.css"

import imgSimboloBatman from "../../assets/Images/image 141.svg";
import imgCoracao from "../../assets/Images/Coracao.svg";
import imgBatman from "../../assets/Images/batman-(cav-das-tre).webp";
import imgTrofeu from "../../assets/Images/image 144.svg";
import imgBaloesComentarios from "../../assets/Images/image 145.svg";
import imgHbo from "../../assets/Images/image 143.svg";
import imgNetflix from "../../assets/Images/image 76.svg";
import imgPrimeVideo from "../../assets/Images/image 70.svg";
import imgDisney from "../../assets/Images/image 39.svg";
import imgBonecosGrupo from "../../assets/Images/Business Group.svg";
import imgChristian from "../../assets/Images/image 122.svg";
import imgMaggie from "../../assets/Images/image 126.svg";
import imgMichael from "../../assets/Images/image 125.svg";
import imgHeath from "../../assets/Images/image 123.svg";
import imgMorgan from "../../assets/Images/image 128.svg";
import imgCillian from "../../assets/Images/image 132.svg";
import imgLampada from "../../assets/Images/Light On.svg";
import imgAvengers from "../../assets/Images/image 111.svg";
import imgJoker from "../../assets/Images/image 110.svg";
import imgFlash from "../../assets/Images/image 85.svg";
import imgInfo from "../../assets/Images/Info Popup.svg";
import imgOscars from "../../assets/Images/The Oscars.svg";
import imgMicrofone from "../../assets/Images/Camping Chair.svg";
import imgPage from "../../assets/Images/Page.svg";
import imgCalendar from "../../assets/images/Calendar.svg";
import imgRicardo from "../../assets/Images/image 136.svg";
import imgMarcos from "../../assets/Images/image 140.svg";
import { Link } from "react-router-dom";

//componentes
import ComentariosFilme from "../../components/ComentariosFilme";



function FilmesInformacoes() {

    const comentarios: any[] = [
        {
            id: 1,
            nome: "Ricardo Motta",
            foto: imgRicardo,
            comentario: "APLAUDO de pé essa obra extraordinária. Christopher Nolan surpreende com suas ideias e criatividade de cinema desde essa época, assim como a participação de David Goyer no roteiro. A atuação de Christian Bale é IMPECÁVEL, esse Homem não tem defeitos."
        },
        {
            id: 2,
            nome: "Marcos Felipe",
            foto: imgMarcos,
            comentario: "O maior filme de super herói já feito! Entrega tudo, o que é o Coringa e O Batman sem menosprezar quem é a máscara de Bruce Wayne"
        },
       ]

    return (
        <>
            <main id="detalhe_filmesInformacoes">
                <section className="Filmes">
                    <div className="banner_1">
                        <p className="superbanner">BLÁMOVI: RECOMENDA</p>
                        <img
                            className="img_rec"
                            src={imgSimboloBatman}
                            alt=""
                        />
                    </div>
                    <div className="Banner2">
                        <h2>BATMAN: O CAVALEIRO DAS TREVAS (2008)</h2>
                        <h3>Categoria: Ação . Aventura . Policial</h3>
                        <p className="paragrafo_inicial">Ano: 2008 - Duração: 2 h 32 min</p>
                        <div className="botoes2">
                            <img
                                className="comentario"
                                src={imgBaloesComentarios}
                                alt=""
                            />
                            <img
                                className="coração"
                                src={imgCoracao}
                                alt=""
                            />
                            <Link className="recomendar" to={"#"}>
                                RECOMENDAR
                            </Link>
                        </div>
                        <div className="banner_trailer">
                            <div className="banner_box_img">
                                <img
                                    className="banner_img"
                                    src={imgBatman}
                                    alt="Batman"
                                />
                                <div className="referências">
                                    <div className="div_avaliacoes_filme">
                                        <img src={imgTrofeu} />
                                        <span>8,8</span>
                                    </div>
                                    <div className="div_avaliacoes_filme">
                                        <img src={imgBaloesComentarios} alt="" />
                                        <span>56</span>
                                    </div>
                                    <div className="div_plataformas_filme">
                                        <img src={imgHbo} alt="" />
                                        <img src={imgNetflix} alt="" />
                                        <img src={imgPrimeVideo} alt="" />
                                        <img src={imgDisney} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="trailer">
                                <Link className="trailer1" to={"#"}>
                                    <iframe
                                        width={930}
                                        height={400}
                                        src="https://www.youtube.com/embed/htfkBjzUyDE?controls=0"
                                        title="YouTube video player"
                                        frameBorder={0}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    // allowFullScreen=""
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="informacoes_gerais">
                    <div className="informacoes_esquerda">
                        <div>
                            <p className="titulo1">Sinópse</p>
                            <p className="sinopse">
                                Com a ajuda de Jim Gordon e Harvey Dent, Batman tem mantido a ordem na
                                cidade de Gotham. Mas um jovem e anárquico criminoso, conhecido como
                                Coringa, pretende testar o justiceiro e mergulhar a cidade em um
                                verdadeiro caos.
                            </p>
                        </div>
                        <div className="topico">
                            <img
                                className="bonecos"
                                src={imgBonecosGrupo}
                                alt=""
                            />
                        </div>
                        <p className="titulo1">Elenco Princial</p>
                        <p className="subtitulo1">Seus personagens</p>
                        <div className="elementos">
                            <div className="elementos_1">
                                <div className="grupo1">
                                    <div>
                                        <img
                                            className="img1"
                                            src={imgChristian}
                                            alt=""
                                        />
                                    </div>
                                    <div className="ator">
                                        <p>Christian Bale</p>
                                        <p className="personagem">Bruce Wayne</p>
                                    </div>
                                </div>
                                <div className="grupo1">
                                    <div>
                                        <img
                                            className="img1"
                                            src={imgMaggie}
                                            alt=""
                                        />
                                    </div>
                                    <div className="ator">
                                        <p>Maggie G.</p>
                                        <p className="personagem">Rachel</p>
                                    </div>
                                </div>
                                <div className="grupo1">
                                    <div>
                                        <img
                                            className="img1"
                                            src={imgMichael}
                                            alt=""
                                        />
                                    </div>
                                    <div className="ator">
                                        <p>Michael Caine</p>
                                        <p className="personagem">Alfred</p>
                                    </div>
                                </div>
                            </div>
                            <div className="elementos_2">
                                <div className="grupo1">
                                    <div>
                                        <img
                                            className="img1"
                                            src={imgHeath}
                                            alt=""
                                        />
                                    </div>
                                    <div className="ator">
                                        <p>Heath Ledger</p>
                                        <p className="personagem">Coringa</p>
                                    </div>
                                </div>
                                <div className="grupo1">
                                    <div>
                                        <img
                                            className="img1"
                                            src={imgMorgan}
                                            alt=""
                                        />
                                    </div>
                                    <div className="ator">
                                        <p>Morgan F.</p>
                                        <p className="personagem">Lucius Fox</p>
                                    </div>
                                </div>
                                <div className="grupo1">
                                    <div>
                                        <img
                                            className="img1"
                                            src={imgCillian}
                                            alt=""
                                        />
                                    </div>
                                    <div className="ator">
                                        <p>Cillian Murphy.</p>
                                        <p className="personagem">Espantalho</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="informacoes_direita">
                        <div className="elem_1">
                            <img
                                className="img2"
                                src={imgLampada}
                                alt=""
                            />
                        </div>
                        <p className="titulo1">Descubra</p>
                        <p className="subtitulo1">Filmes Relacionados</p>
                        <div>
                            <div className="filmes_relacionados">
                                <div>
                                    <img
                                        className="tela1"
                                        src={imgAvengers}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <img
                                        className="tela1"
                                        src={imgJoker}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <img
                                        className="tela1"
                                        src={imgFlash}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="Descubra">
                            <div>
                                <div className="elem_1">
                                    <img
                                        className="img2"
                                        src={imgInfo}
                                        alt=""
                                    />
                                </div>
                                <p className="subtitulo1">+ Detalhes sobre o Filme</p>
                            </div>
                        </div>
                        <div className="detalhes_filme">
                            <div className="elem_2">
                                <div>
                                    <img
                                        className="img3"
                                        src={imgOscars}
                                        alt=""
                                    />
                                    <p className="subtitulo2">Ganhador de 2 Oscars</p>
                                </div>
                                <div>
                                    <img
                                        className="img3"
                                        src={imgMicrofone}
                                        alt=""
                                    />
                                    <p className="subtitulo2">Christopher Nolan</p>
                                </div>
                            </div>
                            <div>
                                <div className="elem_2">
                                    <div>
                                        <img
                                            className="img3"
                                            src={imgPage}
                                            alt=""
                                        />
                                        <p className="subtitulo2">
                                            Jonathan Nolan Christopher Nolan David S. Goyer
                                        </p>
                                    </div>
                                    <div>
                                        <img
                                            className="img3"
                                            src={imgCalendar}
                                            alt=""
                                        />
                                        <p className="subtitulo2">18 de julho de 2008</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <hr className="separar_comentario" />
                <section>
                    <div className="Comentarios_filmes">
                        <div>
                            <p className="subtitulo3">🗪 Comentários</p>
                        </div>
                    </div>
                    {
                        comentarios.map((comentario: any) => {
                            return <div key={comentario.id} className="Comentarios_todos">
                                <ComentariosFilme
                                    fotoUsuario={comentario.foto}
                                    nomeUsuario={comentario.nome}
                                    comentario={comentario.comentario}
                                />
                            </div>
                        })
                    }

                </section>
            </main>
        </>
    );
}

export default FilmesInformacoes;