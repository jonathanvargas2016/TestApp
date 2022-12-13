package com.bco.sample.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import java.util.Date;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "accounts")
public class Account {

    @Id
    @Column(name = "id_account", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idAccount;

    @NotNull
    @Column(name = "account_number", nullable = false, length = 50)
    private String accountNumber;

    @NotNull
    @Column(name = "account_type", nullable = false, length = 50)
    private String accountType;

    @NotNull
    @Column(name = "open_date", nullable = false)
    private Date openDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_client")
    private Client client;

    @Column(name = "state", nullable = false)
    private Boolean state;

    @OneToMany(mappedBy = "idMovement")
    private Set<Movement> movements;



}
