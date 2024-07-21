import React, { useState } from "react";

export const Counter = () =>
{
    const [cont, setCont] = useState(0);
    return (
        <section style={{margin: "5rem auto"}}>
            <h1>{cont}</h1>

            <div>
                <button 
                onClick={() =>
                {
                    setCont(cont - 1);

                }}>Diminuir</button>

                <button 
                onClick={() => 
                {
                    setCont(cont + 1);
                }}>Aumentar</button>
            </div>

        </section>
    );
}