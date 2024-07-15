import React from "react";

class App extends React.Component 
{
  render()
  {
    return (
      <section id="section-navbar">

        <div id="image-title-navbar">
          <img id="image-navbar" src="saturn-icon.png" alt="Icone do planeta Saturno"/>
          <h2 id="title-navbar">Space Flight News</h2>
        </div>

        <ul id="links-navbar">
          <li>Home</li>
          <li>Trending</li>
          <li>Categories</li>
          <li>About us</li>
        </ul>
      </section>
    );
  }

}


export default App;
