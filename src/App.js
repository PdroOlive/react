import React from "react";

class App extends React.Component 
{

  constructor()
  {
    super()
    this.nome = "Pedro Henrique"
  }

  render()
  {
    return (
      <div>
        <h1>Hello World!!</h1>
      
        <h2>{this.nome}</h2>
      </div>
    );
  }

}


export default App;
