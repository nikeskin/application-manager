package nicokeskin.applicationmanager.model.api;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class IssueType {

    @JsonProperty("name")
    private final String name = "Task";

}
