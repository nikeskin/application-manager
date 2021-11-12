package nicokeskin.applicationmanager.service;

import nicokeskin.applicationmanager.model.AppEvent;
import nicokeskin.applicationmanager.model.Application;
import nicokeskin.applicationmanager.model.Documentation;
import nicokeskin.applicationmanager.repo.ApplicationsRepo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.*;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

    class ApplicationsServiceTest {

    private final ApplicationsRepo applicationsRepo = mock(ApplicationsRepo.class);
    private final ApplicationsService applicationsService = new ApplicationsService(applicationsRepo);

    @Test
    @DisplayName("returns a list of all existing apps")
    void testListApplications() {
        //GIVEN
        Documentation documentation = new Documentation();
        List<Application> expected = List.of(new Application("1", "App1", "desc1", "Nico", "Sven", 1001, "live", documentation, new ArrayList<AppEvent>()),
                new Application("2", "App2", "desc2", "Nico", "Maria", 1002, "terminated", documentation, new ArrayList<AppEvent>()));
        when(applicationsRepo.findAll()).thenReturn(expected);

        //WHEN
        List<Application> actual = applicationsService.getAllApps();

        //THEN
        Assertions.assertIterableEquals(expected, actual);
        verify(applicationsRepo).findAll();
    }

        @Test
        @DisplayName("returns one app")
        void testGetApplicationById() {
            //GIVEN
            Documentation documentation = new Documentation();
            Application expected = new Application("1", "App1", "desc1", "Nico", "Sven", 1001, "live", documentation, new ArrayList<AppEvent>());
            when(applicationsRepo.findById("1")).thenReturn(Optional.of(expected));

            //WHEN
            Application actual = applicationsService.getAppById("1");

            //THEN
            Assertions.assertEquals(expected, actual);
            verify(applicationsRepo).findById("1");
        }

        @Test
        @DisplayName("ID not found -> throws NoSuchElementException")
        void testThrowException() {
            //GIVEN

            //WHEN
            when(applicationsRepo.findById("2")).thenReturn(Optional.empty());
            //THEN
            Assertions.assertThrows(NoSuchElementException.class, () -> applicationsService.getAppById("2"));
            verify(applicationsRepo).findById("2");
        }

        @Test
        @DisplayName("add application, should return application")
        void addApplication() {
            //GIVEN
            Documentation documentation = new Documentation();
            Application expected = new Application("1", "App1", "desc1", "Nico", "Sven", 1001, "live", documentation, new ArrayList<AppEvent>());
            when(applicationsRepo.save(expected)).thenReturn(expected);

            //WHEN
            Application actual = applicationsService.addApp(expected);

            //THEN
            assertEquals(expected, actual);
            verify(applicationsRepo).save(expected);
        }

        @Test
        void testUpdateApp() {
            // GIVEN
            Documentation documentation = new Documentation();
            Application application = new Application("1", "App1", "desc1", "Nico", "Sven", "live", documentation, new ArrayList<AppEvent>());
            Application updatedApplication = new Application("1", "App1", "desc1", "Nico", "Sven", "terminated", documentation, new ArrayList<AppEvent>());

            when(applicationsRepo.existsById(any())).thenReturn(true);
            when(applicationsRepo.save(any())).thenReturn(updatedApplication);
            when(applicationsRepo.findById(any())).thenReturn(Optional.of(application));

            // WHEN
            Application actual = applicationsService.updateApp(application);

            // THEN
            verify(applicationsRepo).save(application);
            assertThat(actual, is(updatedApplication));
        }

        @Test
        void testUpdateApp_elementNotFound() {
            // GIVEN
            Documentation documentation = new Documentation();
            Application application = new Application("123ABC", "App1", "desc1", "Nico", "Sven", 1001, "live", documentation, new ArrayList<AppEvent>());

            when(applicationsRepo.existsById("123ABC")).thenThrow(NoSuchElementException.class);

            // WHEN
            Assertions.assertThrows(NoSuchElementException.class, () -> {
                applicationsService.updateApp(application);
            });
        }

}
