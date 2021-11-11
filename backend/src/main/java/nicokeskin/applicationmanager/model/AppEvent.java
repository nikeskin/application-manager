package nicokeskin.applicationmanager.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AppEvent {

    private String eventDescription;
    private String eventDate;

    public AppEvent(String eventDescription) {
        this.eventDescription = eventDescription;
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy - HH:mm:ss");
        this.eventDate = LocalDateTime.now().format(formatter);
    }
}
