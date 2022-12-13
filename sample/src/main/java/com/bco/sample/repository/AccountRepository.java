package com.bco.sample.repository;

import com.bco.sample.domain.Account;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AccountRepository extends CrudRepository<Account, Long> {

    @Query("SELECT a FROM Account a INNER JOIN Client c ON a.client.idClient = c.idClient")
    List<Account> findAllAccountsClient();
}
