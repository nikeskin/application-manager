package nicokeskin.applicationmanager.service;

import nicokeskin.applicationmanager.model.AppEvent;
import nicokeskin.applicationmanager.model.Application;
import nicokeskin.applicationmanager.repo.ApplicationsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class ApplicationsService {

    private final ApplicationsRepo applicationsRepo;

    @Autowired
    public ApplicationsService(ApplicationsRepo applicationsRepo) {
        this.applicationsRepo = applicationsRepo;
    }

    public List<Application> getAllApps() {
        return applicationsRepo.findAll();
    }

    public Application getAppById(String id) {
        return applicationsRepo.findById(id).
                orElseThrow(() -> new NoSuchElementException("element with id " +id + " not found."));
    }

    public Application addApp(Application application) {
        setAppId(application);
        setEventForCreation(application);
        return applicationsRepo.save(application);
    }

    private void setAppId(Application application) {
        if (applicationsRepo.findFirstByOrderByAppIdDesc() == null) {
            application.setAppId(1001);
        } else {
            Application highestAppIdApplication = applicationsRepo.findFirstByOrderByAppIdDesc();
            int newAppId = highestAppIdApplication.getAppId() + 1;
            application.setAppId(newAppId);
        }
    }

    public void setEventForCreation(Application application) {
        AppEvent createEvent = new AppEvent("Application created with status: " + application.getAppStatus());
        application.getApplicationHistory().add(createEvent);
    }
}
