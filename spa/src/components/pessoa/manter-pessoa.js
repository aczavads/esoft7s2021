import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import PessoaEdit from './pessoa-edit';
import PessoaList from './pessoa-list';

const ManterPessoa = () => {
    const history = useHistory();
    const [paginationControl, setPaginationControl] = useState({ currentPage: 0, searchTerm: "" });

    useEffect(() => {
        console.log("Pagination Control changed! ");
        console.log(paginationControl);
    }, [paginationControl]);

    console.log(history.location.pathname);

    return (
        <div>
            <Switch>
                <Route exact path="/pessoas">
                    <PessoaList paginationControl={paginationControl} setPaginationControl={setPaginationControl}></PessoaList>
                </Route>
                <Route path="/pessoas/nova" component={PessoaEdit}></Route>
                <Route path="/pessoas/editar/:idParaEditar" component={PessoaEdit}></Route>
            </Switch>            
        </div>
    )
}

export default ManterPessoa;

