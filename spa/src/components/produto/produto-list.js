import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Menu from '../menu/menu';


const ProdutoList = () => {
    const [produtos, setProdutos] = useState([]);

    const doGetProdutos = async () => {
        const response = await axios.get("/api/produtos");
        setProdutos(response.data);
    }

    useEffect(() => {
        doGetProdutos();
    }, [])

    const doExcluirProdutos = async (id) => {
        const response = await axios.delete(`/api/produtos/${id}`);
        doGetProdutos();
    }


    const handleExcluir = (id) => {
        if (window.confirm("Deseja excluir?")) {
            doExcluirProdutos(id);
        }
    }

    const tableData = produtos.map(row => {
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


    return (
        <div>
            <Menu></Menu>
            <h2>Listagem de Produtos</h2>
            <hr></hr>

            <Link to="/produtos/novo">
                <button>Novo Produto</button>
            </Link>

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
