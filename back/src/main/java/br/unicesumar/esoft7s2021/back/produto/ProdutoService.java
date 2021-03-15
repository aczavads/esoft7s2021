package br.unicesumar.esoft7s2021.back.produto;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ProdutoService {
    @Autowired
    private ProdutoRepository repository;

    public List<Produto> obterTodos(String termo) {
        if (termo == null || termo.trim().length() == 0) {
            return repository.findAll();            
        }
        //return repository.encontrarComTermo(termo);            
        return repository.findByDescricaoLike("%" + termo + "%");
    } 

    public Produto obterPeloId(String id) {
        return repository.findById(id).orElseGet(Produto::new);
    }

    public void excluirPeloId(String id) {
        repository.deleteById(id);
    }

    public Produto salvar(Produto produto) {
        return repository.save(produto);
    }
    
}
