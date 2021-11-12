import { useState } from "react";
import PageOne from "../components/PageOne";
import PageTwo from "../components/PageTwo";
import PageThree from "../components/PageThree";
import * as React from "react";
import styled from "styled-components";

export default function useForm() {

    const [ formNumber, setFormNumber ] = useState(1);

    const [ errorMessage, setErrorMessage ] = useState ("")

    const [ appData, setAppData ] = useState({
        appName: "",
        businessContact: "",
        technicalContact: "",
        appStatus: "",
        documentation: {
            conceptOfRolesAndRights: "",
            supplierContract: "",
            technicalDesignConcept: "",
            testingConcept: "",
            userHandbook: ""
        },
        description: "",
        applicationHistory: []
    })

    const handleChange = (event) => {
        if (formNumber < 3) {
            setAppData({...appData, [event.target.name]: event.target.value})
        } else if ( formNumber === 3) {
            const { documentation } = appData;
            const newDocumentation = {...documentation, [event.target.name]: event.target.value}
            setAppData({...appData, documentation: newDocumentation})
        }
    }

    const renderPage = () => {
        switch (formNumber) {
            case 1:
                return (
                    <Page>
                        <PageOne handleChange={handleChange} appData={appData}/>
                    </Page>
                )
            case 2:
                return (
                    <Page>
                        <PageTwo handleChange={handleChange} appData={appData}/>
                    </Page>
                )
            case 3:
                return (
                    <Page>
                        <PageThree handleChange={handleChange} appData={appData}/>
                    </Page>
                )

            default:
                return "Error";
        }
    }

    return { formNumber, setFormNumber, appData, setAppData, errorMessage, setErrorMessage, handleChange, renderPage }
}

const Page = styled.div`
  padding: 1% 5% 0 5%;
`