package br.unicesumar.esoft7s2021.back.corTransiente;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cores-transiente")
public class CorControllerTransiente {
    private List<Cor> cores = new ArrayList<>();

    public CorControllerTransiente() {
        cores.add(new Cor("BLK", "Black"));
        cores.add(new Cor("RD", "Red"));
        cores.add(new Cor("GRN", "Green"));        
    }

    @GetMapping
    public List<Cor> get() {
        return this.cores;
    }
 
    @GetMapping("/{idParaEditar}")
    public Cor getById(@PathVariable("idParaEditar") String idParaEditar) {
        return this.cores.stream().filter(c -> c.getId().equals(idParaEditar) ).findFirst().orElseGet(Cor::new);
    }

    @PutMapping("/{id}")
    public void put(@PathVariable String id, @RequestBody Cor corEditada) {
        this.cores = this.cores.stream()
            .filter(cor -> !cor.getId().equals(id))
            .collect(Collectors.toList());
            
        this.cores.add(corEditada);
    }

    @PostMapping
    public String post(@RequestBody Cor nova) {
        if (this.cores.contains(nova)) {
            throw new RuntimeException("Cor duplicada!");
        }
        this.cores.add(nova);
        return nova.getId();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        this.cores = this.cores.stream()
            .filter(cor -> !cor.getId().equals(id))
            .collect(Collectors.toList());
    }
    
}
