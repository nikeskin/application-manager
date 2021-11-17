package nicokeskin.applicationmanager.controller;

import nicokeskin.applicationmanager.model.api.FrontendInput;
import nicokeskin.applicationmanager.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/jira")
public class TicketController {

    private final TicketService ticketService;

    @Autowired
    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @PostMapping("/create-ticket")
    public String createTicket(@RequestBody FrontendInput frontendInput) {
        return ticketService.createTicket(frontendInput.getDescription(), frontendInput.getSummary(), frontendInput.getFieldName(), frontendInput.getId());
    }


}
