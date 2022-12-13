package com.bco.sample.domain;

import com.bco.sample.domain.enums.TypeMovementEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "movements")
public class Movement {
    @Id
    @Column(name = "id_movement", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idMovement;

    @Column(name = "date_movement")
    private Date date;

    @Column(name = "value_movement")
    private BigDecimal value;

    @Column(name = "type_movement")
    private TypeMovementEnum type;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_account")
    private Account account;
}
