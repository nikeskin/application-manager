package nicokeskin.applicationmanager.security.service.api;

import nicokeskin.applicationmanager.controller.exception.JiraAuthException;
import nicokeskin.applicationmanager.security.model.JiraAccessTokenDto;
import nicokeskin.applicationmanager.security.model.JiraOAuthCredentialsDto;
import nicokeskin.applicationmanager.security.model.JiraUserDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class OAuthJiraApiService {

    private final RestTemplate restTemplate;

    private static final String JIRA_CODE_URL = "https://auth.atlassian.com/oauth/token";
    private static final String JIRA_USER_URL = "https://api.atlassian.com/me";

    @Value("${jira.clientId}")
    String clientId;

    @Value("${jira.clientSecret}")
    String clientSecret;

    @Value("${jira.redirectUrl}")
    String redirectUrl;

    public OAuthJiraApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String retrieveJiraToken(String code) {

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setAccept(List.of(MediaType.APPLICATION_JSON));

        JiraOAuthCredentialsDto credentialsDto = JiraOAuthCredentialsDto.builder()
                .grantType("authorization_code")
                .clientId(clientId)
                .clientSecret(clientSecret)
                .code(code)
                .redirectUrl(redirectUrl)
                .build();

        ResponseEntity<JiraAccessTokenDto> response = restTemplate.exchange(
                JIRA_CODE_URL,
                HttpMethod.POST,
                new HttpEntity<>(credentialsDto, httpHeaders),
                JiraAccessTokenDto.class);

        if (response.getBody() == null) {
            throw new JiraAuthException("Error while authenticating with code via GitHub! Body is null!");
        }

        return response.getBody().getAccessToken();

    }

    public JiraUserDto retrieveUserInfo(String jiraToken) {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setBearerAuth(jiraToken);

        ResponseEntity<JiraUserDto> response = restTemplate.exchange(
                JIRA_USER_URL,
                HttpMethod.GET,
                new HttpEntity<>(httpHeaders),
                JiraUserDto.class);

        if (response.getBody() == null) {
            throw new JiraAuthException("Error while authenticating with code via GitHub! Body is null!");
        }

        return response.getBody();
    }
}
