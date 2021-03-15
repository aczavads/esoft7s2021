package br.unicesumar.esoft7s2021.back.produto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;


@Entity
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Produto {
    @Getter
    @Id
    @EqualsAndHashCode.Include
    private String id;
    @Getter
    @Setter
    private String descricao;
    @Getter
    @Setter
    private LocalDate lancadoEm;
    @Getter
    @Setter
    @Column(scale = 2)
    private BigDecimal precoUnitario;
    

    public Produto() {
        this.id = UUID.randomUUID().toString();
    }

    public Produto(String descricao, LocalDate lancadoEm, BigDecimal precoUnitario) {
        this();
        this.descricao = descricao;
        this.lancadoEm = lancadoEm;
        this.precoUnitario = precoUnitario;
    }    
   
    
}
