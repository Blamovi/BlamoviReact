import "./style.css"

import imgVetor from "../../assets/img/banner/banner_P.png";
import imgLogo from "../../assets/img/banner/img - fundo.png";
import imgDestaques from "../../assets/img/section/film-everything-everywhere-all-at-once_ratio-16x9 1.svg";
import imgCriticoLeo from "../../assets/img/banner/Group 72.png";
import imgCriticoAna from "../../assets/img/banner/320x400 1.png";

import imgIconesTrofeu from "../../assets//img/elementos/Trophy.png";

import imgStreamerHbo from "../../assets/img/streams/HBO-MAX.png";
// import imgStreamerHbo from "../../assets/img/streams/HBO-MAX.png";
// import imgStreamerHbo from "../../assets/img/streams/HBO-MAX.png";
// import imgStreamerHbo from "../../assets/img/streams/HBO-MAX.png";
// import imgStreamerHbo from "../../assets/img/streams/HBO-MAX.png";



import imgFilmesBatman from "../../assets/img/filmes-f/batman-(cav-das-tre).webp";
import imgFilmesJoker from "../../assets/img/filmes-f/joker.webp";
import imgFilmesVingadores from "../../assets/img/filmes-f/image 111.jpg";
import imgFilmesGladiador from "../../assets/img/filmes-f/gladiador.jpg";

// import imgSeries from "../../assets/img/";
// import imgSeries from "../../assets/img/";
// import imgSeries from "../../assets/img/";
// import imgSeries from "../../assets/img/";

// import imgSeries from "../../assets/img/";


