package br.unicesumar.esoft7s2021.back.cor;

import java.math.BigDecimal;
import java.time.LocalDate;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
 
@Service
@Transactional
public class CorService {
    @Autowired
    private CorRepository repository;


    public Page<Cor> obterTodos(Pageable pageRequest, String termo) {
        if (termo == null || termo.trim().length() == 0) {
            return repository.findAll(pageRequest);            
        }
        return repository.findByNomeLike(pageRequest, "%" + termo + "%");
    } 

    public Cor obterPeloId(String id) {
        return repository.findById(id).orElseGet(Cor::new);
    }

    public void excluirPeloId(String id) {
        repository.deleteById(id);
    }

    public Cor salvar(Cor produto) {
        return repository.save(produto);
    }
   
}
