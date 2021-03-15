package br.unicesumar.esoft7s2021.back.produto;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProdutoRepository extends JpaRepository<Produto, String> {

    /*
    @Query(value ="select p from Produto p where p.descricao like %:termo%")
    List<Produto> encontrarComTermo(String termo);
    */

    List<Produto> findByDescricaoLike(String descricao);
    
}
