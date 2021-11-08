package nicokeskin.applicationmanager.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AppEvent {

    private String eventDescription;
    private String eventDate;

    public AppEvent(String eventDescription) {
        this.eventDescription = eventDescription;
        this.eventDate = LocalDateTime.now().toString();
    }
}
