package com.muthu.demo.dto.response;

import com.muthu.demo.model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {
    private Long uid;
    private String name;
    private String email;
//    private Boolean isEnabled;
    private Role role;
//    private Long phone;    
//    private String address;
}
