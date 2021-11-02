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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`