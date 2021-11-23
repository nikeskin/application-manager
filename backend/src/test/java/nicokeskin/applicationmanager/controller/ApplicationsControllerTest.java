package nicokeskin.applicationmanager.controller;


import nicokeskin.applicationmanager.model.AppEvent;
import nicokeskin.applicationmanager.model.Application;
import nicokeskin.applicationmanager.model.Documentation;
import nicokeskin.applicationmanager.repo.ApplicationsRepo;
import nicokeskin.applicationmanager.security.model.AppUser;
import nicokeskin.applicationmanager.security.repo.AppUserRepo;
import nicokeskin.applicationmanager.service.ApplicationsService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.print.Doc;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
    class ApplicationsControllerTest {

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private ApplicationsRepo applicationsRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AppUserRepo appUserRepo;

    @Value("${jwt.secret}")
    private String JWT_SECRET;

    @BeforeEach
    public void clearDb() {
        applicationsRepo.deleteAll();
    }

    private HttpHeaders getHttpHeadersWithJWT() {
        appUserRepo.save(AppUser.builder().username("Nico").password(passwordEncoder.encode("1234")).build());
        AppUser loginData = new AppUser("Nico", "1234");
        ResponseEntity<String> response = testRestTemplate.postForEntity("/auth/login", loginData, String.class);
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(response.getBody());
        return headers;
    }

    @Test
    @DisplayName("Should return a list with all applications from db")
    void testListApps() {
        // GIVEN
        HttpHeaders headers = getHttpHeadersWithJWT();
        Documentation documentation = new Documentation();
        applicationsRepo.save(new Application("1", "App1", "desc1", "Nico", "Sven", 1001, "live", documentation, new ArrayList<AppEvent>()));
        applicationsRepo.save(new Application("2", "App2", "desc2", "Nico", "Maria", 1002, "terminated", documentation, new ArrayList<AppEvent>()));
        // WHEN
        ResponseEntity<Application[]> response = testRestTemplate.exchange("/api/overview", HttpMethod.GET, new HttpEntity<>(headers), Application[].class);
        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                new Application("1", "App1", "desc1", "Nico", "Sven", 1001, "live", documentation, new ArrayList<AppEvent>()),
                new Application("2", "App2", "desc2", "Nico", "Maria", 1002, "terminated", documentation, new ArrayList<AppEvent>())
        ));
    }

    @Test
    @DisplayName("Should return one application from db")
    void testGetAppById() {
        //GIVEN
        HttpHeaders headers = getHttpHeadersWithJWT();
        Documentation documentation = new Documentation();
        applicationsRepo.save(new Application("1", "App1", "desc1", "Nico", "Sven", 1001, "live", documentation, new ArrayList<AppEvent>()));
        //WHEN
        ResponseEntity<Application> response = testRestTemplate.exchange("/api/details/1", HttpMethod.GET, new HttpEntity<>(headers), Application.class);
        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(new Application("1", "App1", "desc1", "Nico", "Sven", 1001, "live", documentation, new ArrayList<AppEvent>())));
    }

    @Test
    void addApplication() {
        // GIVEN
        HttpHeaders headers = getHttpHeadersWithJWT();
        Documentation documentation = new Documentation();
        Application application = new Application("1", "App1", "desc1", "Nico", "Sven", "live", documentation, new ArrayList<AppEvent>());
        Application expected = new Application("1", "App1", "desc1", "Nico", "Sven", 1001, "live", documentation, new ArrayList<AppEvent>());

        // WHEN
        ResponseEntity<Application> postResponse = testRestTemplate.exchange("/api/add-app", HttpMethod.POST, new HttpEntity<>(application, headers), Application.class);
        Application actual = postResponse.getBody();

        // THEN
        assertEquals(HttpStatus.OK, postResponse.getStatusCode());
        assertNotNull(actual);
        expected.setApplicationHistory(actual.getApplicationHistory());
        assertEquals(expected, actual);

        // THEN: check via GET if element was created
        String actualId = actual.getId();
        ResponseEntity<Application> getResponse = testRestTemplate.exchange("/api/details/" + actualId, HttpMethod.GET, new HttpEntity<>(headers), Application.class);
        Application persistedApplication = getResponse.getBody();

        assertNotNull(persistedApplication);
        assertEquals(actualId, persistedApplication.getId());
        assertEquals(application.getDescription(), application.getDescription());
        assertEquals(application.getAppStatus(), application.getAppStatus());
    }

    @Test
     void putApplicationShouldUpdateItem() {
        //GIVEN
        HttpHeaders headers = getHttpHeadersWithJWT();
        Documentation documentation = new Documentation();
        Application application = new Application("1", "App1", "desc1", "Nico", "Sven", "live", documentation, new ArrayList<AppEvent>());
        applicationsRepo.save(application);
        Application expected = new Application("1", "App1", "desc1", "Nico", "Sven", "terminated", documentation, new ArrayList<AppEvent>());

        //WHEN
        application.setAppStatus("terminated");
        testRestTemplate.exchange("/api/edit-app/1", HttpMethod.PUT, new HttpEntity<>(application, headers), Application.class);

        //THEN
        Application actual = applicationsRepo.findById("1").get();
        expected.setApplicationHistory(applicationsRepo.findById("1").get().getApplicationHistory());
        assertEquals(expected, actual);
    }

    @Test
     void putApplicationShouldThrowException() {
        //GIVEN
        HttpHeaders headers = getHttpHeadersWithJWT();
        //WHEN
        Documentation documentation = new Documentation();
        Application application = new Application("2", "App1", "desc1", "Nico", "Sven", "live", documentation, new ArrayList<AppEvent>());
        ResponseEntity<Application> response = testRestTemplate.exchange("/api/edit-app/1", HttpMethod.PUT, new HttpEntity<>(application, headers), Application.class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.UNPROCESSABLE_ENTITY));
    }

    @Test
    void putNotExistingApplicationShouldThrowException() {
        //GIVEN
        HttpHeaders headers = getHttpHeadersWithJWT();
        //WHEN
        Documentation documentation = new Documentation();
        Application application = new Application("1", "App1", "desc1", "Nico", "Sven", "live", documentation, new ArrayList<AppEvent>());
        ResponseEntity<Application> response = testRestTemplate.exchange("/api/edit-app/1", HttpMethod.PUT, new HttpEntity<>(application, headers), Application.class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.NOT_FOUND));
    }

}
