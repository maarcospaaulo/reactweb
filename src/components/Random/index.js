import React, { useState } from 'react'

import './style.css'

function Random() {
    
    const [randomNumber, setRandomNumber ] = useState(0);

    function generateNumber() {
        const newNumber = Math.floor(Math.random() * (100-1) + 1);
        setRandomNumber(newNumber);
    }

    return (
        <div className="central-content">
            <h2>Numero Aleatório</h2>
            <h1>{randomNumber}</h1>
            <div className="area-button">
                <p>
                    Click para gerar um numero:
                </p>
                <button class="btn" onClick={generateNumber}>Gerar Numero</button>
            </div>
        </div>
    );
}

export default Random;