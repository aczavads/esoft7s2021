import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';



const ProdutoEdit = () => {
    const history = useHistory();
    const { idParaEditar } = useParams();
    const emModoDeEdição = idParaEditar !== undefined;
    const [produto, setProduto] = useState({ descricao: "", lancadoEm: new Date(), precoUnitario: 0.00, corPadraoVO: {id:"", nome: ""}} );
    const [searchedCores, setSearchedCores] = useState([]);
    const [selectedCor, setSelectedCor] = useState([{id:"", nome: ""}]);
    const [isLoading, setIsLoading] = useState(false);

    console.log(idParaEditar);

    const doGetById = async () => {
        const response = await axios.get(`/api/produtos/${idParaEditar}`, produto);
        setProduto(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        if (emModoDeEdição) {
            doGetById();
        }
    }, []);

    const doPut = async () => {
        const response = await axios.put(`/api/produtos/${idParaEditar}`, produto);
        history.push("/produtos2");
    }

    const doPost = async () => {        
        const produtoComCor = { ...produto, corPadrao: selectedCor[0] };

        const response = await axios.post("/api/produtos", produtoComCor);
        alert("Novo produto criado! Id=" + response.data);
        history.push("/produtos2");
    }

    const handleSubmit = (event) => {
        console.log("handleSubmit... ");
        event.preventDefault();
        if (emModoDeEdição) {
            console.log("Put...");
            doPut();
        } else {
            console.log("Post...");
            doPost();
        }
    }

    const handleChange = (event) => {
        //console.log(event.target.name + "=" + event.target.value);
        const novoProduto = { ...produto, [event.target.name]: event.target.value };
        //console.log(novaCor);
        setProduto(novoProduto);
    }

    const doSearchCores = async (termoDePesquisa) => {
        setIsLoading(true);
        const response = await axios.get(`/api/cores?termo=${termoDePesquisa}`);
        setSearchedCores(response.data.content);
        setIsLoading(false);
    }

    /*
    const setSelectedCor = (cor) => {
        console.log("setSelectedCor");
        const novoProduto = { ...produto, corPadrao: cor[0] };
        console.log(novoProduto);        
        setProduto(novoProduto);
    }
    */


    return (
        <div>
            <h2>Edição de Produto {emModoDeEdição ? "(editando)" : "(incluindo)"}</h2>
            <hr></hr>
            <form onSubmit={handleSubmit}>
                <div>Descrição:
                    <input type="text" name="descricao" onChange={handleChange} value={produto.descricao}></input>
                </div>
                <div>Lançado em:
                    <input type="date" name="lancadoEm" onChange={handleChange} value={produto.lancadoEm}></input>
                </div>
                <div>Preço unitário:
                    <input type="text" name="precoUnitario" onChange={handleChange} value={produto.precoUnitario}></input>
                </div>
                <div>
                    <AsyncTypeahead
                        id="id"
                        filterBy={() => true}   
                        isLoading={isLoading}
                        labelKey={(cor) => `${cor.nome} (${cor.id})`}
                        onSearch={doSearchCores}
                        options={searchedCores}
                        onChange={setSelectedCor}                    
                        selected={selectedCor}
                        defaultSelected={produto.corPadraoVO}
                    />
                </div>
                {produto.corPadraoVO.nome}

                <Button type="submit">Enviar</Button>
                <Link to="/produtos2">
                    Voltar
                </Link>
            </form>
        </div>
    )
}

export default ProdutoEdit;