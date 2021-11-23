package nicokeskin.applicationmanager.security.repo;


import nicokeskin.applicationmanager.security.model.AppUser;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppUserRepo extends PagingAndSortingRepository<AppUser, String> {
}
