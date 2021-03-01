import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const CorList = () => {
    const [cores, setCores] = useState([]);

    const doGetCores = async () => {
        const response = await axios.get("/api/cores");
        setCores(response.data);
    }

    useEffect(() => {
        doGetCores();
    }, [])

    const doExcluirCor = async (id) => {
        const response = await axios.delete(`/api/cores/${id}`);
        doGetCores();
    }


    const handleExcluir = (id) => {
        if (window.confirm("Deseja excluir?")) {
            doExcluirCor(id);
        }
    }

    const tableData = cores.map(row => {
        return <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.sigla}</td>
            <td>{row.nome}</td>
            <td>
                <button onClick={() => handleExcluir(row.id)}>Excluir</button>
                <Link to={`/cores/editar/${row.id}`}>
                    <button>Editar</button>
                </Link>
            </td>
        </tr>;
    })


    return (
        <div>
            <h2>Listagem de Cores</h2>
            <hr></hr>

            <Link to="/cores/nova">
                <button>Nova Cor</button>
            </Link>

            <table border="1">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>sigla</td>
                        <td>nome</td>
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

export default CorList;


/*
const cores = [
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
