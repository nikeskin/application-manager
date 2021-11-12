package nicokeskin.applicationmanager.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

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
    private Documentation documentation;
    private List<AppEvent> applicationHistory;

    public Application(String id, String appName, String description, String businessContact, String technicalContact, String appStatus, Documentation documentation, List<AppEvent> applicationHistory) {
        this.id = id;
        this.appName = appName;
        this.description = description;
        this.businessContact = businessContact;
        this.technicalContact = technicalContact;
        this.appStatus = appStatus;
        this.documentation = documentation;
        this.applicationHistory = applicationHistory;
    }
}
