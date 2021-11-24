import {createContext, useState} from "react";
import {postLogin} from "../service/backendApi";
import {useHistory} from "react-router-dom";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [token, setToken] = useState("");
    const history = useHistory();

    // const loginWithGithub = (code) => {
    //     postGithubCode(code)
    //         .then(response => response.data)
    //         .then(token => {
    //             setToken(token)
    //         })
    //         .then(() => history.push(("/")))
    //         .catch(console.error);
    // }

    const login = (credentials, setErrorMessage) => {
        postLogin(credentials)
            .then(response => response.data)
            .then(token => {
                setToken(token)
                localStorage.setItem("token", token.toString())
            })
            .then(() => {
                history.push("/overview");
                window.location.reload();
            })
            .catch(err => {
                if (err.response.status === 401) {
                    setErrorMessage("Login failed! Please check your username and password.")
                } else {
                    return console.error;
                }
            })
    }

    return (
        <AuthContext.Provider value={{ token, login }}>
            {children}
        </AuthContext.Provider>
    )


}