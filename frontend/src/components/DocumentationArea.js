import styled from "styled-components";
import EmailIcon from '@mui/icons-material/Email';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {SiJira} from 'react-icons/si';
import IconButton from '@mui/material/IconButton';
import {useHistory} from "react-router-dom";
import useForm from "../hooks/useForm";
import React from "react";
import {postJiraTicket} from "../service/backendApi";

export default function DocumentationArea({application, providedDocumentation, missingDocumentation}) {

    const {appId, id, businessContact, technicalContact, appName, applicationHistory} = application;
    const history = useHistory();
    const {setFormNumber} = useForm();

    const getDocumentationFieldName = (typeNumber) => {
        const typeNumberToOutputMatrix = {
            1: "Concept of Roles and Rights",
            2: "Supplier Contract",
            3: "Technical Design Concept",
            4: "Testing Concept",
            5: "User Handbook",
            6: "No such documentation found"
        }
        return typeNumberToOutputMatrix[typeNumber];
    }

    const getKeyForLink = (typeNumber) => {
        const typeNumberToOutputMatrix = {
            1: "conceptOfRolesAndRights",
            2: "supplierContract",
            3: "technicalDesignConcept",
            4: "testingConcept",
            5: "userHandbook",
            6: "No such documentation found"
        }
        return typeNumberToOutputMatrix[typeNumber];
    }

    const handleAddDocumentation = () => {
        history.push("/edit/" + id + "?formNumber=3");
        setFormNumber(3);
    }

    const handleMail = (fieldName) => {
        const subject = fieldName + ": " + appName + " (" + appId + ")";
        const businessContactMail = businessContact.replace(/ /g, ".") + "@test.de";
        const technicalContactMail = technicalContact.replace(/ /g, ".") + "@test.de";
        window.open(`mailto:${businessContactMail};${technicalContactMail}?subject=${subject}`);
    }

    const handleJiraTicket = (fieldName) => {
        postJiraTicket(id, appId, appName, fieldName, localStorage.getItem("token"))
            .then((data) => {
                window.open("https://appman.atlassian.net/jira/software/projects/APMN/boards/1?selectedIssue=" + data);
                history.push("#");
            })
            .catch(console.error);
    }

    const checkForTicketEventMatch = fieldName => {
        for (let i = 0; i < applicationHistory.length; i++) {
            if (applicationHistory[i].eventDescription.startsWith(fieldName + ": Missing")) {
                return true;
            }
        }
    }

    return (
        <Layout>
            <Provided>
                {providedDocumentation.length > 0 && <ProvidedHeadline>Provided:</ProvidedHeadline>}
                <InputLinkArea>
                    {providedDocumentation.map((item) => {
                        const fieldName = getDocumentationFieldName(item.type);
                        const keyForLink = getKeyForLink(item.type);
                        const link = item[keyForLink];
                        return (
                            <React.Fragment key={fieldName}>
                                <Input>{fieldName}:</Input>
                                <DocumentationLink href={link} target="_blank">{link}</DocumentationLink>
                            </React.Fragment>
                        )
                    })}
                </InputLinkArea>
            </Provided>
            <Missing>
                {missingDocumentation.length > 0 && <MissingHeadline>Missing:</MissingHeadline>}
                <InputLinkArea>
                    {missingDocumentation.map((item) => {
                        const fieldName = getDocumentationFieldName(item.type);
                        const ticketCreated = checkForTicketEventMatch(fieldName);
                        return (
                            <React.Fragment key={fieldName}>
                                <Input>{fieldName}</Input>
                                <Add onClick={handleAddDocumentation} title="Add missing documentation">
                                    <AddCircleIcon/>
                                </Add>
                                <MailIcon onClick={() => handleMail(fieldName)} title="Message responsible contacts">
                                    <EmailIcon/>
                                </MailIcon>
                                {ticketCreated ?
                                    <Jira disabled={true}
                                          title="Ticket already created">
                                        <SiJira/>
                                    </Jira> :
                                    <Jira onClick={() => handleJiraTicket(fieldName)}
                                          title="Create Jira ticket">
                                        <SiJira/>
                                    </Jira>}
                            </React.Fragment>
                        )
                    })}
                </InputLinkArea>
            </Missing>
        </Layout>
    )

}

const Layout = styled.div`
  display: grid;
  grid-column: 1 / 9;
  grid-template-columns: repeat(8, 1fr);
`

const Input = styled.div`
  padding-top: 10px;
  grid-column: 1 / 3;
`

const DocumentationLink = styled.a`
  padding-top: 10px;
  grid-column: 3 / 6;
`

const Provided = styled.div`
  grid-column: 1 / 5;
  display: flex;
  flex-direction: column;
  padding: 0 1%;
`

const Missing = styled.div`
  grid-column: 5 / 9;
  display: flex;
  flex-direction: column;
  padding: 0 1%;

`

const ProvidedHeadline = styled.h3`
  font-weight: bold;
  color: darkgreen;
`

const MissingHeadline = styled.h3`
  font-weight: bold;
  color: red;
`

const InputLinkArea = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: min-content;
`

const MailIcon = styled(IconButton)`
  && {
    grid-column: 4/5;
    padding: 10px 0 0 0;
    color: black;

    :hover {
      background-color: white;
    }
  }
`

const Add = styled(IconButton)`
  && {
    grid-column: 3/4;
    padding: 10px 0 0 0;
    color: black;

    :hover {
      background-color: white;
    }
  }
`

const Jira = styled(IconButton)`
  && {
    grid-column: 5/6;
    padding: 10px 0 0 0;
    color: black;

    :hover {
      background-color: white;
    }
  }
`
