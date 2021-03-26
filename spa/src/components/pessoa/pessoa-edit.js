import React from 'react';
import { useParams } from 'react-router';


const PessoaEdit = () => {
    const { idParaEditar } = useParams();

    console.log(idParaEditar);

    return (
        <div>
            PessoaEdit
        </div>
    );
}

export default PessoaEdit;