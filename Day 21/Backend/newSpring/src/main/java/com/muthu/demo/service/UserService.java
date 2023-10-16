package com.muthu.demo.service;

import java.util.List;

import com.muthu.demo.dto.request.UserRequest;
import com.muthu.demo.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

//    CountResponse userCount();

}
