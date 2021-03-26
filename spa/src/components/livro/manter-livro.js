import React from 'react';
import { useLocation } from 'react-router';
import Menu from '../menu/menu';
import LivroEdit from './livro-edit';
import LivroList from './livro-list';

const ManterLivro = () => {
    const location = useLocation();

    const definirComponente = () => {
        //const pathname = location.pathname;
        const { pathname } = location;
        if (pathname === "/livros") {
            return <LivroList></LivroList>
        } else if (pathname === "/livros/novo" || pathname.startsWith("/livros/editar/")){
            return <LivroEdit></LivroEdit>
        }
    }

    return (
        <div>
            {definirComponente()}
        </div>
    )
}

export default ManterLivro;