import React from "react";
import { Header } from "./components/header/header.jsx";
import "./global.css"
import { Main } from "./components/main/main.jsx";


// import { Counter } from "./components/counter/counter";
// import { Counter } from "./components/counter/counter";

export class App extends React.Component 
{
  render()
  {
    return (
        <>
            <Header/>
            <Main />
        </>
    );
  }

}


