import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router';
import Menu from '../menu/menu';
import LivroEdit from './livro-edit';
import LivroList from './livro-list';

const ManterLivro = () => {
    const location = useLocation();
    const [statusPesquisa, setStatusPesquisa] = useState({páginaAtual: 0, termoDePesquisa : "teste"});

    useEffect(() => {
        console.log("<<MANTER LIVRO>> Página atual alterada! " + statusPesquisa.páginaAtual);
    }, [statusPesquisa]);

    return (
        <div>
            <Switch>
                <Route exact path="/livros">
                    <LivroList statusPesquisa={statusPesquisa} setStatusPesquisa={setStatusPesquisa}></LivroList>
                </Route>
                <Route path="/livros/novo" component={LivroEdit}></Route>
                <Route path="/livros/editar/:idParaEditar" component={LivroEdit}></Route>
            </Switch>            
        </div>
    )
}

export default ManterLivro;