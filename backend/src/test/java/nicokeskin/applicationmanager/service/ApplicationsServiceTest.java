package nicokeskin.applicationmanager.service;

import nicokeskin.applicationmanager.model.Application;
import nicokeskin.applicationmanager.model.Documentation;
import nicokeskin.applicationmanager.repo.ApplicationsRepo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.mockito.Mockito.*;

public class ApplicationsServiceTest {

    private final ApplicationsRepo applicationsRepo = mock(ApplicationsRepo.class);
    private final ApplicationsService applicationsService = new ApplicationsService(applicationsRepo);

    @Test
    @DisplayName("returns a list of all existing apps")
    void listQuestions() {
        //GIVEN
        List<Application> expected = List.of(new Application("1", "App1", "desc1", "Nico", "Sven", 1001, "live", 0.8),
                new Application("2", "App2", "desc2", "Nico", "Maria", 1002, "terminated", 1.0));
        when(applicationsRepo.findAll()).thenReturn(expected);

        //WHEN
        List<Application> actual = applicationsService.getAllApps();

        //THEN
        Assertions.assertIterableEquals(expected, actual);
        verify(applicationsRepo).findAll();
    }

}
