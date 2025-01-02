package com.store.store.exeception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Integer id){
        super("Could not found the id "+id);
    }
}
