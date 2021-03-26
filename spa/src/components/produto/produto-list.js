import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Menu from '../menu/menu';


const ProdutoList = () => {
    const [produtos, setProdutos] = useState({content: [], pageable: {pageNumber: 0}, totalPages: 0});
    const [termoDeBusca, setTermoDeBusca] = useState("");
    const [páginaRequerida, setPáginaRequerida] = useState(0);

    const doGetProdutos = async (páginaRequerida) => {
        const response = await axios.get(`/api/produtos?termo=${termoDeBusca}&page=${páginaRequerida}`);
        setPáginaRequerida(páginaRequerida);
        setProdutos(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        doGetProdutos(0);
    }, [])

    const doExcluirProdutos = async (id) => {
        const response = await axios.delete(`/api/produtos/${id}`);
        doGetProdutos(páginaRequerida);
    }


    const handleExcluir = (id) => {
        if (window.confirm("Deseja excluir?")) {
            doExcluirProdutos(id);
        }
    }

    const handleSearchInputChange = (event) => {
        setTermoDeBusca(event.target.value);
    }

    const handleSearch = (event) => {        
        console.log("Pesquisando por: " + termoDeBusca);
        doGetProdutos(0);
    }


    const tableData = produtos.content.map(row => {
        return <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.descricao}</td>
            <td>{row.lancadoEm}</td>
            <td>{row.precoUnitario}</td>
            <td>
                <button onClick={() => handleExcluir(row.id)}>Excluir</button>
                <Link to={`/produtos/editar/${row.id}`}>
                    <button>Editar</button>
                </Link>
            </td>
        </tr>;
    })
    
    useEffect(() => {
        console.log("executando doGetProdutos " + páginaRequerida);
        doGetProdutos(páginaRequerida);        
    }, [páginaRequerida]);

    const requestPage = (requestedPage) => {
        console.log(`requestedPage=${requestedPage}   totalPages=${produtos.totalPages}   páginaRequerida=${páginaRequerida}`);
        if (requestedPage <= 0) {
            requestedPage = 0;
        }
        if (requestedPage >= produtos.totalPages) {
            requestedPage = produtos.totalPages-1;
        }
        console.log(requestedPage);
        setPáginaRequerida(requestedPage);
    }


    return (
        <div>
            <Menu></Menu>
            <h2>Listagem de Produtos</h2>
            <hr></hr>

            <Link to="/produtos/novo">
                <button>Novo Produto</button>
            </Link>
            <div>                
                <input type="text" name="search" onChange={handleSearchInputChange}></input>
                <button onClick={handleSearch}>Pesquisar</button>
            </div>
            <div>
                <button onClick={() => requestPage(produtos.pageable.pageNumber-1)}>{'<'}</button>
                Página {produtos.pageable.pageNumber+1} de {produtos.totalPages}
                <button onClick={() => requestPage(produtos.pageable.pageNumber+1)}>{'>'}</button>
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
