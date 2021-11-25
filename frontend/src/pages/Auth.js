import {useLocation} from "react-router-dom";
import styled from "styled-components";
import {useContext, useEffect} from "react";
import {AuthContext} from "../context/AuthProvider";

export default function Auth() {

    const query = new URLSearchParams(useLocation().search);
    const code = query.get("code");

    const { loginWithJira } = useContext(AuthContext);

    useEffect(() => {
        loginWithJira(code)
        console.log("login with jira")
        //eslint-disable-next-line
    }, [code])

    return (
        <Layout>
            <p>You are being logged in!</p>
        </Layout>
    )
}

const Layout = styled.div`
  && {
    background-color: darkgrey;
    opacity: 95%;
    padding-top: 5%;
    padding-right: 10%;
    padding-left: 10%;
    display: grid;
  }
`