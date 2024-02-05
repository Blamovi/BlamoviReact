import "./style.css"

import imgSetaDireita from "../../assets/img/elementos/Less Than (4).png";
import imgSetaEsquerda from "../../assets/img/elementos/Less Than (3).png";

import imgStreamHbo from "../../assets/img/streams/HBO-MAX.png";
import imgStreamNetflix from "../../assets/img/streams/NETFLIX.png";
import imgStreamDisney from "../../assets/img/streams/DISNEY.png";

import { Swiper, SwiperSlide } from 'swiper/react';

import Card from "../../components/Card";

function Favoritos() {

    const data = [
        { id: '1', image: '../src/assets/img/banner/Frame 73.svg' },
        // {id: '', image:'../src/assets/img/banner/Frame 75.svg'},
        { id: '2', image: '../src/assets/img/banner/Frame 65.svg' },
        { id: '3', image: '../src/assets/img/banner/Frame 64.svg' },
    ]

    const listaFilmes: any[] = [
        {
            id: 1,
            titulo: "Batman: O Cavaleiro das Trevas",
            img: "src/assets/img/filmes-f/batman-(cav-das-tre).webp",
            imgStream: imgStreamHbo,
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
            id: 2,
            titulo: "Joker",
            img: "src/assets/img/filmes-f/joker.webp",
            nota: 8.4,
            imgStream: imgStreamHbo,
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
            id: 3,
            titulo: "Vingadores: Ultimato",
            img: "src/assets/img/filmes-f/image 111.jpg",
            nota: 8.4,
            imgStream: imgStreamDisney,
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
            id: 4,
            titulo: "Gladiador",
            img: "src/assets/img/filmes-f/gladiador.jpg",
            imgStream: imgStreamNetflix,
            nota: 9.4,

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
        }
    ]

    const listarSeries: any[] = [
        {
            id: 1,
            titulo: "The last of us",
            img: "src/assets/img/series-f/The-last-of-us.jpg",
            imgStream: imgStreamHbo,
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
            id: 2,
            titulo: "A Casa do Dragao",
            img: "src/assets/img/series-f/A-casa-dos-dragões.jpg",
            imgStream: imgStreamHbo,
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
            id: 3,
            titulo: "Beef",
            img: "src/assets/img/series-f/image 30.png",
            imgStream: imgStreamHbo,
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
            id: 4,
            titulo: "Mandalorian",
            img: "src/assets/img/series-f/mandalorian.jpg",
            imgStream: imgStreamDisney,
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
        }
    ]

    return (
        <main id="main_favoritos">

            <Swiper
                // modules={[EffectCards]}
                // effect="cards"
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt="Silder"
                            className="slider-item"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <section className="fav-filmes-favoritos">
                <h2>⭐ Filmes Favoritos</h2>
                <div className="fav-card">
                    <img src={imgSetaEsquerda} alt=""
                    />
                    {
                        listaFilmes.map((card: any) => {
                            return <div key={card.id
                            }>
                                <Card
                                    img={card.img}
                                    titulo={card.titulo}
                                    foto={card.img}
                                    imgStream={card.imgStream}
                                    nota={card.nota}
                                    comentarios={card.comentarios}
                                /></div>
                        })
                    }
                    <img src={imgSetaDireita} alt="" />
                </div>
            </section>
            <section className="fav-series-favoritos">
                <h2>⭐ Melhores series</h2>
                <div className="fav-card-linha">
                    <img src={imgSetaEsquerda} alt="" />
                    {
                        listarSeries.map((card: any) => {
                            return <div key={card.id
                            }>
                                <Card
                                    img={card.img}
                                    titulo={card.titulo}
                                    foto={card.img}
                                    imgStream={card.imgStream}
                                    nota={card.nota}
                                    comentarios={card.comentarios}
                                /></div>
                        })
                    }
                    <img src={imgSetaDireita} alt="" />
                </div>
            </section>
        </main>

    )
}

export default Favoritos;