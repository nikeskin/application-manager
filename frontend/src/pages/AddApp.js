import {useEffect, useState} from "react";
import styled from "styled-components";
import * as React from 'react';
import Box from '@mui/material/Box';
import PageOne from "../components/PageOne";
import NextPageButton from "../components/NextPageButton";
import PageTwo from "../components/PageTwo";
import PreviousPageButton from "../components/PreviousPageButton";
import PageThree from "../components/PageThree";
import FinalSubmitButton from "../components/FinalSubmitButton";


export default function AddApp() {

    const [ formNumber, setFormNumber ] = useState(1);

    const [ appData, setAppData ] = useState({
        appName: "",
        businessContact: "",
        technicalContact: "",
        appStatus: "release in progress",
        documentation: {
            conceptOfRolesAndRights: null,
            supplierContract: null,
            technicalDesignConcept: null,
            testingConcept: null,
            userHandbook: null
        },
        description: "",
        applicationHistory: []
    })

    const renderPage = () => {
        switch (formNumber) {
            // TODO: Parse App data to prepopulate filled fields
            case 1:
                return (
                    <Page>
                        <PageOne appData={appData} setAppData={setAppData}/>
                    </Page>
                )
            case 2:
                return (
                    <Page>
                        <PageTwo appData={appData} setAppData={setAppData}/>
                    </Page>
                )
            case 3:
                return (
                    <Page>
                        <PageThree appData={appData} setAppData={setAppData}/>
                    </Page>
                )

            default:
                return "Error";
        }
    }


    useEffect(() => {
        renderPage()
        // Eslint disable next line
    }, [])


    return (
        <MuiBox
            sx={{
                width: '80%',
            }}
        >
            <form>
                {renderPage()}
                {formNumber >1 && <PreviousPageButton setAppData={setAppData} formNumber={formNumber} setFormNumber={setFormNumber}/> }
                {formNumber <3 && <NextPageButton appData={appData} setAppData={setAppData} formNumber={formNumber} setFormNumber={setFormNumber}/> }
                {formNumber === 3 && <FinalSubmitButton /> }

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
    padding-top: 5%;
    padding-right: 10%;
    padding-left: 10%;
  }
`