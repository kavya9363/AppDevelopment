package trailblazers.school12.service;
import java.util.List;

import trailblazers.school12.dto.request.UserRequest;
import trailblazers.school12.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteUser(Long uid);

}
