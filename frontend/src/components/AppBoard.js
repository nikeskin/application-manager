import styled from "styled-components";
import AppCard from "./AppCard";

export default function AppBoard({ applications }) {


    return (
        <Section>
            {
                applications.map(application => <AppCard key={application.id} application={application} />)
            }
        </Section>
    )
}

const Section = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 5%;
`