package nicokeskin.applicationmanager.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document("applications")
public class Application {

    @Id
    private String id;
    private String appName;
    private String description;
    private String businessContact;
    private String technicalContact;
    private int appId;
    private String appStatus;
    private int documentationStatus;
    private Documentation documentation;

}
