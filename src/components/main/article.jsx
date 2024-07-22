import styles from "./styles/article.module.scss";

export const Article = ({title, image, provider}) =>
{
    return(
        <article id={styles["article-field"]}>
            <img src={image} alt="" />
            <section>
                <h2>{title}</h2>
                <span>{provider}</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci optio quaerat veritatis excepturi laborum nemo officia nesciunt, facere eveniet! Tenetur quasi natus ratione voluptate perspiciatis similique ea placeat vitae.</p>
            </section>
        </article>
    )
}