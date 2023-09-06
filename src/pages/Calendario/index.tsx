import "./style.css"

//imagens
import imgBanner from "../../assets/Banner1.svg"
import imgCalendar from "../../assets/Calendar.svg"
import imgUser from "../../assets/User.svg"
import imgMufasaPerfil from "../../assets/mufasaperfil.svg"
import imgIconImg from "../../assets/iconImg.svg"
import imgIconLocal from "../../assets/iconLocal.svg"
import imgIconAnexo from "../../assets/iconAnexo.svg"
import imgIconSend from "../../assets/iconSend.svg"
import imgMadrigalPerfil from "../../assets/madrigalperfil.svg"
import imgBalaNoAlvo from "../../assets/balanoalvo.svg"

// Rotas
import { Link } from "react-router-dom";

function Calendario() {
    return(
        <>
        <main id="main_Calendario">
  <section>
    <div className="bn1">
      <img src={imgBanner} alt="" />   
    </div>
    <div className="banner_inicio">
      <img src={imgCalendar} alt="" />
      <div>
        <h2>CALENDÁRIO COMPLETO 2023</h2>
      </div>
    </div>
  </section>
  <section>
    <h3>11 de Maio 2023</h3>
    <div className="card">
      <div>
        <img className="card1" src="../calendario/img/book club.svg" alt="" />
      </div>
      <div>
        <h4>Clube do Livro 2: O Próximo do Capítulo</h4>
        <p>Categoria: Comédia</p>
        <span>Dirigido por: Bill Holderman</span>
        <p>
          A sequência segue nossos quatro melhores amigos enquanto eles levam
          seu clube do livro para a Itália para a divertida viagem de garotas
          que nunca tiveram.
        </p>
      </div>
      <div className="lateral">
        <img className="img1" src="../calendario/img/coração.svg" alt="" />
        <p className="classificaçao">Classificação</p>
        <img
          className="img2"
          src="../calendario/img/classificação 14.svg"
          alt=""
        />
      </div>
    </div>
    <h3>26 de Maio 2023</h3>
    <div className="card">
      <div>
        <img className="card1" src="../calendario/img/sereia.svg" alt="" />
      </div>
      <div>
        <h4>A Pequena Sereia</h4>
        <p>Categoria: Aventura . Familia . Fantasia</p>
        <span>Dirigido por: Rob Marshall</span>
        <p>
          Remake live action do clássico desenho animado "A Pequena Sereia", de
          1989, da Disney. Para conhecer um principe humano, uma sereia aceita
          ceder sua voz para que uma feiticeira lhe dê pernas. Agora, ela terá o
          desafio de se comunicar com o rapaz. A sinopse oficial ainda não foi
          divulgada
        </p>
      </div>
      <div className="lateral">
        <img className="img1" src="../calendario/img/coração.svg" alt="" />
        <p className="classificaçao">Classificação</p>
        <img
          className="img2"
          src="../calendario/img/classificação Livre.svg"
          alt=""
        />
      </div>
    </div>
    <h3>01 de Junho 2023</h3>
    <div className="card">
      <div>
        <img
          className="card1"
          src="../calendario/img/homem aranha.svg"
          alt=""
        />
      </div>
      <div>
        <h4>Homem-Aranha: Através do Aranhaverso</h4>
        <p>Categoria: Aventura . Animação . Ação</p>
        <span>Dirigido por: Joaquim dos Santos, Kemp Powers, Justin K.</span>
        <p>
          Depois de se reunir com Gwen Stacy, Homem-Aranha é pego através do
          Multiverso, onde ele encontra uma equipe de Pessoas-Aranha encarregada
          de proteger sua própria existência.
        </p>
      </div>
      <div className="lateral">
        <img className="img1" src="../calendario/img/coração.svg" alt="" />
        <p className="classificaçao">Classificação</p>
        <img
          className="img2"
          src="../calendario/img/classificação 12.svg"
          alt=""
        />
      </div>
    </div>
    <h3>02 de Junho 2023</h3>
    <div className="card">
      <div>
        <img className="card1" src="../calendario/img/nickeloden.svg" alt="" />
      </div>
      <div>
        <h4>Blue's Big City Adventure</h4>
        <p>Categoria: Família . Fantasia</p>
        <span>Dirigido por: Rob Marshall</span>
        <p>
          A turma toda de Pistas de Blue está reunida nesta aventura musical
          especial com nossos queridos amiguinhos e os três apresentadores Josh,
          Steve e Joe se unem a Blue em uma aventura musical na cidade de Nova
          Iorque.
        </p>
      </div>
      <div className="lateral">
        <img className="img1" src="../calendario/img/coração.svg" alt="" />
        <p className="classificaçao">Classificação</p>
        <img
          className="img2"
          src="../calendario/img/classificação Livre.svg"
          alt=""
        />
      </div>
    </div>
  </section>
  <div className="mais">
    <img className="btmais" src="../calendario/img/Plus.svg" alt="" />
  </div>
</main>

        </>
    )
}

export default Calendario