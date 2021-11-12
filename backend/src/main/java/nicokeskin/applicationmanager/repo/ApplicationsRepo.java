package nicokeskin.applicationmanager.repo;

import nicokeskin.applicationmanager.model.Application;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApplicationsRepo extends MongoRepository<Application, String> {

    Application findFirstByOrderByAppIdDesc();

}
