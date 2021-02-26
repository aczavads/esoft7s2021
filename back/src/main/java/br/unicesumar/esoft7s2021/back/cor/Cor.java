package br.unicesumar.esoft7s2021.back.cor;

import java.util.UUID;

import lombok.Data;

@Data
public class Cor {
    private String id;
    private String sigla;
    private String nome;

    public Cor() {
        this.id = UUID.randomUUID().toString();
    }

    public Cor(String sigla, String nome) {
        this();
        this.sigla = sigla;
        this.nome = nome;
    }
    
}
