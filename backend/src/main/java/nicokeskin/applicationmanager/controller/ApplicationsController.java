package nicokeskin.applicationmanager.controller;


import nicokeskin.applicationmanager.model.Application;
import nicokeskin.applicationmanager.service.ApplicationsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ApplicationsController {

    private final ApplicationsService applicationsService;

    @Autowired
    public ApplicationsController(ApplicationsService applicationsService) {
        this.applicationsService = applicationsService;
    }

    @GetMapping("/overview")
    public List<Application> getAllApps() {
        return applicationsService.getAllApps();
    }

    @GetMapping("/details/{id}")
    public Application getAppById(@PathVariable String id) {
        return applicationsService.getAppById(id);
    }

    @PostMapping("/add-app")
    public Application addApp(@RequestBody Application application) {
        return applicationsService.addApp(application);
    }

    @PutMapping("/edit-app/{id}")
    public Application updateApp(@PathVariable String id, @RequestBody Application application) {

        if(!id.equals(application.getId())){
            throw new IllegalArgumentException("Could not update element! Path id does not match with element id in request body!");
        }

        return applicationsService.updateApp(application);
    }

}
