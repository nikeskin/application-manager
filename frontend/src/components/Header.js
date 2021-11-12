import styled from "styled-components/macro";
import logo from "./images/logo_transparent_background.png"
import Navbar from "./Navbar";
import {useHistory} from "react-router-dom";

export default function Header() {

    const history = useHistory();

    return (
        <StyledHeader>
            <Logo onClick={() => history.push("/overview")} src={logo} alt="logo" />
            <Headline>Application Manager</Headline>
            <Navbar />
        </StyledHeader>
    )

}

const StyledHeader = styled.div`
  background-color: lightgrey;
  margin: 0;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 100px;
`

const Headline = styled.h1`
  font-family: 'Work Sans', sans-serif;
  align-self: center;
  font-size: 230%;
  font-weight: 500;
  font-style: italic;
`

const Logo = styled.img`
  width: 120px;
  padding-top: 5px;
  padding-bottom: 5px;
`

