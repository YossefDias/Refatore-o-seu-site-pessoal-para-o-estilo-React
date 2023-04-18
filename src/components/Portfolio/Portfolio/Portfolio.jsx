import React from "react";
import "./Portfolio.css";
import CapaAcademy from "../../../assets/avatar.jpg"

function Portfolio() {

      return (
        <>
        <main>
<div class="galeria">
        <div class="galeria1">
            <a href="https://academy.comeialabs.com.br/" target="_blank">
            <img src={CapaAcademy} alt="Capa Comeia Academy" width="150px" height="200px"/>
                
                <p>Portfólio 1</p>
            </a>
        </div>
            <div class="galeria2">
                <a href="https://academy.comeialabs.com.br/" target="_blank">
                 <img src={CapaAcademy} alt="Capa Comeia Academy" width="150px" height="200px"/>
                    
                    <p>Portfólio 2</p>
                </a>
            </div>
                <div class="galeria3">
                    <a href="https://academy.comeialabs.com.br/" target="_blank">
                    <img src={CapaAcademy} alt="Capa Comeia Academy" width="150px" height="200px"/>
                        
                        <p>Portfólio 3</p>
                    </a>
                </div>
            
            
        
    </div>
    </main>
    </>
    )
}

export default Portfolio