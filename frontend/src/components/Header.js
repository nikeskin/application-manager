import styled from "styled-components/macro";
import logo from "./images/logo_transparent_background.png"
import Navbar from "./Navbar";

export default function Header() {

    return (
        <StyledHeader>
            <Logo src={logo} alt="logo" />
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
  padding: 10px 100px;
`

const Headline = styled.h1`
  font-family: 'Work Sans', sans-serif;
  align-self: center;
    font-size: 230%;
    font-weight: 900;
`

const NavBar = styled.ul`
    
`

const Text = styled.p`
  text-align: right;
  margin: 0;
`

const Logo = styled.img`
  width: 120px;
  padding-top: 10px;
  padding-bottom: 10px;
`

