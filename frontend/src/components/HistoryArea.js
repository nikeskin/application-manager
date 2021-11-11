import styled from "styled-components";

export default function HistoryArea( {application}) {

    const { applicationHistory } = application;

    return (
        <ComponentLayout applicationHistory={applicationHistory}>
            {applicationHistory?.slice(0).reverse().map(item => {
                 return <p style={{gridColumn: 1/2, marginTop:10, marginBottom:0}}>{item.eventDate}: {item.eventDescription}</p>
            }
            )}
        </ComponentLayout>
    )

}

const ComponentLayout = styled.div`
  display: grid;
  grid-column: 1/9;
  grid-template-columns: 1fr;
`