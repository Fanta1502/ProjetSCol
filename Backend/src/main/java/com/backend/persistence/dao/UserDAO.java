package com.backend.persistence.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.persistence.entities.User;

@Repository
public interface UserDAO extends JpaRepository<User, Long> {

    Optional<User> findByEmailAndIsDeletedIsFalse(String email);
    Optional<User> findByIdAndIsDeletedIsFalse(Long id);
    User findOneByIdAndIsDeletedIsFalse(Long id);
    User findOneByEmailAndIsDeletedIsFalse(String email);
    List<User> findByRolesNameInAndIsDeletedIsFalse(List<String> roles);
    List<User> findByIsDeletedIsFalse();
}
