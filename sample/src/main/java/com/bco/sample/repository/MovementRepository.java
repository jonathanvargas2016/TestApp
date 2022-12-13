package com.bco.sample.repository;

import com.bco.sample.domain.Movement;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;

public interface MovementRepository extends CrudRepository<Movement, Long> {

    @Query("SELECT m, c, a FROM Movement m INNER JOIN Account a ON m.idMovement = a.idAccount " +
            "INNER JOIN Client c ON a.client.idClient = c.idClient  where m.date between ?1 and ?2")
    List<Movement> findAllMovementsClient(Date startDate, Date endDate);

}
