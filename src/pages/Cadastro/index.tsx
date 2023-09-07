import "./style.css"

import imgCinema from "../../assets/images/cinema_foto_pexels 1.png"



function Cadastro() {
    return(
        <>
        <main className="banner" id="main_cadastro">

       

  <div className="container">
    <a className="links" id="paracadastro" />
    <a className="links" id="paralogin" />
    <div className="content">
      <div id="cadastro">
        <form className="ajustes " method="post" action="">
          <h1>Usuario</h1>
          <div className="input">
            <img
              className="form-label"
              src="../Cadastro/imagens/icon User.png"
            />
            <div className="input-nome">
              <label htmlFor="nome_cad">Seu Nome</label>
              <input
                id="nome_cad"
                name="nome_cad"
                required={true}  
                type="text"
              />
            </div>
          </div>
          <div className="input">
            <img
              className="form-label"
              src="../Cadastro/imagens/Group Message.png"
            />
            <div className="input-email">
              <label htmlFor="email_cad">Seu e-mail</label>
              <input
                id="email_cad"
                name="email_cad"
                required={true}
                type="email"
              />
            </div>
          </div>
          <div className="input">
            <img className="form-label" src="../Cadastro/imagens/Lock.png" />
            <div className="input-senha">
              <label htmlFor="senha_cad">Sua senha</label>
              <input
                id="senha_cad"
                name="senha_cad"
                required={true}
                type="password"
              />
            </div>
          </div>
          <div className="input">
            <img className="form-label" src="../Cadastro/imagens/Lock.png" />
            <div className="input-conf-senha">
              <label htmlFor="confirma-senha">Confirmar Senha</label>
              <input
                id="confirma-senha"
                name="confirma-senha"
                required={true}
                type="password"
              />
            </div>
          </div>
          <div className="input">
            <img
              className="form-label"
              src="../Cadastro/imagens/icon User.png"
            />
            <div className="input-user">
              <label htmlFor="user">Usuario</label>
              <input id="user" name="user" required={true} type="text" />
            </div>
          </div>
          <div className="input">
            <img
              className="form-label"
              src="../Cadastro/imagens/icon User.png"
            />
            <div className="input-foto">
              <label htmlFor="foto">Foto</label>
              <input id="foto" name="foto" required={true} type="file" />
            </div>
          </div>
          <div className="input-submit">
            <input type="submit" defaultValue="Cadastrar" />
          </div>
          {/* <hr class="linha"> */}
          <div className="alinhamento">
            <p className="link">
              Já tem conta?
              <a href="#paralogin">
                {" "}
                <br />
                Cadastre-se agora!{" "}
              </a>
            </p>
          </div>
        </form>
        <div className="contato">
          <div className="imagem">
            <img src="../Cadastro/imagens/logo.png" />
            {/* <a href="contato@blamovi.com">contato@blamovi.com</a> */}
            <img src="../Cadastro/imagens/redeSocial/faceBranco.svg" alt="" />
            <img src="../Cadastro/imagens/redeSocial/InstaBranco.svg" alt="" />
            <img
              src="../Cadastro/imagens/redeSocial/twitterBranco.svg"
              alt=""
            />
            <img src="../Cadastro/imagens/redeSocial/WhatsBranco.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<footer>
    <div>
      <ul>
        <li><a href="#" title="Home">Favoritos</a></li>
        <li><a href="#" title="login">Home</a></li>
        <li><a href="#" title="pesquisar">Pesquisar</a></li>
        <li><a href="#" title="login">Login</a></li>
        <li><a href="#" title="noticias">Noticias</a></li>
        <li><a href="#" title="informações">Informações</a></li>
        <li><a href="#" title="Fale Conosco">Fale Conosco</a></li>

      </ul>

    </div>

  </footer>

        </>
    )
}

export default Cadastro