package br.unicesumar.esoft7s2021.back.produto;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST)
public class ProdutoInválidoException extends RuntimeException {

    public ProdutoInválidoException(String message) {
        super(message);
    }
    

}
