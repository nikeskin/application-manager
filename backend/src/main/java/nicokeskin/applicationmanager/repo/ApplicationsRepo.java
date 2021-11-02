package nicokeskin.applicationmanager.repo;

import nicokeskin.applicationmanager.model.Application;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApplicationsRepo extends PagingAndSortingRepository<Application, String> {
    List<Application> findAll();
}
