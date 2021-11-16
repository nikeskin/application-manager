package nicokeskin.applicationmanager.service;

import nicokeskin.applicationmanager.model.api.*;
import nicokeskin.applicationmanager.service.api.JiraApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TicketService {

    private final JiraApiService jiraApiService;

    @Autowired
    public TicketService(JiraApiService jiraApiService) {
        this.jiraApiService = jiraApiService;
    }

    public String createTicket(String description, String summary) {

        ContentTwo contentTwo = new ContentTwo(description);
        List<ContentTwo> contentInput = List.of(contentTwo);
        Content content = new Content(contentInput);
        List<Content> descriptionInput = List.of(content);
        Description fieldsInput = new Description(descriptionInput);
        Fields fields = new Fields(summary, fieldsInput);
        JiraTicketInput jiraTicketInput = new JiraTicketInput(fields);

        JiraApiOutput jiraApiOutput = jiraApiService.createTicket(jiraTicketInput);
        return jiraApiOutput.getKey();
    }

}
