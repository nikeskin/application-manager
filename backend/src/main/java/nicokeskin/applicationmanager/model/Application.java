package nicokeskin.applicationmanager.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.util.HashMap;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Application {

    @Id
    private String id;
    private String appName;
    private String description;
    private String businessContact;
    private String technicalContact;
    private int AppId;
    private String appStatus;
    private Documentation documentation;

}
