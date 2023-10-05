package mridini.school.admission.service;

import mridini.school.admission.dto.request.AuthenticationRequest;
import mridini.school.admission.dto.request.RegisterRequest;
import mridini.school.admission.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
