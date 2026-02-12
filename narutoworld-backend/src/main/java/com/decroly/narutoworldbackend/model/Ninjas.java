package com.decroly.narutoworldbackend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="ninjas")
public class Ninjas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "ninjaname")
    private String ninjaname;
    @Column(name = "fullname")
    private String fullname;
    @Column(name = "clan")
    private String clan;
    @Column(name = "image1")
    private String image1;
    @Column(name = "image2")
    private String image2;

    @Column(name = "gender")
    private String gender;
    @Column(name = "level")
    private String level;
    @Column(name = "naturetype")
    private String naturetype;
    @Column(name = "affiliation")
    private String affiliation;

    @OneToOne(mappedBy = "ninja", cascade = CascadeType.ALL)
    @JsonManagedReference
    private NinjaStats stats;

}
