import styled from "styled-components/macro";

export default function Footer() {

    return (
        <StyledFooter>© A P P M A N - 2 0 2 1</StyledFooter>
    )

}

const StyledFooter = styled.h3`
  text-align: center;
  font-size: small;
  margin: 0;
  padding: 1%;
  background-color: #F27649;
  color: black;
`