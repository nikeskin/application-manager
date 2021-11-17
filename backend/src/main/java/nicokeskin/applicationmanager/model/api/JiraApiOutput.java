package nicokeskin.applicationmanager.model.api;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class JiraApiOutput {

    @JsonProperty("id")
    private String id;

    @JsonProperty("key")
    private String key;

    @JsonProperty("self")
    private String self;

}