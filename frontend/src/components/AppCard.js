import styled from "styled-components";
import Button from "@mui/material/Button";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import {useHistory} from "react-router-dom";
import useDocumentation from "../hooks/useDocumentation";

export default function AppCard({ application }) {

    const history = useHistory()

    const { documentationStatus } = useDocumentation(application);

    return (
        <CardLayout>
            <AppName>{application.appName}</AppName>
            <BusinessContact>Business Contact: {application.businessContact}</BusinessContact>
            <TechnicalContact>Technical Contact: {application.technicalContact}</TechnicalContact>
            <AppId>Id: {application.appId}</AppId>
            <AppStatus>Application Status: {application.appStatus}</AppStatus>
            <DocumentationStatus>Documentation Status: {documentationStatus}%</DocumentationStatus>
            <MoreButton onClick={() => history.push(`/details/${application.id}`)} variant="outlined" startIcon={<ReadMoreIcon />}>
                Details
            </MoreButton>
        </CardLayout>

    )

}

const AppId = styled.div`
    grid-row: 2 / 3;
    grid-column: 1 / 7;
    padding-left: 3%;
    padding-bottom: 1%;
`

const AppStatus = styled.div`
    grid-row: 5 / 6;
    grid-column: 1 / 7;
    padding-left: 3%;
  padding-bottom: 1%;
`

const DocumentationStatus = styled.div`
    grid-row: 6 / 7;
    grid-column: 1 / 7;
    padding-left: 3%;
  padding-bottom: 3%;
  

`

const BusinessContact = styled.div`
    grid-row: 3 / 4;
    grid-column: 1 / 7;
    padding-left: 3%;
  padding-bottom: 1%;

`

const AppName = styled.div`
    padding: 3% 0 5% 3%;
    grid-row: 1 / 2;
    grid-column: 1 / 7;
    align-self: center;
    justify-content: center;
    font-weight: bold;
`

const TechnicalContact = styled.div`
  grid-row: 4 / 5;
  grid-column: 1 / 7;
  padding-left: 3%;
  padding-bottom: 1%;

`

const CardLayout = styled.div`
  display: grid;
  grid-template-rows: repeat(6, min-content);
  grid-template-columns: repeat(8, 1fr);
  opacity: 100%;
  width: 864px;
  border: 2px solid #F27649;
  background-color: white;
  margin: 1%;
`

const MoreButton = styled(Button)`
    && {
      font-size: large;
      color: black;
      grid-column: 7 / 9;
      grid-row: 1 / 7;
      border-radius: 0;
      border: none;
      :hover {
        border: none;
        background-color: #F27649;
        color: white;
      }
    }
`
