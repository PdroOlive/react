import React from "react";
import "./style-article.css";



export class Article extends React.Component
{
    render()
    {
        return (
            <article id="article-group">
                <div id="div-image">
                <img src={this.props.image} alt={this.props.title} />
                </div>
                <section id="section-texts">
                    <h2>{this.props.title}</h2>
                    <span>{this.props.provider}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt necessitatibus exercitationem officiis eveniet qui aspernatur quasi repellat iure cupiditate ut, expedita neque veniam rerum nihil sed nostrum voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis co</p>
                </section>
            </article>
        )
    }
}

