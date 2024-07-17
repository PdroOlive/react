import React from "react";

export class Counter extends React.Component
{
    constructor()
    {
        super()
        this.state = { contador: 0, name: "", password: ""};
    }
    render()
    {
        return (
            <section style={{margin: "5rem auto"}}>
                <h1>{this.state.contador}</h1>

                <div>
                    <button onClick={() => 
                        {
                            this.setState({contador: this.state.contador -1})

                        }}>Diminuir</button>

                    <button onClick={() => 
                    {
                        this.setState({contador: this.state.contador +1})
                    }}>Aumentar</button>
                </div>

                <form style={{marginTop: "3rem"}}>
                    <input 
                    type="text" 
                    placeholder="Name" 
                    onChange=
                    {(event) =>
                        {
                            let nameUser = this.setState({name: event.target.value});
                            console.log(this.state.name);
                        }
                    } />



                    <input 
                    type="password" 
                    placeholder="Senha" 
                    onChange=
                    {(event) =>
                        {
                            this.setState({password: event.target.value})
                            console.log(this.state.password)
                        }
                    }/>
                    <button>Enviar</button>
                </form>
            </section>
        );
    }
}