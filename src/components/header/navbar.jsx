import React from "react"
import logoNav from "../../saturn-icon.png"
import styles from "./styles/navbar.module.scss"



export const Navbar = () =>
{
    return(
        <nav id={styles["nav-field"]}>
            <section>
                <img src={logoNav} alt="" />
                <h1>Space Flight News</h1>
            </section>

            <ul>
                <li>Home</li>
                <li>Trending</li>
                <li>Categories</li>
                <li>About us</li>
            </ul>
        </nav>
    )
}