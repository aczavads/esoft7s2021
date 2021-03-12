package br.unicesumar.esoft7s2021.back.produto;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {
    @Autowired
    private ProdutoService service;    

    @GetMapping
    public List<Produto> get() {
        return service.obterTodos();
    }
 
    @GetMapping("/{idParaEditar}")
    public Produto getById(@PathVariable("idParaEditar") String idParaEditar) {
        return service.obterPeloId(idParaEditar);
    }

    @PutMapping("/{id}")
    public void put(@PathVariable String id, @RequestBody Produto produtoEditado) {
        service.salvar(produtoEditado);
    }

    @PostMapping
    public String post(@RequestBody Produto novo) {
        Produto produtoSalvo = service.salvar(novo);
        return produtoSalvo.getId();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        service.excluirPeloId(id);
    }
    
}
