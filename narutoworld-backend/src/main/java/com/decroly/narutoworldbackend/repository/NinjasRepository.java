package com.decroly.narutoworldbackend.repository;

import com.decroly.narutoworldbackend.model.Ninjas;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface NinjasRepository extends JpaRepository<Ninjas, Long> {
    //List<Ninjas> findByNinjaname(@Param("ninjaname") String ninjaname, PageRequest pageable);

    Page<Ninjas> findByAffiliation(@Param("affiliation") String affiliation, Pageable pageable);

    Page<Ninjas> findByNaturetypeContainingIgnoreCase(@Param("naturetype")String naturetype, Pageable pageable);

    Page<Ninjas> findByNinjanameContainingIgnoreCase(@Param("ninjaname")String ninjaname, Pageable pageable);

    Page<Ninjas> findByClanContainingIgnoreCase(@Param("clan")String clan, Pageable pageable);

}
