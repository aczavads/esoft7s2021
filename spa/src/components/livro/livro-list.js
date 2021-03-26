import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Menu from '../menu/menu';

const LivroList = (props) => {
    const history = useHistory();
    //const [páginaAtual, setPáginaAtual] = useState(0);
    const { statusPesquisa, setStatusPesquisa } = props;

    const handleClickNextPage = () => {
        const novoStatusPesquisa = {...statusPesquisa, páginaAtual: statusPesquisa.páginaAtual+1};
        setStatusPesquisa(novoStatusPesquisa);
    }

    const handleClickNovo = () => {
        history.push("/livros/novo")
    }

    return (
        <div>
            <Menu></Menu>
            <div>Livro List. Página atual: {statusPesquisa.páginaAtual} Termo de pesquisa: [{statusPesquisa.termoDePesquisa}]</div>
            <button onClick={handleClickNextPage}>+</button>
            <button onClick={handleClickNovo}>Novo Livro</button>
        </div>
    )
}

export default LivroList;