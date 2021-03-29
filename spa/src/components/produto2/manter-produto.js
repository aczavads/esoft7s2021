import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import ProdutoList from './produto-list';
import ProdutoEdit from './produto-edit';

const ManterProduto = () => {
    const [statusPesquisa, setStatusPesquisa] = useState({páginaAtual: 0, termoDePesquisa : "teste"});

    useEffect(() => {
        console.log("<<MANTER PRODUT>> Página atual alterada! " + statusPesquisa.páginaAtual);
    }, [statusPesquisa]);

    return (
        <div>
            <Switch>
                <Route exact path="/produtos2">
                    <ProdutoList statusPesquisa={statusPesquisa} setStatusPesquisa={setStatusPesquisa}></ProdutoList>
                </Route>
                <Route path="/produtos2/novo" component={ProdutoEdit}></Route>
                <Route path="/produtos2/editar/:idParaEditar" component={ProdutoEdit}></Route>
            </Switch>            
        </div>
    )
}

export default ManterProduto;