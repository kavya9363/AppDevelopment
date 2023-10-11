package trailblazers.school12.service;

import trailblazers.school12.dto.request.AuthenticationRequest;
import trailblazers.school12.dto.request.RegisterRequest;
import trailblazers.school12.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);
    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
