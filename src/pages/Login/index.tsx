//estilização
import "./style.css"


import imgIconUser33 from "../../assets/images/IconUser33.png"
import imgGroupMessage from "../../assets/images/Group Message.png"
import imgLock from "../../assets/images/Lock.png"
import imglogo from "../../assets/images/logo.png"
import imgfaceBranco from "../../assets/images/faceBranco.svg"
import imgInstaBranco from "../../assets/images/InstaBranco.svg"
import imgtwitterBranco from "../../assets/images/twitterBranco.svg"
import imgWhatsBranco from "../../assets/images/WhatsBranco.svg"
import imgbanner from "../../assets/images/cineminha.png"

//hooks
import { useState, useEffect } from "react";


//axios


//rotas
import { useNavigate } from "react-router-dom";

//localStorage
import secureLocalStorage from "react-secure-storage";


function Login() {

      //Variavel navigate que utiliza a função useNavigate para navegar entre os componentes
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    function realizarAutenticacao(event: any) {
        event.preventDefault();

        const usuario = {
            email: email,
            password: senha
        };

        api.post("login", usuario)
            .then((response: any) => {
                console.log(response.data);

                secureLocalStorage.setItem("user", response.data);

                //redirecionar ao componente perfil
                navigate("/PerfilUsuario/" + response.data.user.id);
                //recarrega a tela
                navigate(0);

            })
            .catch((error: any) => {
                alert("Erro ao tentar se logar! :(");
            })

}
    return(
        <>

<main   className="banner" id="ajustes3" >
        
        <div >
         {/* <img className="cineminha" src={imgbanner}  />  */}
        </div>
        {/* <div className="bannercineminha">
        
        </div> */}

  <div className="container">



    <a className="links" id="paracadastro" />
    <a className="links" id="paralogin" />
    <div className="content">
      <div id="cadastro">
        <form className="ajustes " method="post" action="">
          <h1>Login</h1>
          <div className="input">
         
            
           
          </div>
          <div className="input">
            <img
              className="form-label"
              src={imgGroupMessage}   
            />
            <div className="input-email">
              <label htmlFor="email_cad">Seu e-mail</label>
              <input
                // id="email_cad"
                // name="email_cad"
                // required={true}
                // type="email"
                type="email_cad"
                id="email_cad"
                // placeholder="Digite aqui seu e-mail:"
                required={true}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="input">
            <img className="form-label" src={imgLock} />   
            <div className="input-senha">
              <label htmlFor="senha_cad">Sua senha</label>
              <input
                // id="senha_cad"
                // name="senha_cad"
                // required={true}
                // type="password"
                id="senha_cad"
                name="senha_cad"
                // placeholder="Digite aqui sua senha:"
                required={true}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
          </div>
          <div className="input">
        
  
          </div>
          <div className="input-submit">
              <input type="submit" value="Logar" />
            </div>

          {/* <hr class="linha"> */}
          <div className="alinhamento">
            <p className="link">

              <a href="#paralogin">
               Cadastrar
              </a>
            </p>
          </div>
        </form>
        <div className="contato">
          <div className="imagem">
            <img src={imglogo} />
            {/* <a href="contato@blamovi.com">contato@blamovi.com</a> */}
            <img src={imgfaceBranco} alt="" /> 
            <img src={imgInstaBranco} alt="" />  
            <img
              src={imgtwitterBranco}     
              alt=""
            />
            <img src={imgWhatsBranco} alt="" />     
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

{/* <footer className="ajustesrodape" >

    <div className="rodapejf1" >
      
      <ul className="rodapejf">
        <li><a href="#" title="Home">Favoritos</a></li>
        <li><a href="#" title="login">Home</a></li>
        <li><a href="#" title="pesquisar">Pesquisar</a></li>
        <li><a href="#" title="login">Login</a></li>
        <li><a href="#" title="noticias">Noticias</a></li>
        <li><a href="#" title="informações">Informações</a></li>
        <li><a href="#" title="Fale Conosco">Fale Conosco</a></li>

      </ul>

    </div>

  </footer> */}
        
        </>
    )
}

export default Login