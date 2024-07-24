import styles from "./styles/article.module.scss";

export const Article = ({title, provider, description, image, link}) =>
{
    return(
        <article id={styles["article-field"]}>
            <a href={link} target="blank"><img src={image} alt="" /></a>
            <section>
                <h2>{title}</h2>
                <a href={link} target="blank"><span>{provider}</span></a>
                <p>{description}</p>
            </section>
        </article>
    )
}