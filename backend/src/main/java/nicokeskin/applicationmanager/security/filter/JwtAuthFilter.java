package nicokeskin.applicationmanager.security.filter;

import lombok.extern.slf4j.Slf4j;
import nicokeskin.applicationmanager.security.service.JWTUtilService;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Slf4j
@Component
public class JwtAuthFilter extends OncePerRequestFilter {

    private final JWTUtilService jwtUtils;

    public JwtAuthFilter(JWTUtilService jwtUtils) {
        this.jwtUtils = jwtUtils;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String token = getAuthToken(request);

        try {
            if (token != null && !token.isBlank()) {
                String username = jwtUtils.extractUsername(token);
                setSecurityContext(username);
            }

            filterChain.doFilter(request,response);

        } catch (Exception e) {
            throw new AccessDeniedException("no valid token! Access denied", e);
        }

    }

    private void setSecurityContext(String username) {
        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(username, "", List.of());
        SecurityContextHolder.getContext().setAuthentication(authToken);
    }

    private String getAuthToken(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        if (authHeader != null) {
            return authHeader.replace("Bearer", "").trim();
        }
        return null;
    }
}
