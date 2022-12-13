package com.bco.sample.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "persons")
public class Person  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_person", nullable = false)
    private Long idPerson;

    @NotNull
    @Column(name = "identification", nullable = false, length = 50)
    private String identificationNumber;

    @NotNull
    @Column(name = "name", nullable = false, length = 50)
    private String name;

    @NotNull
    @Column(name = "lastname", nullable = false, length = 50)
    private String lastname;

    @Column(name = "address", nullable = true, length = 100)
    private String address;

    @Column(name = "phone_number", nullable = true, length = 20)
    private String phoneNumber;

    @Column(name = "age", nullable = true)
    private Integer age;

    @NotNull
    @Column(name = "state", nullable = false)
    private Boolean state;

}

