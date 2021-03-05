import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const MeusLivrosList = () => {
    const [meuslivros, setMeusLivros] = useState([]);

    const doGetMeusLivros = async () => {
        const response = await axios.get("/api/meuslivros");
        setMeusLivros(response.data);
    }

    useEffect(() => {
        doGetMeusLivros();
    }, [])

    const doExcluirMeusLivros = async (id) => {
        const response = await axios.delete(`/api/meuslivros/${id}`);
        doGetMeusLivros();
    }


    const handleExcluir = (id) => {
        if (window.confirm("Deseja excluir?")) {
            doExcluirMeusLivros(id);
        }
    }

    const tableData = meuslivros.map(row => {
        return <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.titulo}</td>
            <td>{row.autor}</td>
            <td>{row.quantidadeDePaginas}</td>
            <td>
                <button onClick={() => handleExcluir(row.id)}>Excluir</button>
                <Link to={`/meuslivros/editar/${row.id}`}>
                    <button>Editar</button>
                </Link>
            </td>
        </tr>;
    })


    return (
        <div>
            <h2>Listagem de MeusLivros</h2>
            <hr></hr>

            <Link to="/meuslivros/nova">
                <button>Novo MeuLivro</button>
            </Link>

            <table border="1">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Título</td>
                        <td>Autor</td>
                        <td>Páginas</td>
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

export default MeusLivrosList;


/*
const meuslivros = [
    { id: "1", sigla: "TST1", nome: "Teste Um" },
    { id: "2", sigla: "TST2", nome: "Teste Dois"},
    { id: "3", sigla: "TST3", nome: "Teste Três"},
]

const tableData = <React.Fragment>
    <tr>
        <td>1</td>
        <td>Teste</td>
        <td>Teste Um</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Teste</td>
        <td>Teste Dois</td>
    </tr>
</React.Fragment>;
*/
