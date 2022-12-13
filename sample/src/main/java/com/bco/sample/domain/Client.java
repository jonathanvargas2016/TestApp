package com.bco.sample.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@PrimaryKeyJoinColumn(name = "id_person")
@Table(name = "clients")
public class Client extends Person  {

    @Id
    @Column(name = "id_client", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idClient;

    @NotNull
    @Column(name = "code_client",  nullable = false, length = 100)
    private String code;

    @Column(name = "state", nullable = false)
    private Boolean state;

    @NotNull
    @Column(name = "username", nullable = false, length = 50)
    private String username;

    @NotNull
    @Column(name = "password", nullable = false, length = 50)
    private String password;

    @OneToMany(mappedBy = "idAccount", fetch = FetchType.LAZY)
    private Set<Account> accounts;


}
