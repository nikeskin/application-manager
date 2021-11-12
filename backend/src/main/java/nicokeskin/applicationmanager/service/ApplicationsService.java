package nicokeskin.applicationmanager.service;

import nicokeskin.applicationmanager.model.AppEvent;
import nicokeskin.applicationmanager.model.Application;
import nicokeskin.applicationmanager.repo.ApplicationsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

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

    public Application updateApp(Application application) {
        if(applicationsRepo.existsById(application.getId())){
            setEventForEdit(application);
            return applicationsRepo.save(application);
        } else {
            throw new NoSuchElementException("Could not update Todo element! Element with id does not exist: " + application.getId());
        }
        }

    public void setEventForEdit(Application updatedApplication) {
        Application existingApplication = getAppById(updatedApplication.getId());

        if (!existingApplication.getAppName().equals(updatedApplication.getAppName())) {
            AppEvent changeAppNameEvent = new AppEvent("Application name changed from: " + existingApplication.getAppName() + " to: " + updatedApplication.getAppName());
            updatedApplication.getApplicationHistory().add(changeAppNameEvent);
        }

        if (!existingApplication.getDescription().equals(updatedApplication.getDescription())) {
            AppEvent changeDescriptionEvent = new AppEvent("Application description changed");
            updatedApplication.getApplicationHistory().add(changeDescriptionEvent);
        }

        if (!existingApplication.getAppStatus().equals(updatedApplication.getAppStatus())) {
            AppEvent changeAppStatusEvent = new AppEvent("Application status changed from: " +existingApplication.getAppStatus() + " to: " + updatedApplication.getAppStatus());
            updatedApplication.getApplicationHistory().add(changeAppStatusEvent);
        }

        if (!existingApplication.getBusinessContact().equals(updatedApplication.getBusinessContact())) {
            AppEvent changeBusinessContactEvent = new AppEvent("Business contact changed from: " +existingApplication.getBusinessContact() + " to: " + updatedApplication.getBusinessContact());
            updatedApplication.getApplicationHistory().add(changeBusinessContactEvent);
        }

        if (!existingApplication.getTechnicalContact().equals(updatedApplication.getTechnicalContact())) {
            AppEvent changeTechnicalContactEvent = new AppEvent("Technical contact changed from: " +existingApplication.getTechnicalContact() + " to: " + updatedApplication.getTechnicalContact());
            updatedApplication.getApplicationHistory().add(changeTechnicalContactEvent);
        }
    }
}
