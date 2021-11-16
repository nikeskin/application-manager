package nicokeskin.applicationmanager.model.api;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class JiraTicketInput {

    @JsonProperty("fields")
    private final Fields fields;

    public JiraTicketInput(Fields fields) {
        this.fields = fields;
    }
}