import {useLocation} from "react-router-dom";
import styled from "styled-components";
import {useEffect} from "react";
import {postLoginWithJira} from "../service/backendApi";

export default function Auth() {

    const query = new URLSearchParams(useLocation().search);
    const code = query.get("code");

    useEffect(() => {
        postLoginWithJira(code)
            .then()
    }, [])


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