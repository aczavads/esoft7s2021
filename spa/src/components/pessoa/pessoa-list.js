import React from 'react';

const PessoaList = (props) => {
    const { paginationControl, setPaginationControl } = props;


    const handleClick = () => {
        const newPaginationControl = { ...paginationControl, currentPage: paginationControl.currentPage + 1 };
        setPaginationControl(newPaginationControl);
    }

    return (
        <div onClick={handleClick}>
            PessoaList
        </div>
    );
}

export default PessoaList;