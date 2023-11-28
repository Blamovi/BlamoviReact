import "./style.css"


import imgLogoBranco  from "../../assets/images/logo-branco.svg";
// import imgLogoBranco from "../../assets/img/logo/logo-branco.svg"
import { Link } from "react-router-dom";


function Header() {

    function mostrarMenu() {
        let menu: any = document.getElementById("menu_links");
        let sombra: any = document.getElementById("sombra"); 
        let menu_barras: any = document.getElementById("menu_barras");


        let body: any = document.getElementsByTagName("body")[0];

        if (window.getComputedStyle(menu).left != "10px") { 
            menu.style.left = "10px";
            sombra.style.right = "-10vw"; 
            menu_barras.setAttribute("aria-expanded", "true");
            menu_barras.setAttribute("aria-label", "fechar menu"); 
            body.style.overflow = "hidden";
        } else {
            menu.style.left = "-300px"; 
            sombra.style.right = "110vw"; 
            menu_barras.setAttribute("aria-expanded", "false"); 
            menu_barras.setAttribute("aria-label", "abrir menu"); 
            body.style.overflow = "auto"; 
        }
        menu_barras.classList.toggle("ativo"); 
    }

    return (
        <><div id="sombra"></div>
            <header id="header">
                <div className="posicionamento_header posicionamento">
                    <div className="logo">
                        <img src={imgLogoBranco} alt="logo" />
                        <span>Blámovi</span>
                    </div>
                    <div id="divBusca">
                        <input type="text" id="txtBusca" placeholder="..." />
                        <button id="btnBusca">Buscar</button>
                    </div>

                    

                    <Link
                        id="menu_barras"
                        aria-label="abrir menu"
                        aria-controls="menu_links"
                        aria-expanded="false"
                        aria-haspopup="true"
                        className="menu_barras"
                        to={"#"}
                        onClick={mostrarMenu}>
                    
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                        </svg>
                    </Link>

                    <nav id="menu_links">
                        <Link to={"/"} style={{ animationDelay: "0.2s" }}>Home</Link>
                        <Link to={"/Favoritos"}>Favoritos</Link>
                        <Link to={"/Cadastro"}>Cadastro</Link>
                        <Link to={"/Login"}>Login</Link>

                        {/* {
                            props.usuario.logado ? <span>olà, {props.usuario.nomeUsuario} 
                            </span> :
                            <Link className="header_botao_login" to="/login">login</Link>
                        } */}

                    </nav>
                </div>
            </header> 

        </>
    )
}


export default Header;