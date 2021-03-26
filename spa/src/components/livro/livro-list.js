import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Menu from '../menu/menu';

const LivroList = () => {
    const history = useHistory();
    const [páginaAtual, setPáginaAtual] = useState(0);


    const handleClickNextPage = () => {
        setPáginaAtual(páginaAtual+1);
    }
    const handleClickNovo = () => {
        history.push("/livros/novo")
    }
    return (
        <div>
            <Menu></Menu>
            <div>Livro List. Página atual: {páginaAtual}</div>
            <button onClick={handleClickNextPage}>+</button>
            <button onClick={handleClickNovo}>Novo Livro</button>
        </div>
    )
}

export default LivroList;