package nicokeskin.applicationmanager.controller.exception;

public class JiraAuthException extends RuntimeException {

    public JiraAuthException(String message) {
        super(message);
    }

    public JiraAuthException(String message, Exception e) {
        super(message, e);
    }
}
