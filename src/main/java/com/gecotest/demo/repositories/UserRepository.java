package com.gecotest.demo.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gecotest.demo.models.UserModel;

@Repository
public interface UserRepository extends CrudRepository<UserModel, Long> {
    
}
