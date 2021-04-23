import React, { useState } from 'react';
import Menu from '../menu/menu';
import AsyncSelect from 'react-select/async';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import axios from 'axios';

const TesteTypeahead = () => {
    /*
    const [coresDisponíveis, setCoresDisponívels] = useState([]);


    const [coresPesquisadas, setCoresPesquisadas] = useState([]);
    //const [coresPesquisadas, setCoresPesquisadas] = useState([]);
    const [corSelecionada, setCorSelecionada] = useState([]);

    const tableData = coresDisponíveis.map(row => {
        return <tr key={row.id}>
            <td>{row.nome}</td>
            <td>
                <button onClick={() => handleRemoveClick(row.id)}>X</button>
            </td>
        </tr>;
    })

    const doSearchCores = async (termoDePesquisa) => {
        setIsLoading(true);
        const response = await axios.get(`/api/cores?termo=${termoDePesquisa}`);
        setCoresPesquisadas(response.data.content);
        setIsLoading(false);
    }

    const handleRemoveClick = (id) => {
        const novoCoresDisponiveis = coresDisponíveis.filter( (c) => c.id !== id );
        setCoresDisponívels(novoCoresDisponiveis);
    }


    const handleAddClick = () => {
        const novasCoresDisponíveis = [...coresDisponíveis, corSelecionada[0]];
        console.log(novasCoresDisponíveis);
        setCoresDisponívels(novasCoresDisponíveis);
    }

    return (
        <div>
            <Menu></Menu>
            <h2>
                Teste Typeahead
            </h2>
            <hr></hr>
            <div>
                <AsyncTypeahead
                    id="selecionarCores"
                    isLoading={isLoading}
                    filterBy={() => true}   
                    labelKey="nome"
                    onSearch={doSearchCores}
                    options={coresPesquisadas}
                    selected={corSelecionada}
                    onChange={setCorSelecionada}>                    
                </AsyncTypeahead>
            </div>
            <button onClick={handleAddClick}>+</button>
            <table border="1">
                <thead>
                    <tr>
                        <td>Descrição</td>
                        <td>Ações</td>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div>
    )
    */
   return (<div></div>);
}

export default TesteTypeahead;