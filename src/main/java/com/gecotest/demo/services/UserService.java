package com.gecotest.demo.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gecotest.demo.models.UserModel;
import com.gecotest.demo.repositories.UserRepository;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public ArrayList<UserModel> getUsers(){
        return (ArrayList<UserModel>) userRepository.findAll();
    }

    public Optional<UserModel> getUserById(Long id){
        return userRepository.findById(id);
    }
        
    public UserModel saveUser(UserModel user){
        return userRepository.save(user);
    }

    public boolean deleteUserById(Long id) {
        try {
        userRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
  
}
