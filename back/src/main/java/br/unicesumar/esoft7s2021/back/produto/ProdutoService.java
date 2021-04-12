package br.unicesumar.esoft7s2021.back.produto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ProdutoService {
    @Autowired
    private ProdutoRepository repository;


    public Page<Produto> obterTodos(Pageable pageRequest, String termo) {
        if (termo == null || termo.trim().length() == 0) {
            return repository.findAll(pageRequest);            
        }
        return repository.findByDescricaoLike(pageRequest, "%" + termo + "%");
    } 

    /*
    public List<Produto> obterTodos(String termo) {
        if (termo == null || termo.trim().length() == 0) {
            return repository.findAll();            
        }
        //return repository.encontrarComTermo(termo);            
        return repository.findByDescricaoLike("%" + termo + "%");
    } 
    */

    public Produto obterPeloId(String id) {
        return repository.findById(id).orElseGet(Produto::new);
    }

    public void excluirPeloId(String id) {
        repository.deleteById(id);
    }

    public Produto salvar(Produto produto) {
        if (produto.getCorPadrao() == null) {
            throw new ProdutoInválidoException("Cor padrão do produto não pode ser nula!");
        }
        return repository.save(produto);
    }

    public void gerarProdutos() {
        for (int i = 0; i < 1000; i++) {
            Produto novo = new Produto("Produto " + i, LocalDate.now(), new BigDecimal(i * 1.10));
            repository.save(novo);
        }
    }
    
}
