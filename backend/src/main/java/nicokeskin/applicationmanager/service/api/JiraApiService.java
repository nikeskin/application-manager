package nicokeskin.applicationmanager.service.api;

import nicokeskin.applicationmanager.model.api.JiraApiOutput;
import nicokeskin.applicationmanager.model.api.JiraTicketInput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class JiraApiService {

    private final RestTemplate restTemplate;

    @Value("${jira.email.address}")
    private String email;

    @Value("${jira.api.key}")
    private String key;

    @Autowired
    public JiraApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public JiraApiOutput createTicket(JiraTicketInput jiraTicketInput, String username) {

        final String url = "https://appman.atlassian.net/rest/api/3/issue/";

        HttpHeaders headers = new HttpHeaders();
        headers.setBasicAuth(username, key);

        ResponseEntity<JiraApiOutput> response = restTemplate.exchange(url, HttpMethod.POST, new HttpEntity<>(jiraTicketInput, headers), JiraApiOutput.class);
        return response.getBody();
    }


}
