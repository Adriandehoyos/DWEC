package com.decroly.narutoworldbackend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "ninjastats")
public class NinjaStats {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ninjutsu")
    private Double ninjutsu;
    @Column(name = "taijutsu")
    private Double taijutsu;
    @Column(name = "genjutsu")
    private Double genjutsu;
    @Column(name = "intelligence")
    private Double intelligence;
    @Column(name = "strength")
    private Double strength;
    @Column(name = "speed")
    private Double speed;
    @Column(name = "stamina")
    private Double stamina;
    @Column(name = "handseals")
    private Double handseals;

    @OneToOne
    @JoinColumn(name = "ninjaid", referencedColumnName = "id")
    @JsonBackReference
    private Ninjas ninja;
}
