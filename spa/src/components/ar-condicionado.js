import React, { useState } from 'react';


const ArCondicionado = () => {
    const [temperatura, setTemperatura] = useState(23);
    const [ligado, setLigado] = useState(false);

    const elevarTemperatura = () => setTemperatura(temperatura+1);
    const reduzirTemperatura = () => setTemperatura(temperatura-1);
    const ligarDesligar = () => setLigado(!ligado);
    const labelLigadoDesligado = () => ligado === true ? 'Ligado' : 'Desligado'

    return (
        <div>
            <hr></hr>
            Ar-condicionado [{labelLigadoDesligado()}], termostato em [{temperatura}ºC]. 
            <button onClick={elevarTemperatura}>Temperatura +</button>
            <button onClick={reduzirTemperatura}>Temperatura -</button>
            <button onClick={ligarDesligar}>{ligado === true ? 'Off' : 'On'}</button>
            <hr></hr>
        </div>
    )
}

export default ArCondicionado;