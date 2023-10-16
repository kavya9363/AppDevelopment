package com.muthu.demo.service;

import com.muthu.demo.dto.request.AuthenticationRequest;
import com.muthu.demo.dto.request.RegisterRequest;
import com.muthu.demo.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
