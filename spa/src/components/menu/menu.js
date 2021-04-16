import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <Link to="/">
                    <li>Landing page</li>
                </Link>
                <Link to="/cores">
                    <li>Manter cores</li>
                </Link>
                <Link to="/produtos">
                    <li>Manter produtos</li>
                </Link>
                <Link to="/produtos2">
                    <li>Manter produtos 2 (DOIS!!)</li>
                </Link>
                <Link to="/livros">
                    <li>Manter livros</li>
                </Link>
                <Link to="/teste-typeahead">
                    <li>TesteTypeahead</li>
                </Link>
            </ul>
        </div>
    );
}


export default Menu;