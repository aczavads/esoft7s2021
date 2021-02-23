import React, {useEffect, useState} from 'react';


const ContadorComponent = (props) => {
    // var valorAtual = props.valorMinimo;
    const [valorAtual, setValorAtual] = useState(props.valorMinimo);

    const incrementar = () => {
        if(valorAtual >= props.valorMaximo){
            alert(`Valor máximo excedido! [${props.valorMaximo}]`);
        }else{
            setValorAtual(valorAtual +1);
        }
    }
    const decrementar = () => {
        if(valorAtual <= props.valorMinimo){
            alert(`Valor mínimo excedido! [${props.valorMinimo}]`);
        }else{
            setValorAtual(valorAtual -1);
        }

    }


    return(
       <div>
            Contador de {props.valorMinimo} até {props.valorMaximo}. Atual={valorAtual}
            <button onClick = {decrementar}>-</button>
            <button onClick = {incrementar}>+</button>
       </div>
    );
}

export default ContadorComponent;