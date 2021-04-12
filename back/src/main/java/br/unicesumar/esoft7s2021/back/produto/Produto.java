package br.unicesumar.esoft7s2021.back.produto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import br.unicesumar.esoft7s2021.back.cor.Cor;
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

    @JsonProperty(access = Access.WRITE_ONLY)
    @Getter
    @Setter
    @ManyToOne
    private Cor corPadrao;
    

    public Produto() {
        this.id = UUID.randomUUID().toString();
    }

    public Produto(String descricao, LocalDate lancadoEm, BigDecimal precoUnitario) {
        this();
        this.descricao = descricao;
        this.lancadoEm = lancadoEm;
        this.precoUnitario = precoUnitario;
    }    

    /*
    public String getNomeCorPadrao() {
        if (this.corPadrao != null) {
            return this.corPadrao.getNome();
        }
        return "";
    }
    public String getIdCorPadrao() {
        if (this.corPadrao != null) {
            return this.corPadrao.getId();
        }
        return "";
    }
    */
    public Map<String, Object> getCorPadraoVO() {
        Map<String, Object> corPadraoVO = new HashMap<>();
        if (this.corPadrao != null) {
            corPadraoVO.put("id", this.corPadrao.getId());
            corPadraoVO.put("nome", this.corPadrao.getNome());
        }
        return corPadraoVO;
    }
   
    
}
