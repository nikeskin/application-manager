import {useContext, useState} from "react";
import {AuthContext} from "../context/AuthProvider";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import GithubButton from "react-github-login-button";



const initialState = {
    username: "",
    password: ""
}

export default function Login() {

    const [credentials, setCredentials] = useState(initialState);
    const { login } = useContext(AuthContext);

    // move clientId to useState and load with useEffect and empty dependency array

    const handleChange = event => {
        setCredentials({...credentials, [event.target.name]: event.target.value})
    }

    function handleClick(event) {
        event.preventDefault();
        login(credentials);
    }

    function loginWithGithub() {
        console.log("login with github")
    }

    return (
        <MuiBox>
            <form style={{gridColumn: "1 / 2"}} onSubmit={handleClick}>
                <MuiTextField autoComplete="current-username" required={true} value={credentials.username} name="username" onChange={handleChange} fullWidth label="Username" id="username" />
                    <MuiTextField autoComplete="current-password" fullWidth style={{marginTop:"2%"}} label="Password" name="password" type="password" onChange={handleChange}
                           value={credentials.password}
                           required={true}/>
                <MuiButton onClick={handleClick}>Login</MuiButton>
            </form>
            <form style={{gridColumn: "2/3", justifySelf:"center"}} >
                <GithubButton
                    className="button" onClick={loginWithGithub}
                />
            </form>
        </MuiBox>



    )


}

const MuiTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#F27649',
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: '#F27649',
        },
    },
});

const MuiBox = styled(Box)`
  && {
    background-color: darkgrey;
    opacity: 95%;
    padding-top: 5%;
    padding-right: 10%;
    padding-left: 10%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

const MuiButton = styled(Button)`
  && {
    margin-top: 5%;
    margin-bottom: 10%;
    padding: 1% 5%;
    color: black;
    background-color: #F27649;

    :hover {
      background-color: darksalmon;
    }
  }
`