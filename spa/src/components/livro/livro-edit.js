import React from 'react';
import { useHistory, useParams } from 'react-router';
import Menu from '../menu/menu';

const LivroEdit = () => {
    const history = useHistory();
    const { idParaEditar } = useParams();

    const handleClickVoltar = () => {
        history.push("/livros");
    }

    return (
        <div>
            <Menu></Menu>
            <div>Livro Edit {idParaEditar ? `(Editando id ${idParaEditar})` : "(Inserindo)"} </div>
            <button onClick={handleClickVoltar}>Voltar</button>
        </div>
    )
}

export default LivroEdit;