package nicokeskin.applicationmanager.service;

import nicokeskin.applicationmanager.model.AppEvent;
import nicokeskin.applicationmanager.model.Application;
import nicokeskin.applicationmanager.model.api.*;
import nicokeskin.applicationmanager.repo.ApplicationsRepo;
import nicokeskin.applicationmanager.service.api.JiraApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class TicketService {

    private final JiraApiService jiraApiService;
    private final ApplicationsRepo applicationsRepo;

    @Autowired
    public TicketService(JiraApiService jiraApiService, ApplicationsRepo applicationsRepo) {
        this.jiraApiService = jiraApiService;
        this.applicationsRepo = applicationsRepo;
    }

    public String createTicket(String description, String summary, String fieldName, String id) {

        ContentTwo contentTwo = new ContentTwo(description);
        List<ContentTwo> contentInput = List.of(contentTwo);
        Content content = new Content(contentInput);
        List<Content> descriptionInput = List.of(content);
        Description fieldsInput = new Description(descriptionInput);
        Fields fields = new Fields(summary, fieldsInput);
        JiraTicketInput jiraTicketInput = new JiraTicketInput(fields);

        JiraApiOutput jiraApiOutput = jiraApiService.createTicket(jiraTicketInput);

        Application application = applicationsRepo.findById(id).orElseThrow(() -> new NoSuchElementException("element with id " + id + " not found."));
        setEventForCreation(application, fieldName, jiraApiOutput.getKey());

        return jiraApiOutput.getKey();
    }

    public void setEventForCreation(Application application, String fieldName, String id) {
        AppEvent createEvent = new AppEvent(fieldName + ": Missing documentation: Ticket with id: " + id + " created");
        application.getApplicationHistory().add(createEvent);
        applicationsRepo.save(application);

    }

}
