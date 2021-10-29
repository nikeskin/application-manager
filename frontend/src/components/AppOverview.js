import styled from "styled-components";
import FilterAndSort from "./FilterAndSort";
import AppBoard from "./AppBoard";

export default function AppOverview() {
    return (
        <>
            <Header>App Overview</Header>
            <FilterAndSort />
            <AppBoard />
        </>)
}

const Header = styled.h2`
  background-color: darkgrey;
  opacity: 85%;
  margin: 0;
`

