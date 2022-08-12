package com.backend.service;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.backend.payload.request.LoginRequest;
import com.backend.payload.response.JwtResponse;
import com.backend.persistence.Constants.Constants;
import com.backend.persistence.dao.RoleDAO;
import com.backend.persistence.dao.UserDAO;
import com.backend.persistence.dto.UserDto;
import com.backend.persistence.entities.Role;
import com.backend.persistence.entities.User;
import com.backend.persistence.mappers.UserMapper;
import com.backend.security.jwt.JwtUtils;
import com.backend.security.services.UserDetailsImpl;
import com.backend.security.services.UserDetailsServiceImpl;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@AllArgsConstructor
public class AuthService {
	@Value("${gestionScol.frontendUrl}")
	private String frontendUrl;
	private final AuthenticationManager authenticationManager;

	private final UserDAO userRepository;
	private final UserMapper userMapper;

	private final RoleDAO roleRepository;
	private final UserDetailsServiceImpl userDetailsServiceImpl;
	private final JwtUtils jwtUtils;
	private final PasswordEncoder passwordEncoder;

	@Autowired
	public AuthService(AuthenticationManager authenticationManager, UserDAO userRepository,
			UserMapper userMapper, RoleDAO roleRepository, UserDetailsServiceImpl userDetailsServiceImpl,
			JwtUtils jwtUtils, PasswordEncoder passwordEncoder) {
		super();
		this.authenticationManager = authenticationManager;
		this.userRepository = userRepository;
		this.userMapper = userMapper;
		this.roleRepository = roleRepository;
		this.userDetailsServiceImpl = userDetailsServiceImpl;
		this.jwtUtils = jwtUtils;
		this.passwordEncoder = passwordEncoder;
	}

	public JwtResponse login(LoginRequest loginRequest) {
		Authentication authentication =null;
		try {
			try {
				 authentication = authenticationManager.authenticate(
						new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
			} catch (BadCredentialsException e) {
				return null;
			}
			SecurityContextHolder.getContext().setAuthentication(authentication);
			UserDetailsImpl userDetails = (UserDetailsImpl) userDetailsServiceImpl
					.loadUserByUsername(loginRequest.getEmail());

			String jwt = jwtUtils.generateJwtToken(userDetails);
			List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority())
					.collect(Collectors.toList());
			JwtResponse newJwtResponse = new JwtResponse(jwt, userDetails.getId(), userDetails.getUsername(),
					userDetails.getEmail(), roles);
			log.info("User {} successfuly connected", loginRequest.getEmail());
			return newJwtResponse;
		} catch (Exception e) {
			log.error("User cannot be authenticated", e);
		}
		return null;

	}

	public UserDto editUserSettings(UserDto userBody) {
		try {
			User user = userRepository.findOneByIdAndIsDeletedIsFalse(userBody.getId());
			user.setFirstName(userBody.getFirstName());
			user.setLastName(userBody.getLastName());
			user.setProfilPicture(userBody.getProfilPicture());
			user.setEmail(userBody.getEmail());
			userRepository.saveAndFlush(user);
			UserDto userDto = userMapper.fromEntityToDto(user);
			log.info("User (id={}) updated successfully", user.getId());
			return userDto;
		} catch (Exception e) {
			log.error("An error occured while updating user ", e);
			return null;
		}

	}

	public UserDto getUser(Long id) {
		try {
			User user = userRepository.findOneByIdAndIsDeletedIsFalse(id);
			UserDto userDto = userMapper.fromEntityToDto(user);
			log.info("User response successfully");
			return userDto;
		} catch (Exception e) {
			log.error("There was an error while getting user", e);
			return null;
		}

	}

	public UserDto getUser(String mail) {
		try {
			Optional<User> user = userRepository.findByEmailAndIsDeletedIsFalse(mail);
			UserDto userDto = userMapper.fromEntityToDto(user.get());
			log.info("User response successfully");
			return userDto;
		} catch (Exception e) {
			log.error("There was an error while getting user", e);
			return null;
		}

	}

	public UserDto registerUser(User user) {
		try {
			List<Role> roles = new ArrayList<Role>();
			Role role = roleRepository.findByName(Constants.Role.ROLE_CLIENT);
			roles.add(role);
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			user.setRoles(roles);
			userRepository.save(user);
			UserDto userDto = userMapper.fromEntityToDto(user);
			log.info("User added successfully");
			return userDto;
		} catch (Exception e) {
			log.error("There was an error while posting user {}", user.getId(), e);
			return null;
		}
	}
	public UserDto forgotPassword(String email) {
		try {
			User user = userRepository.findOneByEmailAndIsDeletedIsFalse(email);
			int leftLimit = 48;
			int rightLimit = 122;
			int targetStringLength = 16;
			Random random = new Random();

			String generatedString = random.ints(leftLimit, rightLimit + 1)
					.filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97)).limit(targetStringLength)
					.collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append).toString();
			userRepository.saveAndFlush(user);
			log.info("Forgot password mail sended successfully");
			return userMapper.fromEntityToDto(user);

		} catch (Exception e) {
			log.error("An error occured while getting user {}", e);

			return null;

		}
	}
}
