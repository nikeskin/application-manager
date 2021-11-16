package nicokeskin.applicationmanager.model.api;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class ContentTwo {

    @JsonProperty("type")
    private final String type = "text";
    private final String text;

    public ContentTwo(String text) {
        this.text = text;
    }
}
