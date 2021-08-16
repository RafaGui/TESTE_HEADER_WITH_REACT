import React from 'react'
import "../App.css";
import "../func_comps/func_menu"
import Menu from './menu'

export default function header() {
    return (
        <>  
            <header class="top">
                <i onclick="open_menu()" class="material-icons menu_button">menu</i>
                <div class="pt1">
                <a href="#"><img src="../imagens/Logo.png" alt="Logo" title="logo"></img></a>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Icons</a></li>
                    <li><a href="#">Stickers</a></li>
                    <li><a href="#">Interface icons</a></li>
                    <li><a href="#">More</a></li>
                </ul>
                </div>
                <div class="pt2">
                    <ul>
                        <li class="material-icons"><a href="#">outlined_flag</a></li>
                        <li><a href="#">Princing</a></li>
                        <li><a href="#"><strong>Login</strong></a></li>
                        <button>Register</button>
                    </ul>
                </div>
            </header>

            <nav class="search">
                <div class="sch1">
                    <input type="text" placeholder="Pesquisar"></input>
                    <button class="sch1_button material-icons">search</button>
                </div>
                <div class="sch2">
                    <ul>
                        <li class="material-icons"><a href="#">brightness_4</a></li>
                        <li class="material-icons"><a href="#">import_contacts</a></li>
                        <li class="material-icons"><a href="#">my_location</a></li>
                        <li class="material-icons"><a href="#">beenhere</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
};