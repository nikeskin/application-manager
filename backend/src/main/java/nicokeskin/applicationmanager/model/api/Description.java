package nicokeskin.applicationmanager.model.api;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class Description {

    @JsonProperty("type")
    private final String type = "doc";

    @JsonProperty("version")
    private final int version = 1;

    @JsonProperty("content")
    private final List<Content> content;

    public Description(List<Content> content) {
        this.content = content;
    }
}
