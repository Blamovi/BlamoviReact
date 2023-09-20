import "./style.css"

import imgLogoBranco  from "../../assets/images/logo-branco.svg";
import imgCinemaFooter  from "../../assets/images/cinema_foto_pexels 1 (1).png";

import { Link, useNavigate } from "react-router-dom";


function Footer() {
    return (
        <>
              <footer id="footer">
                <img
                    className="img-footer"
                    src={imgCinemaFooter}
                    alt=""
                />
                <ul>                   

                <Link to={"../Home/home.html"}>Home</Link>
                <Link to={"../Login/login.html"}>Login</Link>
                <Link to={"../Login/login.html"}>Pesquisar</Link>
                <Link to={"../calendario/calendario.html"}>Calendario</Link>
                <Link to={"../Favoritos/favoritos.html"}>Home</Link>
                <Link to={"../filmesinformacoes/filmes.html"}>Home</Link>
                    
                </ul>
                <div>
                    <div>
                        <img className="img-copy" src={imgLogoBranco} alt="" />
                        <span>Blámovi</span>
                        <p>© 2023 by blamovi.com, Inc.</p>
                    </div>
                </div>
            </footer>  

        </>
    )
}

export default Footer