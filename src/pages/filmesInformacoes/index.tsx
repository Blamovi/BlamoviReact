import "./style.css"

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../utils/api";


// import imgSimboloBatman from "../../assets/Images/image 141.svg";
import imgCoracao from "../../assets/Images/Coracao.svg";
//import imgBatman from "../../assets/Images/batman-(cav-das-tre).webp";
import imgTrofeu from "../../assets/Images/image 144.svg";
import imgBaloesComentarios from "../../assets/Images/image 145.svg";
//import imgHbo from "../../assets/Images/image 143.svg";
//import imgNetflix from "../../assets/Images/image 76.svg";
//import imgPrimeVideo from "../../assets/Images/image 70.svg";
//import imgDisney from "../../assets/Images/image 39.svg";
import imgBonecosGrupo from "../../assets/Images/Business Group.svg";
// import imgChristian from "../../assets/Images/image 122.svg";
// import imgMaggie from "../../assets/Images/image 126.svg";
// import imgMichael from "../../assets/Images/image 125.svg";
// import imgHeath from "../../assets/Images/image 123.svg";
// import imgMorgan from "../../assets/Images/image 128.svg";
// import imgCillian from "../../assets/Images/image 132.svg";
// import imgLampada from "../../assets/Images/Light On.svg";
// import imgAvengers from "../../assets/Images/image 111.svg";
// import imgJoker from "../../assets/Images/image 110.svg";
// import imgFlash from "../../assets/Images/image 85.svg";
// import imgInfo from "../../assets/Images/Info Popup.svg";
// import imgOscars from "../../assets/Images/The Oscars.svg";
// import imgMicrofone from "../../assets/Images/Camping Chair.svg";
// import imgPage from "../../assets/Images/Page.svg";
// import imgCalendario from "../../assets/Images/Calendar.svg";
import imgRicardo from "../../assets/Images/image 136.svg";
import imgMarcos from "../../assets/Images/image 140.svg";


//componentes
import ComentariosFilme from "../../components/ComentariosFilme";

import { useParams } from "react-router-dom";


function FilmesInformacoes() {

    const [titulo, setTitulo] = useState<string>("");
    const [genero, setGenero] = useState<string>("");
    const [diretor, setDiretor] = useState<string>("");
    const [temporadas, setTemporadas] = useState<string>("");
    const [sinopse, setSinopse] = useState<string>("");
    const [ano, setAno] = useState<string>("");
    const [curtida, setCurtida] = useState<string>("");
    const [elenco, setElenco] = useState<string>("");
    const [tipo, setTipo] = useState<string>("");
    const [poster, setPoster] = useState<string>("");
    const [trailer, setTrailer] = useState<string>("");
    const [duracao, setDuracao] = useState<any>();
    const [classificacao, setClassificacao] = useState<string>("");
    const [nota_total, setNota_Total] = useState<any>();
    const [quantidade_post, setQuantidade_Post] = useState<any>();

    const { idFilme } = useParams();

    function exibirInformacoesFilme() {

        api.get("videos/" + idFilme)
            .then((response: any) => {

                console.log(response.data);

                setTitulo(response.data.titulo);
                setGenero(response.data.genero);
                setDiretor(response.data.diretor);
                setTemporadas(response.data.temporadas);
                setSinopse(response.data.sinopse);
                setAno(response.data.ano);
                setCurtida(response.data.curtida);
                setElenco(response.data.elenco);
                setTipo(response.data.tipo);
                setPoster(response.data.poster);
                setTrailer(response.data.trailer);
                setClassificacao(response.data.classificacao);
                setNota_Total(response.data.nota_total);
                setQuantidade_Post(response.data.quantidade_post);
                setDuracao(response.data.duracao);
            })
            .catch((error: any) => {
                console.log("Error", error)
            })
    }

    useEffect(() => {
        exibirInformacoesFilme();
    }, [])

    return (
        <>

            <main id="detalhe_filmesInformacoes">
                <section className="Filmes">
                    <div className="banner_1">
                        {/* <p className="superbanner">BLÁMOVI: RECOMENDA</p> */}
                        {/* <img
                            className="img_rec"
                            src={imgSimboloBatman}
                            alt=""
                        /> */}
                    </div>
                    <div className="Banner2">
                        <h2>{titulo}</h2>
                        <h3>Gênero: {genero}</h3>
                        <p className="paragrafo_inicial">Ano: {ano} | Duração: {duracao}</p>
                        <p className="paragrafo_inicial">Tipo: {tipo} | Temporadas: {temporadas} | Classificação: {classificacao}</p>
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
                            <Link className="recomendar" to={"PerfilUsuario"}>
                                RECOMENDAR
                            </Link>
                        </div>
                        <div className="banner_trailer">
                            <div className="banner_box_img">
                                <img
                                    className="banner_img"
                                    src={"http://localhost:8090/images/" + poster}
                                    alt="Batman"
                                />
                                <div className="referências">
                                    <div className="div_avaliacoes_filme">
                                        <img src={imgTrofeu} />
                                        <span>{nota_total / quantidade_post}</span>
                                    </div>
                                    <div className="div_avaliacoes_filme">
                                        <img src={imgBaloesComentarios} alt="" />
                                        <span>{quantidade_post}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="trailer">

                                
                                <Link className="trailer1" to={"#"}>
                                    <iframe
                                        width={930}
                                        height={400}
                                        src={`https://www.youtube.com/embed/${trailer}`}
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
                    <div>
                        <p className="titulo1">Sinópse</p>
                        <p className="sinopse">
                            {sinopse}
                        </p>
                    </div>
                    <div className="topico">
                        <img
                            className="bonecos"
                            src={imgBonecosGrupo}
                            alt=""
                        />
                    </div>
                    <p className="titulo1">Elenco Principal</p>
                    <div className="ator">
                        <p className="elenco">{elenco}</p>
                    </div>
                    <p className="titulo2">Direção</p>
                    <div className="elementos">
                        <div className="ator">
                            <p className="elenco">{diretor}</p>
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

                    {/* const comentarios: any[] = [
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
                    ] */}

                    {/* {
                            comentarios.map((comentario: any) => {
                                return <div key={comentario.id} className="Comentarios_todos">
                                    <ComentariosFilme
                                        fotoUsuario={comentario.foto}
                                        nomeUsuario={comentario.nome}
                                        comentario={comentario.comentario}
                                    />
                                </div>
                            })
                        } */}

                </section>
            </main>

        </>
    );
}

export default FilmesInformacoes;