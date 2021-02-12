import React, {useState, useEffect} from 'react';


const ContadorComponent = (props) => {
    //var valorAtual = props.valorMinimo;
    const [valorAtual, setValorAtual] = useState(props.valorMinimo);

    const incrementar = () => {     
        if (valorAtual >= props.valorMaximo) {
            alert(`Valor máximo atingido! [${props.valorMaximo}]`)
        } else {
            setValorAtual(valorAtual+1);
        }
    }
    const decrementar = () => { 
        if (valorAtual <= props.valorMinimo) {
            alert(`Valor mínimo atingido! [${props.valorMinimo}]`)
        } else {
            setValorAtual(valorAtual-1);
        }
    }


    return (
        <div>
            Contador de {props.valorMinimo} até {props.valorMaximo}. Atual={valorAtual}
            <button onClick={incrementar}>+</button>
            <button onClick={decrementar}>-</button>
        </div>
    );
}

export default ContadorComponent;