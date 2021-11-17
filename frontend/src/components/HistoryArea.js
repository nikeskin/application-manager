import styled from "styled-components";
import Collapsible from "react-collapsible";
import "./HistoryArea.css"
import {BsChevronDown} from "react-icons/bs";


export default function HistoryArea( {application}) {

    const { applicationHistory } = application;

    return (

        <ComponentLayout applicationHistory={applicationHistory}>
            <Collapsible trigger={["Show Details", < BsChevronDown />]} >
            {applicationHistory?.slice(0).reverse().map(item => {
                 return <p key={item.eventDescription} style={{gridColumn: 1/2, marginTop:10, marginBottom:0}}>{item.eventDate}: {item.eventDescription}</p>
            }
            )}
            </Collapsible>
        </ComponentLayout>
    )

}

const ComponentLayout = styled.div`
  display: grid;
  grid-column: 1/9;
  grid-template-columns: 1fr;
  
`