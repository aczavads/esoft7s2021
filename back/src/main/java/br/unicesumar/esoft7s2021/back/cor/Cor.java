package br.unicesumar.esoft7s2021.back.cor;

import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;


@Entity
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Cor {
    @Getter
    @Id
    @EqualsAndHashCode.Include
    private String id;
    @Getter
    @Setter
    private String sigla;
    @Getter
    @Setter
    private String nome;
    

    public Cor() {
        this.id = UUID.randomUUID().toString();
    }
      
}
