import React from "react";
import {Navbar} from "./components/navbar/navbar";
import {Article} from "./components/article/article";
import imageOne from "./components/article/image001.png"
import imageTwo from "./components/article/image002.png"
import imageThree from "./components/article/image003.png"

import "./app.css";
// import { Counter } from "./components/counter/counter";
// import { Counter } from "./components/counter/counter";

export class App extends React.Component 
{
  render()
  {
    return (
      <>
        <Navbar />
        {/* <Counter /> */}
        <section id="articles-list">
            <Article 
            title="Designing Dashboards" 
            provider="NASA" 
            image={imageOne}
            />

            <Article 
            title="Vibrant Portraits of 2020" provider="SpaceNews" 
            image={imageTwo} 
            />

            <Article 
            title="36 Days of Malayalam type" provider="Spaceflight Now" 
            image={imageThree} 
            />

            <Article 
            title="Designing Dashboards" 
            provider="NASA" 
            image={imageOne}
            />
          
        </section>
        
      </>
    );
  }

}


