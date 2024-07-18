import React from "react";
import "./style-article.css";



export function Article({title, provider, image})
{
    return (
        <article id="article-group">
            <div id="div-image">
                <img src={image} alt={title} />
            </div>
            <section id="section-texts">
                <h2>{title}</h2>
                <span>{provider}</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt necessitatibus exercitationem officiis eveniet qui aspernatur quasi repellat iure cupiditate ut, expedita neque veniam rerum nihil sed nostrum voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis co</p>
            </section>
        </article>
    )
}

