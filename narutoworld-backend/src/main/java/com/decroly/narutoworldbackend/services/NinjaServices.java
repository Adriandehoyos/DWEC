package com.decroly.narutoworldbackend.services;

import com.decroly.narutoworldbackend.model.Ninjas;
import com.decroly.narutoworldbackend.repository.NinjasRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class NinjaServices {
    NinjasRepository ninjasRepository;

    public Page<Ninjas> getNinjas(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return ninjasRepository.findAll(pageable);
    }

    public Ninjas save(Ninjas character) {
        return ninjasRepository.save(character);
    }

    public Optional<Ninjas> findById(Long id) {
        return ninjasRepository.findById(id);
    }

    public Page<Ninjas> findByAffiliation(String affiliation, int page, int size) {;
        Pageable pageable = PageRequest.of(page, size);
        return ninjasRepository.findByAffiliation(affiliation, pageable);
    }

    public Page<Ninjas> findByNatureType(String natureType, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return ninjasRepository.findByNaturetypeContainingIgnoreCase(natureType, pageable);
    }

    public Page<Ninjas> findByClan(String clan, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return ninjasRepository.findByClanContainingIgnoreCase(clan, pageable);
    }

    public Page<Ninjas> findByName(String name, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return ninjasRepository.findByNinjanameContainingIgnoreCase(name, pageable);
    }

    public void deleteById(Long id) {
        ninjasRepository.deleteById(id);
    }

}