// import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <main id="main_home">
                <section className="banner">
                    <div className="banner_img">
                        <img src={imgVetor} alt="" />
                    </div>
                    <div className="banner_texto">
                        <p>Não sabe o que Assistir?</p>
                        <img src={imgLogo} alt="" />
                        <p>
                            A <span>Blámovi</span> te recomenda!
                        </p>
                    </div>
                </section>
                <section className="destaque">
                    <div className="destaque_conteudo">
                        <img
                            src={imgDestaques}
                            alt=""
                        />
                        <div>
                            <h2>Tudo em Todo Lugar ao Mesmo Tempo</h2>
                            <p>
                                Ganhador de 10 Oscars, “Tudo em Todo Lugar Ao Mesmo Tempo” , filme
                                dirigido por Daniel Scheinert e Daniel Kwan, acompanha a história de
                                uma imigrante chinesa que com sua lavanderia à beira do fracasso e seu
                                casamento com o marido covarde em ruínas, ela luta para lidar com
                                tudo, incluindo um relacionamento ruim com seu pai crítico e sua
                                filha.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="comentarios">
                    <div className="container">
                        <div className="container_conteudo">
                            <img src={imgCriticoLeo} alt="" />
                            <div>
                                <h3>Leonardo Pereira</h3>
                                <p>
                                    "O roteiro é tão bem estruturado que consegue construir, com sucesso
                                    diversos universos em apenas um filme"
                                </p>
                                <p>Nvl de critico na Blámovi</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="container_conteudo">
                            <img src={imgCriticoAna} alt="" />
                            <div>
                                <h3>Ana Cristina </h3>
                                <p>
                                    "Se tem uma coisa que eu aprecio na vida é quando um filme supera
                                    absurdamente as minhas expectativas. E foi o que aconteceu com Tudo
                                    em Todo Lugar ao Mesmo Tempo"
                                </p>
                                <p>Nvl de critico na Blámovi</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="Filmes_Destaques">
                    <h2>⭐ Filmes Favoritos</h2>
                    <div className="card-linha">
                        <img src="../img/elementos/Polygon 11.png" alt="" />
                        <div className="card" id="teste3">
                            <a href="../filmesinformacoes/filmes.html">
                            <img src={imgFilmesBatman} alt="" />
                            </a>
                            <h3>Batman: O Cavaleiro das Trevas</h3>
                            <div className="itens">
                                <div className="streams">
                                    <img src={imgStreamerHbo} alt="" />
                                </div>
                                <div className="icones">
                                    <img src={imgIconesTrofeu} alt="" />
                                    <span>8,8</span>
                                    <img src="../img/elementos/Talk.png" alt="" />
                                    <span>59</span>
                                </div>
                            </div>
                        </div>
                        <div className="card responsivo" id="teste3">
                            <img src={imgFilmesJoker} alt="" />
                            <h3>Joker</h3>
                            <div className="itens">
                                <div className="streams">
                                    <img src="../img/streams/HBO-MAX.png" alt="" />
                                </div>
                                <div className="icones">
                                    <img src="../img/elementos/Trophy.png" alt="" />
                                    <span>8,8</span>
                                    <img src="../img/elementos/Talk.png" alt="" />
                                    <span>59</span>
                                </div>
                            </div>
                        </div>
                        <div className="card responsivo" id="teste3">
                            <img src={imgFilmesVingadores} alt="" />
                            <h3>Vingadores: Ultimato</h3>
                            <div className="itens">
                                <div className="streams">
                                    <img src="../img/streams/DISNEY.png" alt="" />
                                </div>
                                <div className="icones">
                                    <img src="../img/elementos/Trophy.png" alt="" />
                                    <span>8,8</span>
                                    <img src="../img/elementos/Talk.png" alt="" />
                                    <span>59</span>
                                </div>
                            </div>
                        </div>
                        <div className="card responsivo" id="teste3">
                            <img src={imgFilmesGladiador} alt="" />
                            <h3>Gladiador</h3>
                            <div className="itens">
                                <div className="streams">
                                    <img src="../img/streams/NETFLIX.png" alt="" />
                                </div>
                                <div className="icones">
                                    <img src="../img/elementos/Trophy.png" alt="" />
                                    <span>8,8</span>
                                    <img src="../img/elementos/Talk.png" alt="" />
                                    <span>59</span>
                                </div>
                            </div>
                        </div>
                        <img src="../img/elementos/Polygon 15.png" alt="" />
                    </div>
                </section>
                <section className="Clássicos">
                    <h2>🎭 Clássicos</h2>
                    <div className="card-linha">
                        <img src="../img/elementos/Polygon 11.png" alt="" />
                        <div className="card" id="teste3">
                            <img
                                src="../img/classicos/movies-the-lord-of-the-rings-aragorn-viggo-mortensen-movie-posters-posters-the-return-of-the-king-entertainment-movies-hd-art-wallpaper-preview.png"
                                alt=""
                            />
                            <h3>Senhor dos Anéis: A Sociedade do Anel</h3>
                            <div className="itens">
                                <div className="streams">
                                    <img src="../img/streams/HBO-MAX.png" alt="" />
                                </div>
                                <div className="icones">
                                    <img src="../img/elementos/Trophy.png" alt="" />
                                    <span>8,8</span>
                                    <img src="../img/elementos/Talk.png" alt="" />
                                    <span>59</span>
                                </div>
                            </div>
                        </div>
                        <div className="card responsivo" id="teste3">
                            <img src="../img/classicos/20120876 1.png" alt="" />
                            <h3>O Poderoso Chefão</h3>
                            <div className="itens">
                                <div className="streams">
                                    <img src="../img/streams/NETFLIX.png" alt="" />
                                </div>
                                <div className="icones">
                                    <img src="../img/elementos/Trophy.png" alt="" />
                                    <span>8,8</span>
                                    <img src="../img/elementos/Talk.png" alt="" />
                                    <span>59</span>
                                </div>
                            </div>
                        </div>
                        <div className="card responsivo" id="teste3">
                            <img src="../img/classicos/20-the-truman-show.png" alt="" />
                            <h3>O Show de Truman - O Show da Vida</h3>
                            <div className="itens">
                                <div className="streams">
                                    <img src="../img/streams/amazon.png" alt="" />
                                </div>
                                <div className="icones">
                                    <img src="../img/elementos/Trophy.png" alt="" />
                                    <span>8,8</span>
                                    <img src="../img/elementos/Talk.png" alt="" />
                                    <span>59</span>
                                </div>
                            </div>
                        </div>
                        <div className="card responsivo" id="teste3">
                            <img src="../img/classicos/06-Alien.png" alt="" />
                            <h3>Alien - O 8.º Passageiro</h3>
                            <div className="itens">
                                <div className="streams">
                                    <img src="../img/streams/star.png" alt="" />
                                </div>
                                <div className="icones">
                                    <img src="../img/elementos/Trophy.png" alt="" />
                                    <span>8,8</span>
                                    <img src="../img/elementos/Talk.png" alt="" />
                                    <span>59</span>
                                </div>
                            </div>
                        </div>
                        <img src="../img/elementos/Polygon 15.png" alt="" />
                    </div>
                </section>
                <section className="Melhores_series">
                    <h2>🏆 Melhores series</h2>
                    <div className="card-linha">
                        <img src="../img/elementos/Polygon 11.png" alt="" />
                        <div className="card" id="teste3">
                            <img src="../img/series-f/image 30.png" alt="" />
                            <h3>Treta</h3>
                            <div className="itens">
                                <div className="streams">
                                    <img src="../img/streams/HBO-MAX.png" alt="" />
                                </div>
                                <div className="icones">
                                    <img src="../img/elementos/Trophy.png" alt="" />
                                    <span>8,8</span>
                                    <img src="../img/elementos/Talk.png" alt="" />
                                    <span>59</span>
                                </div>
                            </div>
                        </div>
                        <div className="card responsivo" id="teste3">
                            <img src="../img/series-f/The-last-of-us.jpg" alt="" />
                            <h3>The last of us</h3>
                            <div className="itens">
                                <div className="streams">
                                    <img src="../img/streams/HBO-MAX.png" alt="" />
                                </div>
                                <div className="icones">
                                    <img src="../img/elementos/Trophy.png" alt="" />
                                    <span>8,8</span>
                                    <img src="../img/elementos/Talk.png" alt="" />
                                    <span>59</span>
                                </div>
                            </div>
                        </div>
                        <div className="card responsivo" id="teste3">
                            <img src="../img/series-f/mandalorian.jpg" alt="" />
                            <h3>Mandalorian</h3>
                            <div className="itens">
                                <div className="streams">
                                    <img src="../img/streams/DISNEY.png" alt="" />
                                </div>
                                <div className="icones">
                                    <img src="../img/elementos/Trophy.png" alt="" />
                                    <span>8,8</span>
                                    <img src="../img/elementos/Talk.png" alt="" />
                                    <span>59</span>
                                </div>
                            </div>
                        </div>
                        <div className="card responsivo" id="teste3">
                            <img src="../img/series-f/image 108.png" alt="" />
                            <h3>Origem</h3>
                            <div className="itens">
                                <div className="streams">
                                    <img src="../img/streams/NETFLIX.png" alt="" />
                                </div>
                                <div className="icones">
                                    <img src="../img/elementos/Trophy.png" alt="" />
                                    <span>8,8</span>
                                    <img src="../img/elementos/Talk.png" alt="" />
                                    <span>59</span>
                                </div>
                            </div>
                        </div>
                        <img src="../img/elementos/Polygon 15.png" alt="" />
                    </div>
                </section>
                <section className="Para_maratonar">
                    <h2>🏃 Para Maratonar</h2>
                    <div className="card-linha">
                        <img src="../img/elementos/Polygon 11.png" alt="" />
                        <div className="card" id="teste3">
                            <img src="../img/filmes-f/image 102.png" alt="" />
                            <h3>Rambo Programado para matar</h3>
                            <div className="itens">
                                <div className="streams">
                                    <img src="../img/streams/youtube.png" alt="" />
                                </div>
                                <div className="icones">
                                    <img src="../img/elementos/Trophy.png" alt="" />
                                    <span>8,8</span>
                                    <img src="../img/elementos/Talk.png" alt="" />
                                    <span>59</span>
                                </div>
                            </div>
                        </div>
                        <div className="card responsivo" id="teste3">
                            <img src="../img/filmes-f/image 48.png" alt="" />
                            <h3>Rambo 2 A missão</h3>
                            <div className="itens">
                                <div className="streams">
                                    <img src="../img/streams/youtube.png" alt="" />
                                </div>
                                <div className="icones">
                                    <img src="../img/elementos/Trophy.png" alt="" />
                                    <span>8,8</span>
                                    <img src="../img/elementos/Talk.png" alt="" />
                                    <span>59</span>
                                </div>
                            </div>
                        </div>
                        <div className="card responsivo" id="teste3">
                            <img src="../img/filmes-f/image 103.png" alt="" />
                            <h3>Rambo 3 </h3>
                            <div className="itens">
                                <div className="streams">
                                    <img src="../img/streams/youtube.png" alt="" />
                                </div>
                                <div className="icones">
                                    <img src="../img/elementos/Trophy.png" alt="" />
                                    <span>8,8</span>
                                    <img src="../img/elementos/Talk.png" alt="" />
                                    <span>59</span>
                                </div>
                            </div>
                        </div>
                        <div className="card responsivo" id="teste3">
                            <img src="../img/filmes-f/image 104.png" alt="" />
                            <h3>Rambo 4</h3>
                            <div className="itens">
                                <div className="streams">
                                    <img src="../img/streams/youtube.png" alt="" />
                                </div>
                                <div className="icones">
                                    <img src="../img/elementos/Trophy.png" alt="" />
                                    <span>8,8</span>
                                    <img src="../img/elementos/Talk.png" alt="" />
                                    <span>59</span>
                                </div>
                            </div>
                        </div>
                        <img src="../img/elementos/Polygon 15.png" alt="" />
                    </div>
                </section>
                <section className="Lancamentos">
                    <h2>📅 Lançamentos</h2>
                    <div className="card-linha">
                        <img src="../img/elementos/Polygon 11.png" alt="" />
                        <div className="card" id="teste3">
                            <h2>01 Junho</h2>
                            <img src="../img/filmes-f/image 84.png" alt="" />
                            <h3>Homem-Aranha: Através do Aranhaverso</h3>
                            <a href="https://www.youtube.com/watch?v=_4is7I_ZxTg&pp=ygUtdHJhaWxlciBob21lbSBhcmFuaGEgYXRyYXbDqXMgZG8gYXJhbmhhdmVyc28g">
                                Assistir ao trailer
                            </a>
                        </div>
                        <div className="card responsivo" id="teste3">
                            <h2>08 Junho</h2>
                            <img src="../img/filmes-f/image 83.png" alt="" />
                            <h3>Transformers: O Despertar das Feras</h3>
                            <a href="https://www.youtube.com/watch?v=PHC412-pCoQ&pp=ygUrdHJhaWxlciBUcmFuc2Zvcm1lcnM6IE8gRGVzcGVydGFyIGRhcyBGZXJhcw%3D%3D">
                                Assistir ao trailer
                            </a>
                        </div>
                        <div className="card responsivo" id="teste3">
                            <h2>14 Junho</h2>
                            <img src="../img/filmes-f/image 85.png" alt="" />
                            <h3>The Flash</h3>
                            <a href="https://www.youtube.com/watch?v=xMbg-ZsFCCo&pp=ygURdHJhaWxlciBUaGUgRmxhc2g%3D">
                                Assistir ao trailer
                            </a>
                        </div>
                        <div className="card responsivo" id="teste3">
                            <h2>28 Junho</h2>
                            <img src="../img/filmes-f/black demon.png" alt="" />
                            <h3>Demônio dos mares</h3>
                            <a href="https://www.youtube.com/watch?v=yX-pvjO4N3o&pp=ygUUTyBERU3DlE5JTyBET1MgTUFSRVM%3DD">
                                Assistir ao trailer
                            </a>
                        </div>
                        <img src="../img/elementos/Polygon 15.png" alt="" />
                    </div>
                    <a className="input-submit" href="../calendario/calendario.html">
                        + Lançamentos
                    </a>
                </section>
            </main>


        </>
    )
}

export default Home;