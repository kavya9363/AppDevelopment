package mridini.school.admission.service;

import java.util.List;

import mridini.school.admission.dto.request.UserRequest;
import mridini.school.admission.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

}
