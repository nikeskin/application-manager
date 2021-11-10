import { useState} from "react";
import styled from "styled-components";
import * as React from 'react';
import Box from '@mui/material/Box';
import PageOne from "../components/PageOne";
import NextPageButton from "../components/NextPageButton";
import PageTwo from "../components/PageTwo";
import PreviousPageButton from "../components/PreviousPageButton";
import PageThree from "../components/PageThree";
import FinalSubmitButton from "../components/FinalSubmitButton";
import HorizontalLinearStepper from "../components/HorizontalLinearStepper";


export default function AddApp() {

    const [ formNumber, setFormNumber ] = useState(1);

    const [ appData, setAppData ] = useState({
        appName: "",
        businessContact: "",
        technicalContact: "",
        appStatus: "release in progress",
        documentation: {
            conceptOfRolesAndRights: "",
            supplierContract: null,
            technicalDesignConcept: null,
            testingConcept: null,
            userHandbook: null
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

    return (
        <MuiBox
            sx={{
                width: '80%',
            }}
        >
            <form>
                <HorizontalLinearStepper formNumber={formNumber}/>
                {renderPage()}
                {formNumber >1 && <PreviousPageButton setAppData={setAppData} formNumber={formNumber} setFormNumber={setFormNumber}/> }
                {formNumber <3 && <NextPageButton setAppData={setAppData} formNumber={formNumber} setFormNumber={setFormNumber}/> }
                {formNumber === 3 && <FinalSubmitButton appData={appData}/> }
            </form>

        </MuiBox>
    )

}

const Page = styled.div`
  padding: 1% 5% 0 5%;
`

const MuiBox = styled(Box)`
  && {
    background-color: darkgrey;
    opacity: 95%;
    padding-top: 2%;
    padding-right: 10%;
    padding-left: 10%;
  }
`