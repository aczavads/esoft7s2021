package br.unicesumar.esoft7s2021.back.cor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CorRepository extends JpaRepository<Cor, String> {
    Page<Cor> findByNomeLike(Pageable pageRequest, String nome);
    
}
