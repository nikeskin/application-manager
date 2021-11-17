package nicokeskin.applicationmanager.model.api;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class Content {

    @JsonProperty("type")
    private final String type = "paragraph";

    public Content(List<ContentTwo> contentTwo) {
        this.contentTwo = contentTwo;
    }

    @JsonProperty("content")
    private final List<ContentTwo> contentTwo;

}
