package com.store.store.controller;

import com.store.store.exeception.UserNotFoundException;
import com.store.store.model.User;
import com.store.store.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")//to connect with front end and database
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Integer id){
        return  userRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser,@PathVariable Integer id){
        return userRepository.findById(id)
                .map(user -> {
                    user.setName(newUser.getName());
                    user.setQuantity(newUser.getQuantity());
                    return userRepository.save(user);
                }).orElseThrow(()->new UserNotFoundException(id));
    }


    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Integer id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id "+id+" has been deleted success.";
    }

}
