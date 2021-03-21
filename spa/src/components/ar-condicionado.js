import React, {useState} from 'react';

const ArCondicionado = () => {
    const [temperatura, setTemperatura] = useState(23);
    const [ligado, setLigado] = useState(true);

    const elevarTemperatura = () => setTemperatura(temperatura+1);
    const diminuirTemperatura = () => setTemperatura(temperatura-1);
    const onOff = () => setLigado(!ligado);
    return (
        <div>
            <hr></hr>
            Ar-condicionado [{ligado === true ? 'Ligado' : 'Desligado'}], termostato em [{temperatura}]ºC
            <button onClick={elevarTemperatura}>Temperatura + </button>
            <button onClick={diminuirTemperatura}>Temperatura - </button>
            <button onClick={onOff}>{ligado === true ? 'Off' : 'On'}</button>
            <hr></hr>
        </div>
    )
}

export default ArCondicionado;