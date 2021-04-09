package br.unicesumar.esoft7s2021.back.cor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cores")
public class CorController {
    @Autowired
    private CorService service;    

    @GetMapping
    public Page<Cor> get(Pageable pageRequest,  @RequestParam(name = "termo",required = false) String termo) {
        System.out.println(">>>> [" + termo + "]");
        return service.obterTodos(pageRequest, termo);
    }
 
    @GetMapping("/{idParaEditar}")
    public Cor getById(@PathVariable("idParaEditar") String idParaEditar) {
        return service.obterPeloId(idParaEditar);
    }

    @PutMapping("/{id}")
    public void put(@PathVariable String id, @RequestBody Cor corEditada) {
        service.salvar(corEditada);
    }

    @PostMapping
    public String post(@RequestBody Cor nova) {
        Cor corSalva = service.salvar(nova);
        return corSalva.getId();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        service.excluirPeloId(id);
    }
    
}
