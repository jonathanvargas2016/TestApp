package com.bco.sample.repository;

import com.bco.sample.domain.Client;
import org.springframework.data.repository.CrudRepository;

public interface ClientRepository extends CrudRepository<Client, Long> {


}
