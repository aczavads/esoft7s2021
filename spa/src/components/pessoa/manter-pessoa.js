import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
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

    const componente = () => {
        const pathname = history.location.pathname;
        if (pathname === "/pessoas") {
            return <PessoaList paginationControl={paginationControl} setPaginationControl={setPaginationControl}></PessoaList>;
        } else if (pathname === "/pessoas/nova" || pathname.startsWith("/pessoas/editar/")) {
            return <PessoaEdit></PessoaEdit>;
        }
    }

    return (
        <div>
            {componente()}
        </div>
    )
}

export default ManterPessoa;

