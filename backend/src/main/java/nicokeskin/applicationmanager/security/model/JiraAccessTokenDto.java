package nicokeskin.applicationmanager.security.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JiraAccessTokenDto {

    @JsonProperty("access_token")
    private String accessToken;
}