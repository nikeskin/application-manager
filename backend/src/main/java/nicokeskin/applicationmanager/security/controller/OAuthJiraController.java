package nicokeskin.applicationmanager.security.controller;

import nicokeskin.applicationmanager.security.model.JiraClientIdDto;
import nicokeskin.applicationmanager.security.service.OAuthJiraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/auth/jira")
@RestController
public class OAuthJiraController {

    private final OAuthJiraService oAuthJiraService;

    @Autowired
    public OAuthJiraController(OAuthJiraService oAuthJiraService) {
        this.oAuthJiraService = oAuthJiraService;
    }

    @GetMapping("/config")
    public JiraClientIdDto getClientId() {
        return oAuthJiraService.getJiraClientIdDto();
    }

}
