import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Menu from '../menu/menu';
import { Button, Modal } from 'react-bootstrap';


const ProdutoList = (props) => {
    const [produtos, setProdutos] = useState({ content: [], pageable: { pageNumber: 0 }, totalPages: 0 });
    const { statusPesquisa, setStatusPesquisa } = props;
    const [idToDelete, setIdToDelete] = useState(null);


    const handleAbortConfirmDelete = () => {
        setIdToDelete(null);
    }

    const handleConfirmDelete = () => {
        doExcluirProdutos(idToDelete);
        setIdToDelete(null);
    }

    const renderConfirmDelete = () => {
        return (
            <Modal show={idToDelete !== null} onHide={handleAbortConfirmDelete} >
                <Modal.Header closeButton>
                    <Modal.Title>Confirmação de exclusão</Modal.Title>
                </Modal.Header>
                <Modal.Body>Deseja realmente excluir o registro?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleAbortConfirmDelete}>
                        Abortar
              </Button>
                    <Button variant="primary" onClick={handleConfirmDelete}>
                        Excluir
              </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const doGetProdutos = async (páginaRequerida, termoDePesquisa) => {
        const response = await axios.get(`/api/produtos?termo=${termoDePesquisa}&page=${páginaRequerida}`);

        const novoStatusPesquisa = { ...statusPesquisa, páginaAtual: páginaRequerida };
        setStatusPesquisa(novoStatusPesquisa);

        setProdutos(response.data);
    }

    useEffect(() => {
        doGetProdutos(statusPesquisa.páginaAtual, statusPesquisa.termoDePesquisa);
    }, [])

    const doExcluirProdutos = async (id) => {
        const response = await axios.delete(`/api/produtos/${id}`);
        if (produtos.content.length === 1) {
            doGetProdutos(statusPesquisa.páginaAtual - 1, statusPesquisa.termoDePesquisa);
        } else {
            doGetProdutos(statusPesquisa.páginaAtual, statusPesquisa.termoDePesquisa);
        }
    }

    const handleExcluir = (id) => {
        // if (window.confirm("Deseja excluir?")) {
        //     doExcluirProdutos(id);
        // }
        setIdToDelete(id);
    }

    const handleSearchInputChange = (event) => {
        const novoStatusPesquisa = { ...statusPesquisa, termoDePesquisa: event.target.value };
        setStatusPesquisa(novoStatusPesquisa);
    }

    const handleSearch = (event) => {
        doGetProdutos(0, statusPesquisa.termoDePesquisa);
    }


    const tableData = produtos.content.map(
        row => {
            return <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.descricao}</td>
                <td>{row.lancadoEm}</td>
                <td>{row.precoUnitario}</td>
                <td>
                    <button onClick={() => handleExcluir(row.id)}>Excluir</button>
                    <Link to={`/produtos2/editar/${row.id}`}>
                        <button>Editar</button>
                    </Link>
                </td>
            </tr>;
        })

    const requestPage = (requestedPage) => {
        if (requestedPage <= 0) {
            requestedPage = 0;
        }
        if (requestedPage >= produtos.totalPages) {
            requestedPage = produtos.totalPages - 1;
        }
        doGetProdutos(requestedPage, statusPesquisa.termoDePesquisa);
    }


    return (
        <div>
            <Menu></Menu>
            {renderConfirmDelete()}
            <h2>Listagem de Produtos</h2>
            <hr></hr>

            <Link to="/produtos2/novo">
                <button>Novo Produto</button>
            </Link>
            <div>
                <input type="text" name="search" value={statusPesquisa.termoDePesquisa} onChange={handleSearchInputChange}></input>
                <button onClick={handleSearch}>Pesquisar</button>
            </div>
            <div>
                <button onClick={() => requestPage(produtos.pageable.pageNumber - 1)}>{'<'}</button>
                Página {produtos.totalPages > 0 ? produtos.pageable.pageNumber + 1 : 0} de {produtos.totalPages}
                <button onClick={() => requestPage(produtos.pageable.pageNumber + 1)}>{'>'}</button>
            </div>

            <table border="1">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Descrição</td>
                        <td>Lançado em</td>
                        <td>Preço unitário</td>
                        <td>Ações</td>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div>
    )
}

export default ProdutoList;
