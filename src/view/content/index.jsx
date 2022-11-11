import React, { useState } from "react";
import './style.scss'

const Content = ({ ...props }) => {
    const [imagem, setImagem] = useState(props.img1)

    return (
        <div className="content-container" style={{ transform: props.scale ? "scale(-1,1)" : "scale(1,1)" }}>

            <div className="content-info" style={{ transform: props.scale ? "scaleX(1)" : "scaleX(-1)" }}>
                <div className="content-titulo" style={{ transform: props.scale ? "scaleX(-1)" : "scaleX(-1)" }}>{props.titulo}</div>
                <div className="content-desc" style={{ transform: props.scale ? "scaleX(-1)" : "scaleX(-1)" }}>
                    {props.desc}
                </div>
                <div className="content-botao">
                    <div>
                        Shop
                    </div>
                </div>
            </div>

            <div className="content-product">
                <img className="tenis" src={imagem} alt="" />
                <img className="background-logo" src={require('../../img/logo-white.png')} alt="" style={{ transform: props.scale ? "scaleX(-1)" : "scaleX(1)" }} />
                <div className="nike" style={{ transform: props.scale ? "scaleX(-1)" : "scaleX(1)" }}>NIKE</div>
                <div className="content-tenis">
                    <img src={props.img2} onMouseEnter={() => setImagem(props.img2)} alt="" />
                    <img src={props.img3} onMouseEnter={() => setImagem(props.img3)} alt="" />
                    <img src={props.img1} onMouseEnter={() => setImagem(props.img1)} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Content;