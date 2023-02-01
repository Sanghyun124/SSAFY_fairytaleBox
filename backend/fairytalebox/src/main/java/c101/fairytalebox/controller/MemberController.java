package c101.fairytalebox.controller;

import c101.fairytalebox.dto.SignUpRequestDto;
import c101.fairytalebox.jwt.JwtTokenProvider;
import c101.fairytalebox.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberController {

    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManagerBuilder authenticationMangerBuilder;
    private final MemberService memberService;


    @GetMapping("/test")
    public String testUrl() {
        return "접속됐지롱";
    }
    @PostMapping("/signup")
    public Long signUp(@Valid @RequestBody SignUpRequestDto request) throws Exception {
        return memberService.signUp(request);
    }
}
