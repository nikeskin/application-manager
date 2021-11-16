package nicokeskin.applicationmanager.model.api;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class Project {

    @JsonProperty("key")
    private final String key = "APMN";

}
