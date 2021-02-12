import React, { useState, useEffect } from 'react';
import axios from 'axios';


const HelloComponent = (props) => {
    //var mensagem = "Hello Component!";
    const [mensagem, setMensagem] = useState("Hello Component!");

    const get = async () => {
        const response = await axios.get("/api/hello");
        setMensagem(response.data);
        console.log(mensagem);
    }

    useEffect( () => {
        get();
    }, []);

    return (
        <div>
            {mensagem}
        </div>
    );
}

export default HelloComponent;