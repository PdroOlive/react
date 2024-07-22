import { Article } from "./article.jsx"
import imageOne from "./assets/image001.png";
import imageTwo from "./assets/image002.png";
import imageThree from "./assets/image003.png";
import styles from "./styles/main.module.scss"



export const Main = () => 
{
    return(
        <main id={styles["main"]}>
            <Article 
            title={"Designing Dashboards"}
            provider={"NASA"} 
            image={imageOne}/>

            <Article title={"Vibrant Portraits of 2020"} 
            provider={"SpaceNews"} 
            image={imageTwo}/>

            <Article title={"36 Days of Malayalam type"}
            provider={"Spaceflight Now"} 
            image={imageThree}/>

            <Article 
            title={"Designing Dashboards"}
            provider={"NASA"} 
            image={imageOne}/>
        </main>
    )
}