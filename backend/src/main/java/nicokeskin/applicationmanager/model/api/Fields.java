package nicokeskin.applicationmanager.model.api;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class Fields {

    @JsonProperty("summary")
    private final String summary;
    @JsonProperty("issuetype")
    private final IssueType issueType = new IssueType();
    @JsonProperty("project")
    private final Project project = new Project();
    @JsonProperty("description")
    private final Description description;

    public Fields(String summary, Description description) {
        this.summary = summary;
        this.description = description;
    }
}
