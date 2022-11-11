import React from "react";
import './style.scss'

const Header = () => {
    return (
        <div className="header-content">
            <img src={require('../../img/logo.png')} alt="" />

            <ul>
                <li>Masculino</li>
                <li>Feminino</li>
                <li>Infantil</li>
                <li>Lançamentos</li>
            </ul>

            <div className="container-input-cart">

                <div className="container-input">
                    <input type="text" />
                    <span class="material-symbols-outlined">
                        search
                    </span>
                    <p>Buscar</p>
                </div>

                <div className="container-cart">
                    <span class="material-symbols-outlined">
                        shopping_cart
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Header;