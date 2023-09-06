import "./style.css"

import imgVetor from "../../assets/img/banner/banner_P.png";

import imgLogo from "../../assets/img/banner/img - fundo.png";

import imgDestaques from "../../assets/img/section/film-everything-everywhere-all-at-once_ratio-16x9 1.svg";

import imgCriticoLeo from "../../assets/img/banner/Group 72.png";
import imgCriticoAna from "../../assets/img/banner/320x400 1.png";


import imgFilmesBatman from "../../assets/img/filmes-f/batman-(cav-das-tre).webp";
import imgFilmesJoker from "../../assets/img/filmes-f/joker.webp";
import imgFilmesVingadores from "../../assets/img/filmes-f/image 111.jpg";
import imgFilmesGladiador from "../../assets/img/filmes-f/gladiador.jpg";


import imgClassicoAlien from "../../assets/img/classicos/06-Alien.png"
import imgClassicoTruman from "../../assets/img/classicos/20-the-truman-show.png"
import imgClassicoChefao from "../../assets/img/classicos/20120876 1.png"
import imgClassicoSenhorDosAneis from "../../assets/img/classicos/Senhor Dos Aneis.png"

import imgSeriesTheLast from "../../assets/img/series-f/The-last-of-us.jpg"
import imgSeriesCasaDragao from "../../assets/img/series-f/A-casa-dos-dragões.jpg"
import imgSeriesBeef from "../../assets/img/series-f/image 30.png"


import imgClassicoRambo1 from "../../assets/img/classicos/rambo1.png"
import imgClassicoRambo2 from "../../assets/img/classicos/rambo2.png"
import imgClassicoRambo3 from "../../assets/img/classicos/rambo3.png"
import imgClassicoRambo4 from "../../assets/img/classicos/rambo4.png"

import imgLancaSpider from "../../assets/img/filmes-f/image 84.png"
import imgLancaTransformers from "../../assets/img/filmes-f/image 83.png"
import imgLancaFlash from "../../assets/img/filmes-f/image 83.png"
import imgLancaDemonio from "../../assets/img/filmes-f/black demon.png"

import Card from "../../components/Card";

// import { Link } from "react-router-dom";

