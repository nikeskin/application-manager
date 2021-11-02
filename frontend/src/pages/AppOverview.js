import styled from "styled-components";
import FilterAndSort from "../components/FilterAndSort";
import AppBoard from "../components/AppBoard";
import useApplications from "../hooks/useApplications";

export default function AppOverview() {

    const { applications } = useApplications();

    return (
        <PageLayout>
            <Header>App Overview</Header>
            <FilterAndSort />
            <AppBoard applications={applications} />
        </PageLayout>)
}

const Header = styled.h2`

`

const PageLayout = styled.div`
  background-color: darkgrey;
  opacity: 95%;
  margin: 0;
`