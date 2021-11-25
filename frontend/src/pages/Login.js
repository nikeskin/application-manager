import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthProvider";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { SiJirasoftware } from 'react-icons/si';
import * as React from "react";
import {getClientId} from "../service/backendApi";
import EditIcon from "@mui/icons-material/Edit";



const initialState = {
    username: "",
    password: ""
}

export default function Login() {

    const [credentials, setCredentials] = useState(initialState);
    const [ errorMessage, setErrorMessage] = useState("");
    const [ clientId, setClientId ] = useState("");
    const { login } = useContext(AuthContext);

    useEffect(() => {
        getClientId().then(clientIdObject => clientIdObject.clientId)
            .then((id) => {
                setClientId(id)
            });
    }, [])

    // move clientId to useState and load with useEffect and empty dependency array

    const handleChange = event => {
        setCredentials({...credentials, [event.target.name]: event.target.value})
    }

    function handleClick(event) {
        event.preventDefault();
        if (credentials.username.length === 0) {
            setErrorMessage("Please enter an username!")
        } else if (credentials.password.length === 0) {
            setErrorMessage("Please enter a password!")
        } else if (credentials.username.length > 0 && credentials.password.length > 0) {
            login(credentials, setErrorMessage);
        }
    }

    const jiraUrl = `https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=${clientId}&scope=read%3Ame&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&state=test&response_type=code&prompt=consent`;

    function loginWithJira() {
            window.open(jiraUrl);
    }

    return (
        <MuiBox>
            <form style={{gridColumn: "1 / 2"}} onSubmit={handleClick}>
                <MuiTextField autoComplete="current-username" required={true} value={credentials.username} name="username" onChange={handleChange} fullWidth label="Username" id="username" />
                    <MuiTextField autoComplete="current-password" fullWidth style={{marginTop:"2%"}} label="Password" name="password" type="password" onChange={handleChange}
                           value={credentials.password}
                           required={true}/>
                { (errorMessage.length > 0 ) && <p style={{color: "red", margin: "2% 0 0 0%"}}>{errorMessage}</p> }
                <MuiButton onClick={handleClick}>Login</MuiButton>
            </form>
            <form style={{gridColumn: "2/3", justifySelf:"center"}} >
                <MuiJiraButton onClick={loginWithJira} startIcon={<JiraButton />}>Login With Jira</MuiJiraButton>
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
const MuiJiraButton = styled(Button)`
  && {
    padding: 6% 10%;
    width: 300px;
    color: white;
    background-color: darkblue;

    :hover {
      background-color: dodgerblue;
    }
  }
`

const JiraButton = styled(SiJirasoftware)`
    font-size: larger;
    color: white;
`

