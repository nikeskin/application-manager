import styled from "styled-components";
import EmailIcon from '@mui/icons-material/Email';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { SiJira } from 'react-icons/si';
import IconButton from '@mui/material/IconButton';

export default function DocumentationArea({ providedDocumentation, missingDocumentation }) {

    //Todo use one component and have just one list

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

    return (

        // Todo hardcode list / no map needed
        <Layout>
            <Provided>
                {providedDocumentation.length > 0 && <ProvidedHeadline>Provided:</ProvidedHeadline>}
                <InputLinkArea>
                    {providedDocumentation.map((item) => {
                        const fieldName = getDocumentationFieldName(item.type);
                        const keyForLink = getKeyForLink(item.type);
                        const link = item[keyForLink];
                        return (
                            <>
                                <Input>{fieldName}:</Input>
                                <DocumentationLink href={link} target="_blank">{link}</DocumentationLink>
                            </>
                        )
                    })}
                </InputLinkArea>
            </Provided>
            <Missing>
                {missingDocumentation.length > 0 && <MissingHeadline>Missing:</MissingHeadline>}
                <InputLinkArea>
                    {missingDocumentation.map((item) => {
                        const fieldName = getDocumentationFieldName(item.type);
                        return (
                            // TODO: Add section with unique key
                            <>
                                <Input>{fieldName}</Input>
                                <Add title="Add missing documentation">
                                    <AddCircleIcon/>
                                </Add>
                                <MailIcon title="Message responsible contacts">
                                    <EmailIcon/>
                                </MailIcon>
                                <Jira title="Create Jira ticket">
                                    <SiJira/>
                                </Jira>
                            </>
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