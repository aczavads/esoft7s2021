package br.unicesumar.esoft7s2021.back.produto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Objects;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;


@Entity
public class Produto {
    @Getter
    @Id
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


    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Produto)) {
            return false;
        }
        Produto produto = (Produto) o;
        return Objects.equals(id, produto.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }




    
    
}
