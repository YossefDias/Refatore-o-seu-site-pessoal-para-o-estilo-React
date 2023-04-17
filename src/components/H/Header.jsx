import React from "react";
import Fotoperfil from '../../assets/avatar.jpg'

function Header () {

    return (
        <header>
        <img src= {Fotoperfil} alt="foto de jose com arara"/>
        <h1>José Dias</h1>
        <h3>Desenvolvedor de software</h3>
        </header>
    )
}

export default Header