import React, { useState, useEffect } from 'react';


function ContadorBásico() {
    const [valor, setValor] = useState(0);

    const handleClick = () => {
        setValor(valor+1);        
    }

    useEffect(() => {
        console.log(valor);
    })

    return (
        <div>
            Contador Básico. Valor atual: {valor}
            <button onClick={handleClick}>+</button>
        </div>
    );
}

export default ContadorBásico;


