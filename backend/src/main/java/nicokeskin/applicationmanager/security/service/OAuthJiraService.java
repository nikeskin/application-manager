package nicokeskin.applicationmanager.security.service;

import nicokeskin.applicationmanager.security.model.JiraClientIdDto;
import org.springframework.stereotype.Service;

@Service
public class OAuthJiraService {

    private final JiraClientIdDto jiraClientIdDto;

    public OAuthJiraService(JiraClientIdDto jiraClientIdDto) {
        this.jiraClientIdDto = jiraClientIdDto;
    }

    public JiraClientIdDto getJiraClientIdDto() {
        return jiraClientIdDto;
    }

}
