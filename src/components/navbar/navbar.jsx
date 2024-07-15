import React from "react";
import logoNav from "../../saturn-icon.png";
import "./styles.css";


export class Navbar extends React.Component
{
    render()
    {
        return (
        <header>
            <nav id="nav-navbar">
                <div id="image-title-navbar">
                    <img id="image-navbar" src={logoNav} alt="Icone do planeta Saturno"/>
                    <h2 id="title-navbar">Space Flight News</h2>
                </div>
                <ul id="links-navbar">
                    <li>Home</li>
                    <li>Trending</li>
                    <li>Categories</li>
                    <li>About us</li>
                </ul>
            </nav>
      </header>
        )
    }
}

