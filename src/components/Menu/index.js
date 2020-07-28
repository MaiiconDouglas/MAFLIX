import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import ButtonLink from '../components/ButtonLink';

function Menu() {
  return(
    <nav className="Menu">
    <a href="/">
    <img className="Logo" src={Logo} alt="MaFlix Logo"/>
    </a>

    <ButtonLink className="ButtonLink" href="/">
      Novo Vídeo
    </ButtonLink>

    </nav>
  );  
}

//exportar pra importar em outros lugares
export default Menu;