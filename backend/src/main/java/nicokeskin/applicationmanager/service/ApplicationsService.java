package nicokeskin.applicationmanager.service;

import nicokeskin.applicationmanager.model.Application;
import nicokeskin.applicationmanager.repo.ApplicationsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
