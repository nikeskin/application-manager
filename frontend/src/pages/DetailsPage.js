import useDetailedApplication from "../hooks/useDetailedApplication";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import styled from "styled-components";
import HistoryArea from "../components/HistoryArea";
import DocumentationArea from "../components/DocumentationArea";
import useDocumentation from "../hooks/useDocumentation";

export default function DetailsPage() {

    const id = useParams();
    const { application, getAppById } = useDetailedApplication();
    const { missingDocumentation, providedDocumentation, documentationStatus } = useDocumentation(application);

    useEffect(() => {
        getAppById(id)
    }, [id, getAppById])

    return (

        <Wrapper>
            <FirstHeadline>{application.appName} (Id: {application.appId})  -  General Information</FirstHeadline>
            <BasicInfo>
                <Input>Business Contact: {application.businessContact}</Input>
                <Input>Technical Contact: {application.technicalContact}</Input>
                <Input>Application Status: {application.appStatus}</Input>
                <Input>Application Type: {application.type}</Input>
                <Input>Protection Level: {application.protectionLevel}</Input>
                <Input>Documentation Status: {documentationStatus}%</Input>
            </BasicInfo>
            <DescriptionField> Description:
                <Input style={{fontStyle: "italic", textAlign: "justify", lineHeight: 1.6}}>{application.description}</Input>
            </DescriptionField>
            <SecondHeadline>Application Documentation</SecondHeadline>
            <Documentation providedDocumentation={providedDocumentation} missingDocumentation={missingDocumentation}/>
            <ThirdHeadline>Application History</ThirdHeadline>
            <HistoryArea application={application} />
        </Wrapper>

    )

}

const Wrapper = styled.div`
  margin: 0;
  background-color: white;
  opacity: 1;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(6, min-content);
  padding: 2% 7%;
`

const FirstHeadline = styled.h2`
  grid-row: 1 / 2;
  grid-column: 1 / 9;
  margin:0 0 1% 0;
`

const SecondHeadline = styled.h2`
  grid-row: 3 / 4;
  grid-column: 1 / 9;
  margin:2% 0 1% 0;
  padding-top: 1%;
  border-top: 1px solid dimgrey;
`

const ThirdHeadline = styled.h2`
  grid-row: 5 / 6;
  grid-column: 1 / 9;
  margin:2% 0 1% 0;
  padding-top: 1%;
  border-top: 1px solid dimgrey;
`

const BasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 / 4;
`
const Input = styled.div`
    padding-top: 10px;
`

const DescriptionField = styled.div`
  grid-column: 4 / 9;
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`

const Documentation = styled(DocumentationArea)`
    grid-column: 1 / 9;
`