function Home() {
    const listaFilmes: any[] = [
        {
            titulo: "Batman: O Cavaleiro das Trevas",
            img: { imgFilmesBatman },
            nota: 9.0,
            comentarios: [
                {
                    conteudo: "This movie is a work of art. The finest sequel ever made.",
                    usuario: "dseferaj"
                }, {
                    conteudo: "Dark, yes, complex, ambitious.",
                    usuario: "littlemartinarocena"
                }, {
                    conteudo: "I couldn't believe The Dark knight could live up to the hype.",
                    usuario: "filmquestint"
                }
            ]
        },

        {
            titulo: "Joker",
            img: { imgFilmesJoker },
            nota: 8.4,
            comentarios: [
                {
                    conteudo: "The movie affects you in a way that makes it physically painful to experience.",
                    usuario: "brianmlucas"
                }, {
                    conteudo: "Arthur Fleck's a guy with lofty aspirations, wants to make you laugh and disturb your foundations.",
                    usuario: "Xstal"
                }, {
                    conteudo: "Truly a masterpiece, The Best Hollywood film of 2019, one of the Best films of the decade.",
                    usuario: "Aman_Goyal"
                }
            ]
        },

        {
            titulo: "Vingadores: Ultimato",
            img: { imgFilmesVingadores },
            nota: 8.4,
            comentarios: [
                {
                    conteudo: "Not as good as infinity war but a great movie",
                    usuario: "ACollegeStudent"
                }, {
                    conteudo: "This film is an emotional rollercoaster with some of the coolest superhero plot lines ever drawn up.",
                    usuario: "davyjones-636363"
                }, {
                    conteudo: "After Avengers Infinity War, we waited for the Avengers Endgame.",
                    usuario: "ahmetkozan"
                }
            ]
        },

        {
            titulo: "Gladiador",
            img: { imgFilmesGladiador },
            nota: 9.0,
            comentarios: [
                {
                    conteudo: "This movie is a work of art. The finest sequel ever made.",
                    usuario: "dseferaj"
                }, {
                    conteudo: "Dark, yes, complex, ambitious.",
                    usuario: "littlemartinarocena"
                }, {
                    conteudo: "I couldn't believe The Dark knight could live up to the hype.",
                    usuario: "filmquestint"
                }
            ]
        },
    ]

    const listarFilmesClassicos: any[] = [
        {
            titulo: "Alien - O 8º Passageiro",
            img: { imgClassicoAlien },
            nota: 8.5,
            comentarios: [
                {
                    conteudo: "Alien remains one of the most original, terrifying movies of all time.",
                    usuario: "Sleepin_Dragon"
                }, {
                    conteudo: "'Alien' is one of those special films that have aged very, very well.",
                    usuario: "gogoschka-1"
                }, {
                    conteudo: "One of the best classic sci-fi horror films of all time - A masterpiece.",
                    usuario: "ivo-cobra8"
                }
            ]
        },

        {
            titulo: "O Show de Truman: O Show da Vida",
            img: { imgClassicoTruman },
            nota: 8.2,
            comentarios: [
                {
                    conteudo: "The Truman Show is a film I never got around to watching until now, despite having heard references to it here and there over the past.",
                    usuario: "skepticskeptical"
                }, {
                    conteudo: "I have never liked Jim Carey's humor. I have found it to very broad and boorish.",
                    usuario: "planktonrules"
                }, {
                    conteudo: "As inventive and creative as Weir's staging is, The Truman Show wouldn't work without credible Truman.",
                    usuario: "MrPupkin"
                }
            ]
        },

        {
            titulo: "O Poderoso Chefão",
            img: { imgClassicoChefao },
            nota: 9.2,
            comentarios: [
                {
                    conteudo: "A masterclass in film making, is The Godfather a contender for the best film of all time?",
                    usuario: "Sleepin_Dragon"
                }, {
                    conteudo: "It is now past 1 PM and I just finished watching Francis Ford Coppola's The Godfather. I should probably go to bed. ",
                    usuario: "andrewburgereviews"
                }, {
                    conteudo: "his isn't just a beautifully crafted gangster film.",
                    usuario: "gogoschka-1"
                }
            ]
        },

        {
            titulo: "Senhor dos Anéis",
            img: { imgClassicoSenhorDosAneis },
            nota: 9.2,
            comentarios: [
                {
                    conteudo: "A masterclass in film making, is The Godfather a contender for the best film of all time?",
                    usuario: "Sleepin_Dragon"
                }, {
                    conteudo: "It is now past 1 PM and I just finished watching Francis Ford Coppola's The Godfather. I should probably go to bed. ",
                    usuario: "andrewburgereviews"
                }, {
                    conteudo: "his isn't just a beautifully crafted gangster film.",
                    usuario: "gogoschka-1"
                }
            ]
        }
    ]

    const listarSeries: any[] = [
        {
            titulo: "Alien - O 8º Passageiro",
            img: { imgSeriesTheLast },
            nota: 8.5,
            comentarios: [
                {
                    conteudo: "Alien remains one of the most original, terrifying movies of all time.",
                    usuario: "Sleepin_Dragon"
                }, {
                    conteudo: "'Alien' is one of those special films that have aged very, very well.",
                    usuario: "gogoschka-1"
                }, {
                    conteudo: "One of the best classic sci-fi horror films of all time - A masterpiece.",
                    usuario: "ivo-cobra8"
                }
            ]
        }, {
            titulo: "Alien - O 8º Passageiro",
            img: { imgSeriesCasaDragao },
            nota: 8.5,
            comentarios: [
                {
                    conteudo: "Alien remains one of the most original, terrifying movies of all time.",
                    usuario: "Sleepin_Dragon"
                }, {
                    conteudo: "'Alien' is one of those special films that have aged very, very well.",
                    usuario: "gogoschka-1"
                }, {
                    conteudo: "One of the best classic sci-fi horror films of all time - A masterpiece.",
                    usuario: "ivo-cobra8"
                }
            ]
        }, {
            titulo: "Alien - O 8º Passageiro",
            img: { imgSeriesBeef },
            nota: 8.5,
            comentarios: [
                {
                    conteudo: "Alien remains one of the most original, terrifying movies of all time.",
                    usuario: "Sleepin_Dragon"
                }, {
                    conteudo: "'Alien' is one of those special films that have aged very, very well.",
                    usuario: "gogoschka-1"
                }, {
                    conteudo: "One of the best classic sci-fi horror films of all time - A masterpiece.",
                    usuario: "ivo-cobra8"
                }
            ]
        },
    ]

    const listarMaratonas: any[] = [
        {
            titulo: "Rambo - Programado Para Matar",
            img: { imgClassicoRambo1 },
            nota: 7.7,
            comentarios: [
                {
                    conteudo: "Alien remains one of the most original, terrifying movies of all time.",
                    usuario: "Sleepin_Dragon"
                }, {
                    conteudo: "'Alien' is one of those special films that have aged very, very well.",
                    usuario: "gogoschka-1"
                }, {
                    conteudo: "One of the best classic sci-fi horror films of all time - A masterpiece.",
                    usuario: "ivo-cobra8"
                }
            ]
        },{
            titulo: "Rambo II: A Missão",
            img: { imgClassicoRambo2 },
            nota: 6.5,
            comentarios: [
                {
                    conteudo: "Alien remains one of the most original, terrifying movies of all time.",
                    usuario: "Sleepin_Dragon"
                }, {
                    conteudo: "'Alien' is one of those special films that have aged very, very well.",
                    usuario: "gogoschka-1"
                }, {
                    conteudo: "One of the best classic sci-fi horror films of all time - A masterpiece.",
                    usuario: "ivo-cobra8"
                }
            ]
        },{
            titulo: "Rambo III",
            img: { imgClassicoRambo3 },
            nota: 5.8,
            comentarios: [
                {
                    conteudo: "Alien remains one of the most original, terrifying movies of all time.",
                    usuario: "Sleepin_Dragon"
                }, {
                    conteudo: "'Alien' is one of those special films that have aged very, very well.",
                    usuario: "gogoschka-1"
                }, {
                    conteudo: "One of the best classic sci-fi horror films of all time - A masterpiece.",
                    usuario: "ivo-cobra8"
                }
            ]
        },{
            titulo: "Rambo IV",
            img: { imgClassicoRambo4 },
            nota: 7.0,
            comentarios: [
                {
                    conteudo: "Alien remains one of the most original, terrifying movies of all time.",
                    usuario: "Sleepin_Dragon"
                }, {
                    conteudo: "'Alien' is one of those special films that have aged very, very well.",
                    usuario: "gogoschka-1"
                }, {
                    conteudo: "One of the best classic sci-fi horror films of all time - A masterpiece.",
                    usuario: "ivo-cobra8"
                }
            ]
        }
    ]

    const listarLancamentos: any[] = [
        {
            titulo: "Homem-Aranha: Através do Aranhaverso",
            img: { imgLancaSpider },
            nota: 8.8,
            comentarios: [
                {
                    conteudo: "It's honestly absurd how good the Spider-Verse movies are.",
                    usuario: "MiroslavKyuranov"
                }, {
                    conteudo: "The animation, flow of everything, genius character development, and action were all electrifying!",
                    usuario: "UniqueParticle"
                }, {
                    conteudo: "If it wasn't already obvious in the first film, it's now officially clear as day that the people behind the Spider-Verse franchise",
                    usuario: "pugpool10"
                }
            ]
        },{
            titulo: "Transformers: O Despertar das Feras",
            img: { imgLancaTransformers },
            nota: 6.7,
            comentarios: [
                {
                    conteudo: "It's time to move on from the humans needing to be the heroes in these storylines.",
                    usuario: "kevin_robbins"
                }, {
                    conteudo: "After the success of 'Bumblebee' I was hoping that this instalment might offer a more rewarding viewing experience than the previous.",
                    usuario: "ethanbresnett"
                }, {
                    conteudo: "Times for everything, unfortunately including cinema too.",
                    usuario: "tchitouniaram"
                }
            ]
        },{
            titulo: "The Flash",
            img: { imgLancaFlash },
            nota: 6.8,
            comentarios: [
                {
                    conteudo: "Keaton Steals The Show.",
                    usuario: "slightlymad22"
                }, {
                    conteudo: "Finally after the early screening on 6th June which showed the unfinished print, I get to watch the final cut on IMAX today.",
                    usuario: "chand-suhas"
                }, {
                    conteudo: "I always start any review of a superhero movie by making it clear that these are not my types of movies and my opinion, for any superfans out there.",
                    usuario: "jtindahouse"
                }
            ]
        },{
            titulo: "O Demônio dos Mares",
            img: { imgLancaDemonio },
            nota: 3.7,
            comentarios: [
                {
                    conteudo: "Extremely disappointing.",
                    usuario: "ray512122"
                }, {
                    conteudo: "Never judge a book by its cover.",
                    usuario: "kuner-59029"
                }, {
                    conteudo: "Pay no attention to the negative reviews because this was solid popcorn..",
                    usuario: "LordCommandar"
                }
            ]
        }
    ]
    

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
                        {
                            listaFilmes.map((Card: any) => {
                                return <Card
                                    id={Card.id}
                                    titulo={Card.titulo}
                                    foto={Card.img}
                                    nota={Card.number}
                                    comentarios={listaFilmes}
                                />
                            })

                        }
                        {/* <div className="card" id="teste3">
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
                        </div> */}
                        {/* <div className="card responsivo" id="teste3">
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
                        </div> */}
                        {/* <div className="card responsivo" id="teste3">
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
                        </div> */}
                        {/* <div className="card responsivo" id="teste3">
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
                        </div> */}
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
                            {
                                listarFilmesClassicos.map((Card: any) => {
                                    return <Card
                                        id={Card.id}
                                        titulo={Card.titulo}
                                        foto={Card.img}
                                        nota={Card.number}
                                        comentarios={listaFilmes}
                                    />
                                })
                            }
                        </div>
                        {/* <div className="card responsivo" id="teste3">
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
                        </div> */}
                        {/* <div className="card responsivo" id="teste3">
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
                        </div> */}
                        {/* <div className="card responsivo" id="teste3">
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
                        </div> */}
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
                            {
                                listarSeries.map((Card: any) => {
                                    return <Card
                                        id={Card.id}
                                        titulo={Card.titulo}
                                        foto={Card.img}
                                        nota={Card.number}
                                        comentarios={listaFilmes}
                                    />
                                })
                            }
                        </div>
                        {/* <div className="card responsivo" id="teste3">
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
                        </div> */}
                        {/* <div className="card responsivo" id="teste3">
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
                        </div> */}
                        {/* <div className="card responsivo" id="teste3">
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
                        </div> */}
                        <img src="../img/elementos/Polygon 15.png" alt="" />
                    </div>
                </section>
                <section className="Para_maratonar">
                    <h2>🏃 Para Maratonar</h2>
                    <div className="card-linha">
                        <img src="../img/elementos/Polygon 11.png" alt="" />
                        <div className="card" id="teste3">
                            <img src="../img/filmes-f/image 102.png" alt="" />
                            {
                                listarMaratonas.map((Card: any) => {
                                    return <Card
                                        id={Card.id}
                                        titulo={Card.titulo}
                                        foto={Card.img}
                                        nota={Card.number}
                                        comentarios={listaFilmes}
                                    />
                                })
                            }
                        </div>
                        {/* <div className="card responsivo" id="teste3">
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
                        </div> */}
                        <img src="../img/elementos/Polygon 15.png" alt="" />
                    </div>
                </section>
                <section className="Lancamentos">
                    <h2>📅 Lançamentos</h2>
                    <div className="card-linha">
                        <img src="../img/elementos/Polygon 11.png" alt="" />
                        {
                            listarLancamentos.map((Card: any) => {
                                return <Card
                                    id={Card.id}
                                    titulo={Card.titulo}
                                    foto={Card.img}
                                    nota={Card.number}
                                    comentarios={listaFilmes}
                                />
                            })

                        }
                        {/* <div className="card" id="teste3">
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
                        </div> */}
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