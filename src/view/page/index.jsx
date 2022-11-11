import React from "react";
import Header from "../header";
import "./style.scss"

const Page = () => {
    return (
        <div className="body-conteiner">

            <Header />

            <div className="titulo-conteiner">
                <div className="titulo">Skate</div>
                <img src={require('../../img/kindpng.png')} alt="" />
                <div className="titulo">Board</div>
            </div>

            <div className="container-center">
                <div className="container-people-center">
                    <img src={require("../../img/people.png")} alt="" />
                </div>
            </div>
            
            <div className="bar-container">
                <div className="quadrado"></div>
                <div className="triangulo"></div>
            </div>
        </div>
    )
}

export default Page;