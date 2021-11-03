package nicokeskin.applicationmanager.controller;


import nicokeskin.applicationmanager.model.Application;
import nicokeskin.applicationmanager.model.Documentation;
import nicokeskin.applicationmanager.repo.ApplicationsRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;

import javax.print.Doc;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.arrayContainingInAnyOrder;
import static org.hamcrest.Matchers.is;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
    class ApplicationsControllerTest {

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private ApplicationsRepo applicationsRepo;

    @BeforeEach
    public void clearDb() {
        applicationsRepo.deleteAll();
    }

    @Test
    @DisplayName("Should return a list with all applications from db")
    void testListApps() {
        // GIVEN
        Documentation documentation = new Documentation();
        applicationsRepo.save(new Application("1", "App1", "desc1", "Nico", "Sven", 1001, "live", 0.8));
        applicationsRepo.save(new Application("2", "App2", "desc2", "Nico", "Maria", 1002, "terminated", 1.0));
        // WHEN
        ResponseEntity<Application[]> responseEntity = testRestTemplate.exchange("/api/overview", HttpMethod.GET, new HttpEntity<>(""), Application[].class);
        // THEN
        assertThat(responseEntity.getStatusCode(), is(HttpStatus.OK));
        assertThat(responseEntity.getBody(), arrayContainingInAnyOrder(
                new Application("1", "App1", "desc1", "Nico", "Sven", 1001, "live", 0.8),
                new Application("2", "App2", "desc2", "Nico", "Maria", 1002, "terminated", 1.0)
        ));

    }
}
