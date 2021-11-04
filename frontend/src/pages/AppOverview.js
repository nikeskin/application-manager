import styled from "styled-components";
import FilterAndSort from "../components/FilterAndSort";
import AppBoard from "../components/AppBoard";
import useApplications from "../hooks/useApplications";

export default function AppOverview() {

    const { applications } = useApplications();

    return (
        <PageLayout>
            <FilterAndSort />
            <AppBoard applications={applications} />
        </PageLayout>)
}

const PageLayout = styled.div`
  padding-top: 2%;
  background-color: darkgrey;
  opacity: 95%;
  margin: 0;
`