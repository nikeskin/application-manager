package nicokeskin.applicationmanager.security.service;

import nicokeskin.applicationmanager.security.model.JiraClientIdDto;
import nicokeskin.applicationmanager.security.model.JiraUserDto;
import nicokeskin.applicationmanager.security.service.api.OAuthJiraApiService;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class OAuthJiraService {

    private final JiraClientIdDto jiraClientIdDto;
    private final OAuthJiraApiService oAuthJiraApiService;
    private final JWTUtilService jwtUtilService;

    public OAuthJiraService(JiraClientIdDto jiraClientIdDto, OAuthJiraApiService oAuthJiraApiService, JWTUtilService jwtUtilService) {
        this.jiraClientIdDto = jiraClientIdDto;
        this.oAuthJiraApiService = oAuthJiraApiService;
        this.jwtUtilService = jwtUtilService;
    }

    public JiraClientIdDto getJiraClientIdDto() {
        return jiraClientIdDto;
    }

    public String getJwtToken(String code) {
        // 1) Verify code via GitHub
        String jiraToken = oAuthJiraApiService.retrieveJiraToken(code);

        // 2) Retrieve User Info
        JiraUserDto jiraUserDto = oAuthJiraApiService.retrieveUserInfo(jiraToken);

        // 3) Create JWT access token
        return jwtUtilService.createToken(new HashMap<>(), jiraUserDto.getUsername());
    }
}
